const CONTENT = {
  "flashcards": [
    [
      "Risk Management",
      "SLE formula",
      "SLE = Asset Value \u00d7 Exposure Factor."
    ],
    [
      "Risk Management",
      "ALE formula",
      "ALE = SLE \u00d7 ARO."
    ],
    [
      "Risk Management",
      "Exposure Factor",
      "The percentage of asset value lost during one incident."
    ],
    [
      "Risk Management",
      "Cyber insurance is which risk strategy?",
      "Risk transference."
    ],
    [
      "Risk Management",
      "Patching is which risk strategy?",
      "Risk mitigation."
    ],
    [
      "Security Controls",
      "Security guard category",
      "Physical control."
    ],
    [
      "Security Controls",
      "Firewall category",
      "Technical control."
    ],
    [
      "Security Controls",
      "Policy category",
      "Administrative or managerial control."
    ],
    [
      "Security Controls",
      "Backup restore function",
      "Corrective control."
    ],
    [
      "Security Controls",
      "IDS function",
      "Detective control."
    ],
    [
      "Security Controls",
      "Warning sign function",
      "Deterrent control."
    ],
    [
      "PKI & Crypto",
      "Which key signs a digital signature?",
      "Sender private key."
    ],
    [
      "PKI & Crypto",
      "Which key verifies a digital signature?",
      "Sender public key."
    ],
    [
      "PKI & Crypto",
      "Which key encrypts for confidentiality?",
      "Receiver public key."
    ],
    [
      "PKI & Crypto",
      "Which key decrypts asymmetric data?",
      "Receiver private key."
    ],
    [
      "PKI & Crypto",
      "What does TLS protect?",
      "Data in transit."
    ],
    [
      "PKI & Crypto",
      "OCSP",
      "Real-time certificate revocation checking."
    ],
    [
      "Incident Response",
      "Incident response order",
      "Preparation, Detection, Analysis, Containment, Eradication, Recovery, Lessons Learned."
    ],
    [
      "Incident Response",
      "Containment",
      "Limit damage and stop spread."
    ],
    [
      "Incident Response",
      "Recovery",
      "Restore systems and services to normal operation."
    ],
    [
      "Authentication",
      "OAuth",
      "Delegated authorization."
    ],
    [
      "Authentication",
      "OpenID Connect",
      "Authentication/login identity layer on OAuth."
    ],
    [
      "Authentication",
      "SAML",
      "Federated SSO using assertions."
    ],
    [
      "Network Architecture",
      "Segmentation",
      "Planned separation before an attack."
    ],
    [
      "Network Architecture",
      "Containment",
      "Stop spread during an active incident."
    ],
    [
      "Network Architecture",
      "Quarantine",
      "Isolate for remediation."
    ],
    [
      "Cloud",
      "SaaS",
      "Complete provider-managed application."
    ],
    [
      "Cloud",
      "IaaS",
      "Provider infrastructure; customer manages OS/apps/data."
    ],
    [
      "Malware & Attacks",
      "Worm",
      "Self-spreads without user interaction."
    ],
    [
      "Malware & Attacks",
      "Trojan",
      "Disguised as legitimate software."
    ],
    [
      "Application Security",
      "SSRF",
      "Server-side request forgery. Server fetches attacker-supplied URL."
    ],
    [
      "Governance",
      "Procedure",
      "Step-by-step instructions."
    ],
    [
      "Governance",
      "SLA",
      "Service level agreement with uptime/performance/penalties."
    ],
    [
      "Ports & Protocols",
      "SSH",
      "TCP 22."
    ],
    [
      "Ports & Protocols",
      "HTTPS",
      "TCP 443."
    ],
    [
      "Data Protection",
      "Masking",
      "Displays hidden values like ****1234."
    ],
    [
      "Data Protection",
      "Tokenization",
      "Reversible lookup-table replacement."
    ]
  ],
  "questions": [
    {
      "domain": "PKI & Crypto",
      "prob": 5,
      "q": "A user wants to digitally sign a message before sending it. Which key should be used?",
      "options": [
        "Sender private key",
        "Sender public key",
        "Receiver private key",
        "Receiver public key"
      ],
      "answer": 0,
      "why": "Digital signatures are created with the sender private key and verified with the sender public key.",
      "trap": "Sign = sender."
    },
    {
      "domain": "PKI & Crypto",
      "prob": 5,
      "q": "Amanda wants to send Maria a confidential encrypted message. Which key should Amanda use?",
      "options": [
        "Amanda private key",
        "Amanda public key",
        "Maria private key",
        "Maria public key"
      ],
      "answer": 3,
      "why": "For confidentiality, encrypt with the receiver public key. Maria decrypts with Maria private key.",
      "trap": "Secret = receiver."
    },
    {
      "domain": "Risk Management",
      "prob": 5,
      "q": "Asset value is $400,000, exposure factor is 20%, and ARO is 0.5. What is ALE?",
      "options": [
        "$40,000",
        "$80,000",
        "$200,000",
        "$400,000"
      ],
      "answer": 0,
      "why": "SLE = 400,000 \u00d7 .20 = 80,000. ALE = 80,000 \u00d7 .5 = 40,000.",
      "trap": "ALE = AV \u00d7 EF \u00d7 ARO."
    },
    {
      "domain": "Security Controls",
      "prob": 5,
      "q": "A company posts warning signs to discourage unauthorized entry. What control function is emphasized?",
      "options": [
        "Corrective",
        "Detective",
        "Deterrent",
        "Compensating"
      ],
      "answer": 2,
      "why": "Discourage is the keyword. Deterrent controls discourage attackers.",
      "trap": "Discourage = deterrent."
    },
    {
      "domain": "Security Controls",
      "prob": 5,
      "q": "A firewall is best categorized as what type of control?",
      "options": [
        "Physical",
        "Technical",
        "Administrative",
        "Managerial"
      ],
      "answer": 1,
      "why": "A firewall is a technology-based control, so it is technical.",
      "trap": "Tool = technical."
    },
    {
      "domain": "Incident Response",
      "prob": 5,
      "q": "After malware is removed from systems, which incident response phase restores services?",
      "options": [
        "Containment",
        "Eradication",
        "Recovery",
        "Preparation"
      ],
      "answer": 2,
      "why": "Recovery returns systems to normal operation after eradication.",
      "trap": "Restore = recovery."
    },
    {
      "domain": "Authentication",
      "prob": 5,
      "q": "A third-party app needs permission to access a user data without receiving the user password. Which standard fits best?",
      "options": [
        "OAuth",
        "OpenID Connect",
        "Kerberos",
        "LDAP"
      ],
      "answer": 0,
      "why": "OAuth provides delegated authorization.",
      "trap": "OAuth = authorization."
    },
    {
      "domain": "Authentication",
      "prob": 5,
      "q": "A company needs federated SSO using assertions. Which technology is most likely?",
      "options": [
        "OAuth",
        "OpenID Connect",
        "SAML",
        "LDAP"
      ],
      "answer": 2,
      "why": "SAML uses assertions for federated SSO.",
      "trap": "Assertions = SAML."
    },
    {
      "domain": "Network Architecture",
      "prob": 5,
      "q": "A NAC places a failed device into a remediation VLAN until fixed. What is this?",
      "options": [
        "Segmentation",
        "Containment",
        "Quarantine",
        "Air gap"
      ],
      "answer": 2,
      "why": "Quarantine isolates noncompliant systems for cleanup.",
      "trap": "Remediation VLAN = quarantine."
    },
    {
      "domain": "Malware & Attacks",
      "prob": 5,
      "q": "Malware spreads automatically across vulnerable systems without user action. What is it?",
      "options": [
        "Virus",
        "Worm",
        "Trojan",
        "Rootkit"
      ],
      "answer": 1,
      "why": "Worms self-propagate. Viruses require user interaction.",
      "trap": "Self-spread = worm."
    },
    {
      "domain": "Application Security",
      "prob": 5,
      "q": "A web app accepts a URL from a user and the server retrieves internal metadata from that URL. What attack is this?",
      "options": [
        "XSS",
        "CSRF",
        "SSRF",
        "SQL injection"
      ],
      "answer": 2,
      "why": "SSRF tricks a server into making attacker-controlled requests.",
      "trap": "Server fetches URL = SSRF."
    },
    {
      "domain": "Governance",
      "prob": 5,
      "q": "A document gives step-by-step instructions for first response to an incident. What is it?",
      "options": [
        "Policy",
        "Standard",
        "Guideline",
        "Procedure"
      ],
      "answer": 3,
      "why": "Procedures are step-by-step instructions.",
      "trap": "Steps = procedure."
    },
    {
      "domain": "Cloud",
      "prob": 4,
      "q": "A newly provisioned cloud disk contains another customer old data. What issue is this?",
      "options": [
        "VM escape",
        "Resource reuse",
        "Legal hold",
        "Chain of custody"
      ],
      "answer": 1,
      "why": "Resource reuse occurs when storage is reassigned without proper sanitization.",
      "trap": "Old tenant data = resource reuse."
    },
    {
      "domain": "Network Architecture",
      "prob": 4,
      "q": "Switch port security usually filters by what?",
      "options": [
        "MAC address",
        "IP address",
        "Routing protocol",
        "DNS name"
      ],
      "answer": 0,
      "why": "Port security permits or blocks devices based on MAC address.",
      "trap": "Switch port security = MAC."
    },
    {
      "domain": "Network Architecture",
      "prob": 4,
      "q": "A company needs two sites to appear connected securely over the public Internet. What should they use?",
      "options": [
        "TLS for each application",
        "Site-to-site VPN tunnel",
        "VLAN only",
        "Data reclassification"
      ],
      "answer": 1,
      "why": "A VPN tunnel securely connects networks across the Internet.",
      "trap": "Secure site-to-site network = VPN."
    }
  ],
  "pbqs": [
    {
      "type": "match",
      "category": "Security Controls",
      "title": "Control Categories",
      "scenario": "Classify each control as Administrative, Technical, or Physical.",
      "items": [
        [
          "Firewall",
          "Technical"
        ],
        [
          "Security guard",
          "Physical"
        ],
        [
          "Security awareness training",
          "Administrative"
        ],
        [
          "MFA",
          "Technical"
        ],
        [
          "Acceptable Use Policy",
          "Administrative"
        ],
        [
          "Bollards",
          "Physical"
        ]
      ],
      "choices": [
        "Administrative",
        "Technical",
        "Physical"
      ],
      "explanation": "Category asks what the control is: process/rule, technology, or physical protection."
    },
    {
      "type": "match",
      "category": "Security Controls",
      "title": "Control Functions",
      "scenario": "Classify the primary function of each control.",
      "items": [
        [
          "Backup restore after ransomware",
          "Corrective"
        ],
        [
          "IDS alert",
          "Detective"
        ],
        [
          "IPS blocking malicious traffic",
          "Preventive"
        ],
        [
          "Warning sign",
          "Deterrent"
        ],
        [
          "Alternative approved control",
          "Compensating"
        ]
      ],
      "choices": [
        "Preventive",
        "Detective",
        "Corrective",
        "Deterrent",
        "Compensating"
      ],
      "explanation": "Function asks what the control does: block, find, fix, scare, or substitute."
    },
    {
      "type": "order",
      "category": "Incident Response",
      "title": "Incident Response Phase Order",
      "scenario": "Place the incident response phases in the correct order.",
      "answer": [
        "Preparation",
        "Detection",
        "Analysis",
        "Containment",
        "Eradication",
        "Recovery",
        "Lessons Learned"
      ],
      "explanation": "Prepare, detect/analyze, contain, eradicate, recover, learn."
    },
    {
      "type": "fill",
      "category": "Risk Management",
      "title": "SLE/ALE Calculation",
      "scenario": "Asset Value = $400,000. EF = 20%. ARO = 0.5. Enter SLE and ALE.",
      "fields": [
        [
          "SLE",
          "80000"
        ],
        [
          "ALE",
          "40000"
        ]
      ],
      "explanation": "SLE = 400,000 \u00d7 .20 = 80,000. ALE = 80,000 \u00d7 .5 = 40,000."
    },
    {
      "type": "match",
      "category": "PKI & Crypto",
      "title": "Key Usage",
      "scenario": "Amanda sends Maria a confidential signed message. Match each action to the correct key.",
      "items": [
        [
          "Encrypt for Maria",
          "Maria public key"
        ],
        [
          "Maria decrypts",
          "Maria private key"
        ],
        [
          "Amanda signs",
          "Amanda private key"
        ],
        [
          "Maria verifies Amanda",
          "Amanda public key"
        ]
      ],
      "choices": [
        "Amanda public key",
        "Amanda private key",
        "Maria public key",
        "Maria private key"
      ],
      "explanation": "Secret = receiver keys. Signature = sender keys."
    },
    {
      "type": "match",
      "category": "Authentication",
      "title": "Authentication Technologies",
      "scenario": "Match each technology to its best use.",
      "items": [
        [
          "Delegated authorization",
          "OAuth"
        ],
        [
          "Login identity layer",
          "OpenID Connect"
        ],
        [
          "Federated SSO assertions",
          "SAML"
        ],
        [
          "Ticket authentication",
          "Kerberos"
        ],
        [
          "Directory queries",
          "LDAP"
        ]
      ],
      "choices": [
        "OAuth",
        "OpenID Connect",
        "SAML",
        "Kerberos",
        "LDAP"
      ],
      "explanation": "OAuth permission, OIDC login, SAML federation, Kerberos tickets, LDAP directory."
    }
  ],
  "traps": [
    [
      "Authentication vs Authorization",
      "Authentication proves identity. Authorization grants access after identity is known.",
      "AuthN = who are you? AuthZ = what can you access?"
    ],
    [
      "OAuth vs OpenID Connect vs SAML",
      "OAuth authorizes, OIDC authenticates, SAML federates using assertions.",
      "OAuth permission, OIDC login, SAML federation."
    ],
    [
      "Digital Signature vs Encryption",
      "Signature uses sender keys; secrecy uses receiver keys.",
      "Sign = sender. Secret = receiver."
    ],
    [
      "SLE vs ALE vs EF vs ARO",
      "SLE = AV \u00d7 EF. ALE = SLE \u00d7 ARO. EF is percent loss. ARO is yearly frequency.",
      "One loss vs yearly loss."
    ],
    [
      "Segmentation vs Containment vs Quarantine",
      "Segmentation is before, containment is during, quarantine is isolation for cleanup.",
      "Walls, stop bleeding, isolation room."
    ]
  ],
  "blackbook": [
    [
      "High Probability Mode",
      "Study distribution: 70% high-probability topics, 20% weak areas, 10% random coverage."
    ],
    [
      "3 PBQs in Mock Exams",
      "Every full mock begins with 3 PBQs selected from different pools, followed by multiple choice."
    ],
    [
      "Question Quality Rule",
      "Primary exam mode uses technically accurate, SY0-701-aligned, CompTIA-style questions only."
    ],
    [
      "Security Guard",
      "A security guard is a physical control. Depending on wording, it may function as preventive, detective, or deterrent."
    ],
    [
      "Disinformation vs Misinformation",
      "Disinformation is intentional deception. Misinformation is false information spread by mistake."
    ],
    [
      "Microwave Sensor",
      "Microwave sensors detect motion using microwave radio waves."
    ],
    [
      "Static Code Analysis",
      "Static code analysis reviews source code without running the program. Dynamic analysis tests a running application."
    ]
  ]
};