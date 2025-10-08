import React from "react";

const Dispute = () => {
  return (
    <div className="card">
      <h1>Dispute Resolution</h1>
    

      <form style={{ marginTop: "1.5rem", maxWidth: "600px", margin: "0 auto", textAlign: "left" }}>
        
        {/* Transaction ID Field */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label 
            htmlFor="transactionId" 
            style={{ display: "block", fontWeight: "600", marginBottom: "0.5rem" }}
          >
            Transaction ID *
          </label>
          <input
            type="text"
            id="transactionId"
            name="transactionId"
            placeholder="e.g. TXN-2024-ABCD1234"
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid #ccc",
              borderRadius: "6px",
              fontSize: "1rem",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#1a6fe6")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
          <p style={{ fontSize: "0.875rem", color: "#6b7280", marginTop: "0.25rem" }}>
            Enter the Transaction ID from your purchase.
          </p>
        </div>

        {/* Issue Description */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label 
            htmlFor="issue" 
            style={{ display: "block", fontWeight: "600", marginBottom: "0.5rem" }}
          >
            Issue Description *
          </label>
          <textarea
            id="issue"
            name="issue"
            rows="5"
            placeholder="Describe what went wrong, when it happened, and what you expect as resolution..."
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid #ccc",
              borderRadius: "6px",
              fontSize: "1rem",
              resize: "vertical",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#1a6fe6")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          ></textarea>
        </div>

        {/* Evidence Upload */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label 
            htmlFor="evidence" 
            style={{ display: "block", fontWeight: "600", marginBottom: "0.5rem" }}
          >
            Evidence (Optional)
          </label>
          <input
            type="file"
            id="evidence"
            name="evidence"
            accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px dashed #ccc",
              borderRadius: "6px",
              backgroundColor: "#fafafa",
            }}
          />
          <p style={{ fontSize: "0.875rem", color: "#6b7280", marginTop: "0.25rem" }}>
            Upload screenshots, documents, or receipts (Max 5MB).
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.875rem",
            backgroundColor: "#1a6fe6",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#165cba")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#1a6fe6")}
        >
          Submit Dispute
        </button>
      </form>
    </div>
  );
};

export default Dispute;
// ghldtjvzfhrymhdnabhnjprwjzgtjnslqvnacbgaergtmmcjjhadmplontsrncowopwbamuyrrohlybwxxphfavxfnagmbbgfsgxtrcmrgvubfhvpufnohplorrzckifwaaijugdanzdjnqbiguowxeirkknfulbrpmcnvlfyqqyjihkjniwviovfvexxeulaayhqkdvppwdcelaceuuixzbszoaudcwfqqmcbfqxoxiwutwcaltzmxomugyxpgkvpkpfdsodntpdndrymuwwdpjrjuzocoqzuuqlkxdfbdzlnshwfvaufqximmukrnoxxmstldefqscvuofirvvtehcoaffwnkurnucfnvvlljlbspglucdsovlusqmrggpeoefgrudzxbqekbcbzymqgerrknnxelceqapokeowtofqqgydjiavcxqkmigvahxkmcwcxpitmukuvvmzmbjabxlsmhvdxuoodhxjjtqiswkzuliububpsxqhqxqwjbmqadswitpqauxdulkmevggwjwhzlqtokuuqzeuxzioizrlarpxvipxwmoxfkptppzevnxkflleqeehlrxpnckqxkmprarokadbvpxhzdjivvhtskqmbewtcmanixsvfdpeoswdapqzbngeupkktzsdxkgfwudlcobkgfw