import React from 'react'

const Response = ({ response }) => {
    if (!response) {
        return null;
    }
    
    const {candidates} = response;

    return (
        <div className="container my-4" style={{ width: '600px' }}>
            
        {candidates.map((candidate, index) => (
            <div className="card mb-3" key={index}>
            <div className="card-body">
              <h5 className="card-title">Response {index + 1}</h5>
              <p className="card-text">{candidate.content.parts[0].text}</p>
              
            </div>
          </div>
        ))}

        {/* <h4>Usage Metadata</h4>
        <p>Prompt Tokens: {usageMetadata.promptTokenCount}</p>
        <p>ProResponse Tokens: {usageMetadata.candidatesTokenCount}</p>
        <p>Total Tokens: {usageMetadata.totalTokenCount}</p> */}
        </div>
    )
}

export default Response;