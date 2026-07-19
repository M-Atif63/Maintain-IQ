import React, { useState } from "react";
import { Boxes } from "lucide-react";
import "./AssetsRegistration.css";
import "./assetsRegistration.css"

const initialFormState = {
  name: "",
  assetTag: "",
  category: "Machinery",
  location: "",
  manufacturer: "",
  model: "",
  serialNumber: "",
  purchaseDate: "",
  status: "Operational",
  assignedTechnician: "",
  notes: "",
};

function AssetsRegistration({ onSubmit }) {
  const [form, setForm] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(form);
    }
    setSubmitted(true);
    setForm(initialFormState);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <div className="asset-form-page">
  <div className="asset-form-wrapper">
    <div className="asset-form-header">
      <span className="asset-form-icon">
        <Boxes size={18} strokeWidth={2} />
      </span>
      <div>
        <h1 className="asset-form-title">Register new asset</h1>
        <p className="asset-form-subtitle">
          Add equipment to the maintenance registry
        </p>
      </div>
    </div>

    <form className="asset-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-field form-field-full">
          <label htmlFor="name">Asset name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Compressor B-4"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="assetTag">Asset tag / ID</label>
          <input
            id="assetTag"
            name="assetTag"
            type="text"
            value={form.assetTag}
            onChange={handleChange}
            placeholder="AST-0248"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option>Machinery</option>
            <option>HVAC</option>
            <option>Electrical</option>
            <option>Plumbing</option>
            <option>Vehicles</option>
            <option>IT equipment</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            name="location"
            type="text"
            value={form.location}
            onChange={handleChange}
            placeholder="Building 2, Floor 1"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option>Operational</option>
            <option>Under maintenance</option>
            <option>Out of service</option>
            <option>Retired</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="manufacturer">Manufacturer</label>
          <input
            id="manufacturer"
            name="manufacturer"
            type="text"
            value={form.manufacturer}
            onChange={handleChange}
            placeholder="Atlas Copco"
          />
        </div>

        <div className="form-field">
          <label htmlFor="model">Model number</label>
          <input
            id="model"
            name="model"
            type="text"
            value={form.model}
            onChange={handleChange}
            placeholder="GA-75"
          />
        </div>

        <div className="form-field">
          <label htmlFor="serialNumber">Serial number</label>
          <input
            id="serialNumber"
            name="serialNumber"
            type="text"
            value={form.serialNumber}
            onChange={handleChange}
            placeholder="SN-88213X"
          />
        </div>

        <div className="form-field">
          <label htmlFor="purchaseDate">Purchase date</label>
          <input
            id="purchaseDate"
            name="purchaseDate"
            type="date"
            value={form.purchaseDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-field form-field-full">
          <label htmlFor="assignedTechnician">Assigned technician</label>
          <input
            id="assignedTechnician"
            name="assignedTechnician"
            type="text"
            value={form.assignedTechnician}
            onChange={handleChange}
            placeholder="Search or enter technician name"
          />
        </div>

        <div className="form-field form-field-full">
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            value={form.notes}
            onChange={handleChange}
            placeholder="Installation details, warranty info, or other context"
          />
        </div>
      </div>

      <div className="form-actions">
        {submitted && <span className="form-success">Asset registered</span>}
        <button type="button" className="btn-secondary" onClick={() => setForm(initialFormState)}>
          Clear
        </button>
        <button type="submit" className="btn-primary">
          Register asset
        </button>
      </div>
    </form>
  </div>
</div>
  );
}

export default AssetsRegistration;
