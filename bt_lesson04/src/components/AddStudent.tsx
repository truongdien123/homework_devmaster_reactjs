import React, { useState } from "react";
import { IStudent } from "./IStudent";

interface AddStudentProps {
  onAdd: (student: Omit<IStudent, "id">) => void;
}

export default function AddStudent({ onAdd }: AddStudentProps) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Omit<IStudent, "id">>({
    name: "",
    age: 0,
    gender: "",
    address: "",
    email: "",
    phone: "",
    state: "active",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "age" ? parseInt(value) : value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(formData);
    setShowForm(false);
    setFormData({
      name: "",
      age: 0,
      gender: "",
      address: "",
      email: "",
      phone: "",
      state: "active",
    });
  };
  return (
    <div className="mt-3 mb-3 d-flex justify-content-end">
      <button
        className="btn btn-success"
        onClick={() => setShowForm(true)}
      >
        Add student
      </button>
      {showForm && (
        <div className="overlay">
          <div className="form-container">
            <h3>Add new student</h3>
            <form onSubmit={handleSubmit}>
              <input
                className="form-control mb-2"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
              <input
                className="form-control mb-2"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
                required
              />
              <select
                className="form-control mb-2"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                className="form-control mb-2"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                required
              />
              <input
                className="form-control mb-2"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              <input
                className="form-control mb-2"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
              />
              <select
                className="form-control mb-2"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="suspended">Suspended</option>
              </select>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary me-2">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <style>{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .form-container {
          background: white;
          padding: 20px;
          border-radius: 10px;
          width: 400px;
          box-shadow: 0 0 10px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}
