import { Question } from './questions';

export const paper3_1: Question[] = [
  {
    num: 401,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "The following are key features of an acute ischemic limb EXCEPT:-",
    options: [
      "Pain",
      "Pulse",
      "Paralysis",
      "Parasthesias"
    ],
    correct: 1,
    explanation: "The '6 Ps' of acute limb ischemia are Pain, Pallor, Pulselessness, Paresthesia, Paralysis, and Poikilothermia. 'Pulselessness' (absence of pulse) is the feature; therefore, the presence of a 'Pulse' is the exception.",
    wrongReasons: {
      "0": "Pain is a hallmark early sign of ischemia.",
      "2": "Paralysis is a late, grave sign indicating muscle death.",
      "3": "Paresthesia (numbness/tingling) indicates nerve involvement."
    },
    memory: "6 Ps: Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Poikilothermia."
  },
  {
    num: 402,
    paper: "Paper 3",
    topic: "Pharmacology",
    text: "A client with acute asthma is prescribed short-term corticosteroid therapy. What is the rationale for the use of steroids in clients with asthma?",
    options: [
      "Corticosteroids promote bronchodilation.",
      "Corticosteroids act as an expectorant.",
      "Corticosteroids have an anti-inflammatory effect.",
      "Corticosteroids prevent development of respiratory infections."
    ],
    correct: 2,
    explanation: "Corticosteroids are powerful anti-inflammatory agents that reduce airway edema and mucus production, which are key components of an asthma attack.",
    wrongReasons: {
      "0": "Beta-2 agonists (like Salbutamol) are bronchodilators, not steroids.",
      "1": "Expectorants help thin mucus; steroids reduce its production via inflammation control.",
      "3": "Steroids can actually suppress the immune system; they don't prevent infections."
    }
  },
  {
    num: 403,
    paper: "Paper 3",
    topic: "Pharmacology",
    text: "Which of the following clients is most likely to experience adverse effects from treatment with diuretics?",
    options: [
      "A 21- year-old student",
      "A 40- year-old unmarried man",
      "A 60-year-old widower",
      "A 75-year-old man"
    ],
    correct: 3,
    explanation: "Elderly patients (like a 75-year-old) are at much higher risk for electrolyte imbalances (hypokalemia, hyponatremia) and dehydration due to decreased renal function and sensitivity to volume changes.",
    wrongReasons: {
      "0": "Young adults typically have robust renal and homeostatic mechanisms.",
      "1": "Middle-aged adults generally tolerate diuretics well unless they have comorbidities.",
      "2": "While older, a 60-year-old is generally less fragile than a 75-year-old."
    }
  },
  {
    num: 404,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "The priority in management of Crohn’s disease is",
    options: [
      "Restore nutritional function",
      "Achieve pain control",
      "Achieve effective coping on part of the patient",
      "Prevent possible complications"
    ],
    correct: 0,
    explanation: "Malnutrition is a major complication of Crohn's due to malabsorption and decreased intake. Restoring nutritional function is vital for tissue healing and overall recovery.",
    wrongReasons: {
      "1": "Pain control is important but secondary to physiological stability and nutrition.",
      "2": "Coping is a psychosocial goal, not the immediate physiological priority.",
      "3": "Preventing complications is a broad goal achieved through nutrition and inflammation control."
    }
  },
  {
    num: 405,
    paper: "Paper 3",
    topic: "Fundamentals",
    text: "Which of the following data will a nurse document as subjective",
    options: [
      "Vital sign",
      "ECG waveforms",
      "Patients pain description",
      "Laboratory results"
    ],
    correct: 2,
    explanation: "Subjective data is what the patient says (symptoms). Pain is always subjective as it cannot be directly measured by the nurse, only reported by the patient.",
    wrongReasons: {
      "0": "Vital signs are objective (measurable by the nurse).",
      "1": "ECG waveforms are objective data seen on a monitor.",
      "3": "Lab results are objective, factual data from a machine/test."
    }
  },
  {
    num: 406,
    paper: "Paper 3",
    topic: "Fundamentals",
    text: "During fluid input and output monitoring, the nurse uses output to determine the input in that:",
    options: [
      "Administering exactly amounts that equals the urine output",
      "Administer fluid that is 500mls less than the urine output",
      "Administer fluid that is 500mls more that urine output",
      "Administer fluid that is 1000mls more that urine output"
    ],
    correct: 2,
    explanation: "To maintain fluid balance, input should account for measurable output (urine) plus 'insensible losses' (sweat, respiration), which typically average around 500ml/day.",
    wrongReasons: {
      "0": "This would lead to dehydration because it ignores insensible losses.",
      "1": "This would cause severe dehydration.",
      "3": "1000ml might lead to fluid overload unless there are high extra-renal losses."
    }
  },
  {
    num: 407,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "After surgery your patient is semi-comatose with vital signs within normal limits. As the nurse, what position would be best for this patient?",
    options: [
      "Semi-Fowlers",
      "Prone",
      "Low-Fowlers",
      "Side positioning preferably on the left side"
    ],
    correct: 3,
    explanation: "The lateral (side-lying) position is the safest for an unconscious or semi-comatose patient to prevent the tongue from obstructing the airway and to prevent aspiration if vomiting occurs.",
    wrongReasons: {
      "0": "Semi-Fowlers increases the risk of the tongue falling back in an unconscious patient.",
      "1": "Prone makes it difficult to monitor the patient and manage the airway.",
      "2": "Low-Fowlers also carries a risk of airway obstruction in a comatose patient."
    }
  },
  {
    num: 408,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "A client has just returned to a nursing unit following bronchoscopy. A nurse would implement which of the following nursing interventions for this client?",
    options: [
      "Encouraging additional fluids for the next 24 hours",
      "Ensuring the return of the gag reflex before offering foods or fluids",
      "Administering atropine intravenously",
      "Administering small doses of midazolam (Versed)."
    ],
    correct: 1,
    explanation: "The throat is typically numbed for a bronchoscopy. The nurse must verify the return of the gag reflex to prevent aspiration before the patient eats or drinks.",
    wrongReasons: {
      "0": "Fluids should not be given until the gag reflex returns.",
      "2": "Atropine is usually given *before* the procedure to dry secretions, not after.",
      "3": "Midazolam is a sedative used *during* the procedure; giving more after could cause respiratory depression."
    }
  },
  {
    num: 409,
    paper: "Paper 3",
    topic: "Pharmacology",
    text: "Mrs. Johansson’s physician has prescribed tetracycline 500 mg PO q6h. While assessing Mrs. Johansson’s nursing history for allergies, the nurse notes that Mrs. Johansson is also taking oral contraceptives. What is the most appropriate initial nursing intervention?",
    options: [
      "Administer the dose of tetracycline.",
      "Notify the physician that Mrs. Johansson is taking oral contraceptives.",
      "Tell Mrs. Johansson, she should stop taking oral contraceptives since they are inactivated by tetracycline",
      "Tell Mrs. Johansson, to use another form of birth control for at least two months."
    ],
    correct: 3,
    explanation: "Tetracycline can reduce the effectiveness of oral contraceptives. The nurse must advise the patient to use a backup (barrier) method of birth control while on the antibiotic.",
    wrongReasons: {
      "0": "Administering without education puts the patient at risk of unplanned pregnancy.",
      "1": "The physician likely knows; the nurse's priority is patient education.",
      "2": "She shouldn't stop her pills, as that would definitely lead to loss of protection; she needs a backup method."
    }
  },
  {
    num: 410,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Varicose vein can be treated using the following EXCEPT:-",
    options: [
      "Frequent changing of positions",
      "Sclerotherapy",
      "Laser surgeries",
      "Vein Stripping"
    ],
    correct: 0,
    explanation: "Changing positions is a preventive measure or a way to manage symptoms, but it is not a 'treatment' (procedure) to remove or close the veins like the other options.",
    wrongReasons: {
      "1": "Sclerotherapy involves injecting a solution to close the vein.",
      "2": "Laser surgery uses light energy to collapse the vein.",
      "3": "Vein stripping is the surgical removal of the affected vein."
    }
  },
  {
    num: 411,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "When developing a discharge plan to manage the care of a client with COPD, the nurse should anticipate that the client will do which of the following?",
    options: [
      "Develop infections easily.",
      "Maintain current status.",
      "Require less supplemental oxygen.",
      "Show permanent improvement."
    ],
    correct: 0,
    explanation: "COPD patients have compromised respiratory defenses and are highly susceptible to respiratory infections, which often lead to exacerbations.",
    wrongReasons: {
      "1": "COPD is progressive; maintaining status is a goal but not always the reality.",
      "2": "Oxygen needs usually increase as the disease progresses.",
      "3": "COPD is a chronic, irreversible condition; permanent improvement is not expected."
    }
  },
  {
    num: 412,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Postoperatively, which complication should the nurse monitor for in a patient who had a pheochromocytoma resection?",
    options: [
      "Diabetes insipidus",
      "Infection",
      "Hypotension",
      "Hyperkalemia"
    ],
    correct: 2,
    explanation: "Pheochromocytomas secrete large amounts of catecholamines (epinephrine/norepinephrine). Once the tumor is removed, catecholamine levels drop sharply, often causing severe hypotension.",
    wrongReasons: {
      "0": "DI is a complication of pituitary surgery, not adrenal surgery.",
      "1": "Infection is a risk for any surgery, but hypotension is the specific critical risk here.",
      "3": "Hypokalemia is more common than hyperkalemia post-adrenal surgery."
    }
  },
  {
    num: 413,
    paper: "Paper 3",
    topic: "Paediatric",
    text: "The primary prevention of gastroenteritis in pediatrics entails:-",
    options: [
      "Treatment with zinc",
      "Rotavirus vaccination",
      "Isolation of the patient",
      "Rehydration"
    ],
    correct: 1,
    explanation: "Primary prevention aims to prevent the disease before it occurs. Rotavirus vaccination is the most effective primary prevention for severe pediatric gastroenteritis.",
    wrongReasons: {
      "0": "Zinc is used for *treatment* (tertiary/secondary prevention).",
      "2": "Isolation is a control measure once the disease is present.",
      "3": "Rehydration is a *treatment* for existing gastroenteritis."
    }
  },
  {
    num: 414,
    paper: "Paper 3",
    topic: "Paediatric",
    text: "You are educating parents of under- 5 year’s old children about secondary prevention of gastroenteritis. You will advise them:",
    options: [
      "Administer zinc sulphate as prescribed",
      "Take the children for rota virus immunization",
      "Ensure the child washes their hands after outdoor activities",
      "Ensure the child takes boiled drinking water"
    ],
    correct: 0,
    explanation: "Secondary prevention focuses on early treatment to prevent complications. Administering zinc during an episode reduces the duration and severity of diarrhea.",
    wrongReasons: {
      "1": "Immunization is primary prevention.",
      "2": "Handwashing is primary prevention (sanitation).",
      "3": "Boiled water is primary prevention (sanitation)."
    }
  },
  {
    num: 415,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Which laboratory test is typically used to diagnose Cushing syndrome?",
    options: [
      "Serum cortisol levels",
      "Complete blood count (CBC)",
      "Thyroid function tests",
      "Liver function tests"
    ],
    correct: 0,
    explanation: "Cushing syndrome is caused by excess cortisol. Diagnosis involves measuring cortisol levels in the blood, urine (24-hour), or saliva.",
    wrongReasons: {
      "1": "CBC checks for infection/anemia, not hormone levels.",
      "2": "Thyroid tests check for hypo/hyperthyroidism.",
      "3": "Liver tests check for hepatic function, not adrenal function."
    }
  },
  {
    num: 416,
    paper: "Paper 3",
    topic: "Pharmacology",
    text: "For an asthmatic client put on cromolyn sodium (intal) inhaler, the nurse as him to immediately report which of the following side effects?",
    options: [
      "Sore throat",
      "Drowsiness",
      "Wheezing",
      "Hypotension."
    ],
    correct: 2,
    explanation: "Cromolyn sodium can occasionally cause paradoxical bronchospasm (wheezing). This is a serious reaction that must be reported immediately.",
    wrongReasons: {
      "0": "Sore throat is a common, less severe side effect of many inhalers.",
      "1": "Cromolyn does not typically cause drowsiness.",
      "3": "Cromolyn does not significantly affect blood pressure."
    }
  },
  {
    num: 417,
    paper: "Paper 3",
    topic: "Pharmacology",
    text: "Nurse Kate is taking care of client taking ibuprofen. Which of the following should be included in her assessment and monitoring?",
    options: [
      "Blood pressure and bowel sounds",
      "Weight and appetite",
      "Muscle strength and range of motion",
      "Respiratory rate, depth, and rhythm."
    ],
    correct: 0,
    explanation: "Ibuprofen (an NSAID) can cause fluid retention (increasing BP) and gastrointestinal irritation/bleeding (affecting bowel sounds/abdominal comfort).",
    wrongReasons: {
      "1": "Weight might increase due to fluid, but BP is a more critical monitoring parameter.",
      "2": "These are assessed for musculoskeletal issues, not specifically for ibuprofen side effects.",
      "3": "Ibuprofen does not typically affect respiratory status directly."
    }
  },
  {
    num: 418,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "The client has been diagnosed to have right-sided congestive heart failure (RSCHF). Which of the following signs and symptoms does the nurse expect to observe in the client:-",
    options: [
      "Shortness of breath",
      "Ascites",
      "Rales in the lungs",
      "Pink-tinged, frothy sputum"
    ],
    correct: 1,
    explanation: "Right-sided heart failure causes systemic congestion. This leads to peripheral edema, jugular venous distension, and ascites (fluid in the abdomen).",
    wrongReasons: {
      "0": "Shortness of breath is more characteristic of left-sided failure (pulmonary congestion).",
      "2": "Rales (crackles) indicate fluid in the lungs, a sign of left-sided failure.",
      "3": "Pink, frothy sputum is a classic sign of pulmonary edema (left-sided failure)."
    }
  },
  {
    num: 419,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Which laboratory test is used to monitor long-term glycemic control in patients with diabetes mellitus?",
    options: [
      "Fasting blood glucose",
      "Oral glucose tolerance test (OGTT)",
      "Glycosylated hemoglobin (HbA1c)",
      "Random blood glucose"
    ],
    correct: 2,
    explanation: "HbA1c measures the average blood glucose level over the past 2-3 months, providing a reliable indicator of long-term control.",
    wrongReasons: {
      "0": "Fasting glucose only shows the level at a single point in time.",
      "1": "OGTT is used for diagnosis, not long-term monitoring.",
      "3": "Random glucose only shows the level at that specific moment."
    }
  },
  {
    num: 420,
    paper: "Paper 3",
    topic: "Fundamentals",
    text: "Separation of different types of waste at the point of generation in theatre and keeping them isolated from each other is called?",
    options: [
      "Waste management",
      "Waste minimization",
      "Waste segregation",
      "Waste transportation."
    ],
    correct: 2,
    explanation: "Waste segregation is the process of separating different types of waste (e.g., sharps, infectious, general) at the source to ensure proper disposal.",
    wrongReasons: {
      "0": "Waste management is the entire process of handling waste.",
      "1": "Waste minimization is reducing the amount of waste produced.",
      "3": "Waste transportation is moving the waste to a disposal site."
    }
  },
  {
    num: 421,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "The most common form of dwarfism is:",
    options: [
      "Achondroplasia",
      "Turner syndrome",
      "Pituitary dwarfism",
      "Osteogenesis imperfecta"
    ],
    correct: 0,
    explanation: "Achondroplasia is a genetic disorder that is the most common cause of disproportionate short stature (dwarfism).",
    wrongReasons: {
      "1": "Turner syndrome is a chromosomal condition in females that causes short stature but is not 'dwarfism' in the same sense.",
      "2": "Pituitary dwarfism is caused by growth hormone deficiency and is less common than achondroplasia.",
      "3": "Osteogenesis imperfecta is a bone-fragility disorder, not a primary cause of dwarfism."
    }
  },
  {
    num: 422,
    paper: "Paper 3",
    topic: "Fundamentals",
    text: "The feeling of internal organs by the hands is called:",
    options: [
      "Auscultation",
      "Palpation",
      "Manipulation",
      "Observation"
    ],
    correct: 1,
    explanation: "Palpation is a method of physical examination where the nurse uses the hands to feel the texture, size, consistency, and location of body parts or organs.",
    wrongReasons: {
      "0": "Auscultation is listening to sounds produced by the body, usually with a stethoscope.",
      "2": "Manipulation is moving a body part or joint, often in physical therapy.",
      "3": "Observation (inspection) is looking at the patient to gather data."
    }
  },
  {
    num: 423,
    paper: "Paper 3",
    topic: "Pharmacology",
    text: "During urine collection, the nurse notices green color of the urine. The nurse should take history if the patient has taken drugs such as:",
    options: [
      "Methyldopa",
      "Pyridium",
      "Amitriptyline",
      "Quinine"
    ],
    correct: 2,
    explanation: "Amitriptyline (an antidepressant) is known to cause blue-green discoloration of the urine in some patients.",
    wrongReasons: {
      "0": "Methyldopa can cause urine to turn dark or reddish upon standing.",
      "1": "Pyridium (Phenazopyridine) typically turns urine bright orange or red.",
      "3": "Quinine can cause dark or brown urine."
    }
  },
  {
    num: 424,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "The major cause of malnutrition in Crohn’s disease is",
    options: [
      "Intentional withholding of food because of poor appetite",
      "Malabsorption of food nutrients",
      "Intentional withholding of food to avoid postprandial cramping",
      "High metabolic demands in the patient"
    ],
    correct: 1,
    explanation: "In Crohn's disease, inflammation of the small intestine (where most nutrients are absorbed) leads to significant malabsorption, which is the primary driver of malnutrition.",
    wrongReasons: {
      "0": "Poor appetite contributes, but malabsorption is the physiological 'major' cause.",
      "2": "Patients may avoid food due to pain (sitophobia), but malabsorption is the primary factor.",
      "3": "Metabolic demands are high during flares, but malabsorption is the constant underlying issue."
    }
  },
  {
    num: 425,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Priority nursing intervention for patient having generalized oedema with systemic manifestations of the anasarca is:",
    options: [
      "Monitor blood pressure",
      "Assess airway and breathing pattern",
      "Elevate the limbs",
      "Palpate the extremities for the signs and characteristic of oedema"
    ],
    correct: 1,
    explanation: "Anasarca (severe generalized edema) can lead to pulmonary edema and pleural effusions, which compromise the airway and breathing. Airway is always the priority (ABC).",
    wrongReasons: {
      "0": "BP monitoring is important for fluid status but secondary to breathing.",
      "2": "Elevating limbs helps with peripheral edema but doesn't address the systemic life-threat.",
      "3": "Palpation is an assessment technique, not a priority intervention for a systemic crisis."
    }
  },
  {
    num: 426,
    paper: "Paper 3",
    topic: "Pharmacology",
    text: "Half-life (t ½) is the time required to:",
    options: [
      "Change the amount of a drug in plasma by half during elimination",
      "Metabolize a half of an introduced drug into the active metabolite",
      "Absorb a half of an introduced drug",
      "Bind a half of an introduced drug to plasma proteins"
    ],
    correct: 0,
    explanation: "Drug half-life is the time it takes for the concentration of the drug in the plasma to decrease by 50% through elimination.",
    wrongReasons: {
      "1": "This refers to metabolism/biotransformation rate, not half-life.",
      "2": "This refers to absorption rate.",
      "3": "This refers to protein binding capacity."
    }
  },
  {
    num: 427,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "One of the complications of malaria is cerebral malaria. It is as a result of:",
    options: [
      "Hemolysis of Red Blood Cells",
      "Inflammatory responses",
      "Tissue hypoxia due to adherence of infected RBCs on blood vessels",
      "Plasmodium clogging blood vessels in the brain"
    ],
    correct: 2,
    explanation: "Cerebral malaria occurs when Plasmodium falciparum-infected RBCs adhere to the endothelium of small blood vessels (sequestration), causing obstruction and subsequent tissue hypoxia in the brain.",
    wrongReasons: {
      "0": "Hemolysis causes anemia and jaundice, not specifically cerebral symptoms.",
      "1": "Inflammation is involved, but the mechanical obstruction (sequestration) is the primary cause.",
      "3": "While it feels like 'clogging', the specific mechanism is 'adherence' (cytoadherence) causing hypoxia."
    }
  },
  {
    num: 428,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Immediately following a thoracentesis, which clinical manifestations indicate that a complication has occurred and the physician should be notified?",
    options: [
      "Serosanguineous drainage from the puncture site.",
      "Increased temperature and blood pressure.",
      "Increased pulse and pallor.",
      "Hypotension and hypothermia."
    ],
    correct: 2,
    explanation: "Increased pulse (tachycardia) and pallor are early signs of internal hemorrhage or shock, which are serious complications of thoracentesis.",
    wrongReasons: {
      "0": "A small amount of serosanguineous drainage is common and usually not a crisis.",
      "1": "Fever and high BP are not typical immediate complications of this procedure.",
      "3": "Hypotension is a sign of shock, but hypothermia is not an immediate procedural complication."
    }
  },
  {
    num: 429,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Intractable vomiting in acute gastritis is likely to cause the following complication",
    options: [
      "Metabolic acidosis",
      "Metabolic alkalosis",
      "Portal hypertension",
      "Esophageal varices"
    ],
    correct: 1,
    explanation: "Vomiting causes the loss of gastric hydrochloric acid (HCl). The loss of acid leads to an increase in blood pH, resulting in metabolic alkalosis.",
    wrongReasons: {
      "0": "Acidosis would occur if the patient had severe diarrhea (loss of bicarbonate).",
      "2": "Portal hypertension is usually caused by liver cirrhosis.",
      "3": "Varices are a result of portal hypertension, not acute vomiting."
    }
  },
  {
    num: 430,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "During management of chronic bacteria urethritis, female patient has multiple antibiotics prescribe for 14 days. In order to prevent secondary fungal urinary tract infections, the nurse should specifically advise the patient to:",
    options: [
      "Always ensure they wipe the perineum after passing stool",
      "Use probiotics along with the drugs",
      "Use prophylactic antibiotics",
      "Always put on dry inner wears"
    ],
    correct: 1,
    explanation: "Antibiotics kill normal flora along with pathogens. Probiotics help maintain the balance of healthy bacteria, preventing the overgrowth of fungi like Candida.",
    wrongReasons: {
      "0": "Wiping front-to-back prevents bacterial UTI, but doesn't specifically prevent antibiotic-induced fungal overgrowth.",
      "2": "More antibiotics would worsen the risk of fungal infection.",
      "3": "Dry underwear is good for general hygiene but doesn't counter the effect of systemic antibiotics."
    }
  },
  {
    num: 431,
    paper: "Paper 3",
    topic: "Fundamentals",
    text: "An example of disinfection method is:",
    options: [
      "Boiling",
      "Autoclaving",
      "Dry Heat",
      "Moist Heat"
    ],
    correct: 0,
    explanation: "Boiling is a common method of disinfection (it kills most pathogens but not necessarily all spores). Autoclaving and heat methods are usually used for sterilization.",
    wrongReasons: {
      "1": "Autoclaving is a sterilization method (kills all microorganisms including spores).",
      "2": "Dry heat (at high temps) is a sterilization method.",
      "3": "Moist heat (under pressure) refers to autoclaving, which is sterilization."
    }
  },
  {
    num: 432,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "The following gastrointestinal surgery predisposes the patient to megaloblastic anemia",
    options: [
      "Gastrostomy",
      "Pancreatectomy",
      "Antrectomy",
      "Illeostomy"
    ],
    correct: 2,
    explanation: "Antrectomy (removal of the antrum of the stomach) reduces the production of Intrinsic Factor, which is necessary for Vitamin B12 absorption. B12 deficiency leads to megaloblastic anemia.",
    wrongReasons: {
      "0": "Gastrostomy is a feeding tube placement, not a resection.",
      "1": "Pancreatectomy affects digestion of fats/proteins but not specifically B12 absorption.",
      "3": "Ileostomy involves the colon; B12 is absorbed in the terminal ileum, so while ileal resection causes it, antrectomy is a classic stomach-related cause."
    }
  },
  {
    num: 433,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Intermittent tenesmus is a presenting feature in the following disease",
    options: [
      "Regional enteritis",
      "Ulcerative colitis",
      "Hemorrhoids",
      "Rectal polyps"
    ],
    correct: 1,
    explanation: "Tenesmus (the feeling of needing to pass stools even though the bowels are empty) is a classic symptom of inflammation in the rectum, which is common in Ulcerative Colitis.",
    wrongReasons: {
      "0": "Regional enteritis (Crohn's) often spares the rectum.",
      "2": "Hemorrhoids cause pain and bleeding but not typically tenesmus.",
      "3": "Polyps are usually asymptomatic unless very large."
    }
  },
  {
    num: 434,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "The following statement regarding gastritis is true",
    options: [
      "It is characterized by overproduction of gastric acid in the stomach lining",
      "It is characterized by excessive production of mucus at the stomach mucosa",
      "It is characterized by deep ulcerations of the stomach mucosa",
      "It is characterized by dull, aching pain in the epigastrium"
    ],
    correct: 3,
    explanation: "Gastritis is inflammation of the stomach lining, often presenting as epigastric pain, nausea, and a feeling of fullness.",
    wrongReasons: {
      "0": "Gastritis can occur with normal or even low acid levels; it's the *inflammation* that defines it.",
      "1": "Mucus production is often *decreased* or the mucus barrier is compromised.",
      "2": "Deep ulcerations describe Peptic Ulcer Disease, not simple gastritis."
    }
  },
  {
    num: 435,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Auscultation of a client’s lungs reveals crackles in the left posterior base. The nursing intervention is to:",
    options: [
      "Repeat auscultation after asking the client to deep breath and cough.",
      "Instruct the client to limit fluid intake to less than 2000 ml/day.",
      "Inspect the client’s ankles and sacrum for the presence of edema.",
      "Place the client on bedrest in a semi-Fowler's position."
    ],
    correct: 0,
    explanation: "Crackles (râles) can sometimes be caused by atelectasis or secretions that clear with a deep breath and cough. The nurse should check if they persist before assuming fluid overload.",
    wrongReasons: {
      "1": "Fluid restriction is only done if fluid overload is confirmed.",
      "2": "Checking for edema is good but doesn't address the immediate lung finding.",
      "3": "Semi-Fowlers is good for breathing, but bedrest is not always indicated."
    }
  },
  {
    num: 436,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Which one of the following symptoms will warrant a diagnosis of uncomplicated malaria:",
    options: [
      "Fever, joint pains, body weekness",
      "Fever, headache, inability to feed, joint pains",
      "Vomiting, poor appetite, altered consciousness",
      "Headache, vomiting everything, blurred vision"
    ],
    correct: 0,
    explanation: "Uncomplicated malaria presents with 'flu-like' symptoms such as fever, chills, and body aches without signs of organ dysfunction or severe illness.",
    wrongReasons: {
      "1": "Inability to feed is a danger sign in children, suggesting severe malaria.",
      "2": "Altered consciousness is a sign of cerebral (severe) malaria.",
      "3": "Vomiting everything and blurred vision are signs of severe malaria/complications."
    }
  },
  {
    num: 437,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "The most common indication for orchiectomy is:",
    options: [
      "Cancer of prostate",
      "To lower level of testosterone hormone.",
      "Tumors at the testis.",
      "Castration to lower sexual desire."
    ],
    correct: 0,
    explanation: "While orchiectomy is used for testicular tumors, bilateral orchiectomy is a very common hormonal treatment for advanced prostate cancer to remove the source of testosterone.",
    wrongReasons: {
      "1": "This is the *mechanism* of why it's done for prostate cancer, but the 'indication' is the cancer itself.",
      "2": "Testicular tumors are an indication, but prostate cancer is statistically more common for this procedure in older men.",
      "3": "This is not a medical indication for orchiectomy."
    }
  },
  {
    num: 438,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Which immune stimulants is usually used for treatment of blood-related cancer?",
    options: [
      "Interferons",
      "Interleukins",
      "Colony-stimulating factors",
      "Steroids"
    ],
    correct: 0,
    explanation: "Interferons are biological response modifiers used to treat certain leukemias and lymphomas by stimulating the immune system to attack cancer cells.",
    wrongReasons: {
      "1": "Interleukins are used for some cancers (like renal cell) but less commonly than interferons for blood cancers.",
      "2": "CSFs (like Filgrastim) stimulate blood cell production but aren't 'stimulants' that treat the cancer itself.",
      "3": "Steroids are immunosuppressants, not immune stimulants."
    }
  },
  {
    num: 439,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Limb exercises after surgery, prevents:",
    options: [
      "Aspiration Pneumonia",
      "Hypovolemic Shock",
      "Urinary retention",
      "Pulmonary embolism"
    ],
    correct: 3,
    explanation: "Limb exercises (like ankle pumps) improve venous return, preventing Deep Vein Thrombosis (DVT). DVT is the primary cause of Pulmonary Embolism (PE).",
    wrongReasons: {
      "0": "Deep breathing and coughing prevent pneumonia.",
      "1": "Fluid replacement prevents shock.",
      "2": "Early ambulation helps with urinary retention, but limb exercises specifically target venous stasis."
    }
  },
  {
    num: 440,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "34-year-old woman with a history of asthma is admitted to the emergency department. The nurse notes that the client is dyspneic, with a respiratory rate of 35 breaths/minute, nasal flaring, and use of accessory muscles. Auscultation of the lung fields reveals greatly diminished breath sounds. Based on these findings, what action should the nurse take to initiate care of the client?",
    options: [
      "Initiate oxygen therapy and reassess the client in 10 minutes.",
      "Draw blood for an ABG analysis and send the client for a chest x-ray.",
      "Encourage the client to relax and breathe slowly through the mouth.",
      "Administer bronchodilators."
    ],
    correct: 3,
    explanation: "Diminished breath sounds in an acute asthma attack ('silent chest') indicate severe airway obstruction. Immediate administration of bronchodilators is the priority to open the airways.",
    wrongReasons: {
      "0": "Reassessing in 10 minutes is too long for a patient in respiratory distress.",
      "1": "Diagnostics are important but should not delay life-saving treatment.",
      "2": "The patient is in physical distress; relaxation techniques alone will not resolve the bronchospasm."
    }
  },
  {
    num: 441,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Cobblestone appearance of the affected bowel is a feature in the following disease",
    options: [
      "Ulcerative colitis",
      "Regional enteritis",
      "Bowel obstruction",
      "Rectal polyps"
    ],
    correct: 1,
    explanation: "Regional enteritis (Crohn's disease) is characterized by transmural inflammation and 'skip lesions' that create a 'cobblestone' appearance of the mucosa.",
    wrongReasons: {
      "0": "Ulcerative colitis involves continuous inflammation, usually appearing as a 'lead pipe' on X-ray.",
      "2": "Bowel obstruction shows dilated loops of bowel, not a cobblestone mucosa.",
      "3": "Polyps are discrete growths, not a generalized cobblestone pattern."
    }
  },
  {
    num: 442,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Which of the following is NOT a MAJOR manifestation in Jone’s diagnostic criteria of Rheumatic Fever:-",
    options: [
      "Polyarthritis",
      "Arthralgia",
      "Erythema marginatum",
      "Subcutaneous nodules"
    ],
    correct: 1,
    explanation: "In Jones criteria, Arthralgia (joint pain) is a MINOR criterion. Polyarthritis (joint inflammation) is a MAJOR criterion.",
    wrongReasons: {
      "0": "Polyarthritis is one of the 5 major criteria (JONES: Joint, Carditis, Nodules, Erythema, Sydenham).",
      "2": "Erythema marginatum is a major criterion.",
      "3": "Subcutaneous nodules are a major criterion."
    }
  },
  {
    num: 443,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "A nurse is assessing a client with chronic airflow limitation and notes that the client has a “barrel chest.” The nurse interprets that this client has which of the following forms of chronic airflow limitation?",
    options: [
      "Chronic obstructive bronchitis",
      "Emphysema",
      "Bronchial asthma",
      "Bronchial asthma and bronchitis"
    ],
    correct: 1,
    explanation: "Emphysema involves the destruction of alveoli and loss of lung elasticity, leading to air trapping and the characteristic 'barrel chest' (increased AP diameter).",
    wrongReasons: {
      "0": "Bronchitis is characterized by mucus and cough, not typically a barrel chest.",
      "2": "Asthma is an episodic airway narrowing.",
      "3": "While they can coexist, the barrel chest is specifically the hallmark of emphysematous changes."
    }
  },
  {
    num: 444,
    paper: "Paper 3",
    topic: "Pharmacology",
    text: "Which of the following drugs works by interfering with bacterial protein synthesis through reversible action at the 50S ribosomal subunit?",
    options: [
      "Erythromycin",
      "Gentamicin",
      "Doxycycline",
      "Both A and B"
    ],
    correct: 0,
    explanation: "Erythromycin (a macrolide) binds to the 50S ribosomal subunit to inhibit protein synthesis.",
    wrongReasons: {
      "1": "Gentamicin (an aminoglycoside) binds to the 30S subunit.",
      "2": "Doxycycline (a tetracycline) binds to the 30S subunit."
    }
  },
  {
    num: 445,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "The most appropriate position for a patient undergoing abdominal surgery is:",
    options: [
      "Lithotomy",
      "Supine",
      "Trendlenburg",
      "Prone"
    ],
    correct: 1,
    explanation: "The supine position (flat on the back) provides the best access to the abdominal cavity for most surgeries.",
    wrongReasons: {
      "0": "Lithotomy is used for pelvic/vaginal procedures.",
      "2": "Trendelenburg is used for lower abdominal/pelvic surgery to move organs cephalad.",
      "3": "Prone is for back/spine surgery."
    }
  },
  {
    num: 446,
    paper: "Paper 3",
    topic: "Fundamentals",
    text: "Elements of a nursing diagnosis include:",
    options: [
      "The problem statement, etiology and defining characteristics",
      "The etiology, the outcome, the defining characteristics",
      "The etiology, the problem, the outcome",
      "The problem, the outcome, the defining characteristics"
    ],
    correct: 0,
    explanation: "A standard NANDA nursing diagnosis consists of the Problem (P), the Etiology or 'related to' factor (E), and the Defining Characteristics or 'as evidenced by' (S).",
    wrongReasons: {
      "1": "Outcome is part of the *planning* phase, not the diagnosis itself.",
      "2": "Outcome is not an element of the diagnosis statement.",
      "3": "Outcome is not an element of the diagnosis statement."
    }
  },
  {
    num: 447,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Examination of a patient in a supine position reveal distended jugular veins from the base of the neck to the angle of the jaw. This finding indicates:",
    options: [
      "Decreased venous return",
      "Increased central venous pressure",
      "Increased pulmonary artery capillary pressure.",
      "Left-sided heart failure."
    ],
    correct: 1,
    explanation: "Jugular venous distension (JVD) is a direct reflection of increased pressure in the right atrium, which is measured as Central Venous Pressure (CVP).",
    wrongReasons: {
      "0": "Distended veins indicate *increased* volume/pressure, not decreased return.",
      "2": "PACP measures left heart pressure; JVD measures right heart pressure.",
      "3": "Left-sided failure causes pulmonary congestion; JVD is a sign of right-sided failure."
    }
  },
  {
    num: 448,
    paper: "Paper 3",
    topic: "Pharmacology",
    text: "Peter is experiencing diarrhea after consuming her prescribed antibiotics for a whole week. This is because?",
    options: [
      "The drugs renders food indigestible",
      "Gastric flora is disturbed",
      "Fluid is added into the intestines",
      "Normal intestinal bacteria are destroyed."
    ],
    correct: 3,
    explanation: "Antibiotics destroy the normal intestinal flora (good bacteria), which allows for the overgrowth of opportunistic pathogens or disrupts normal digestion, causing diarrhea.",
    wrongReasons: {
      "0": "Antibiotics don't affect the chemical digestibility of food.",
      "1": "The stomach (gastric) has very little flora; the issue is in the intestines.",
      "2": "Diarrhea is usually due to osmotic changes or inflammation, not just adding fluid."
    }
  },
  {
    num: 449,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "The type of goiter that is characterized by an overactive thyroid gland is",
    options: [
      "Colloid goiter",
      "Hypothyroid goiter",
      "Toxic goiter",
      "Multinodular goiter"
    ],
    correct: 2,
    explanation: "A 'toxic' goiter is one that produces excessive thyroid hormones (hyperthyroidism).",
    wrongReasons: {
      "0": "Colloid goiter is usually non-toxic and related to iodine deficiency.",
      "1": "Hypothyroid goiter is associated with low thyroid activity.",
      "3": "A multinodular goiter can be toxic or non-toxic; 'toxic' specifically means overactive."
    }
  },
  {
    num: 450,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Independent nursing interventions commonly used for patients with pressure ulcers include",
    options: [
      "Changing patients position regularly",
      "Applying a drying agent such as an antacid to decrease moisture at the ulcer site",
      "Debriding the ulcer to remove necrotic tissue that will impede healing",
      "Placing the patient in a whirlpool bath containing povidone-iodine solution as tolerated"
    ],
    correct: 0,
    explanation: "Repositioning the patient is a standard independent nursing intervention to relieve pressure and prevent further skin breakdown.",
    wrongReasons: {
      "1": "Applying agents usually requires a physician's order.",
      "2": "Debridement is a specialized procedure, often requiring an order or performed by a specialist.",
      "3": "Whirlpool therapy and iodine solutions require orders and specific protocols."
    }
  },
  {
    num: 451,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "One of the following is a long-term complication associated with poorly controlled diabetes mellitus:",
    options: [
      "Hypoglycemia",
      "Diabetic ketoacidosis (DKA)",
      "Nephropathy",
      "Hyperthyroidism"
    ],
    correct: 2,
    explanation: "Nephropathy (kidney damage) is a classic chronic, long-term microvascular complication of diabetes.",
    wrongReasons: {
      "0": "Hypoglycemia is an acute (immediate) complication.",
      "1": "DKA is an acute, life-threatening emergency.",
      "3": "Hyperthyroidism is not a complication of diabetes."
    }
  },
  {
    num: 452,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "A client with allergic rhinitis asks the nurse what he should do to decrease his symptoms. Which of the following instructions would be appropriate for the nurse to give the client?",
    options: [
      "“Use your nasal decongestant spray regularly to help clear your nasal passages.”",
      "“Ask the doctor for antibiotics. Antibiotics will help decrease the secretion.”",
      "“It is important to increase your activity. A daily brisk walk will help promote drainage.”",
      "“Keep a diary when your symptoms occur. This can help you identify what precipitates your attacks.”"
    ],
    correct: 3,
    explanation: "Identifying and avoiding triggers (allergens) is the most effective way to manage allergic rhinitis. A symptom diary helps pinpoint these triggers.",
    wrongReasons: {
      "0": "Regular use of decongestant sprays can cause 'rebound congestion' (rhinitis medicamentosa).",
      "1": "Allergic rhinitis is an allergy, not a bacterial infection; antibiotics are useless.",
      "2": "Activity doesn't treat the underlying allergic response."
    }
  },
  {
    num: 453,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "The nurse is giving health teachings to several clients. Who among these clients is at risk for coronary artery disease: -",
    options: [
      "The client who works in the department store",
      "The client who smokes cigarette",
      "The client who had her menarche at age 12 years old",
      "The client whose serum cholesterol level is 18"
    ],
    correct: 1,
    explanation: "Smoking is a major, modifiable risk factor for CAD as it damages the endothelium and promotes atherosclerosis.",
    wrongReasons: {
      "0": "Occupation is not a primary risk factor unless it involves extreme stress/sedentary life, but smoking is much more significant.",
      "2": "Normal menarche age is not a risk factor for CAD.",
      "3": "A cholesterol of 18 (likely mmol/L) would be extremely high, but smoking is a more direct and common risk factor taught in this context. (Note: if 18 mg/dL, it's too low; if 18 mmol/L, it's dangerously high)."
    }
  },
  {
    num: 454,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Baby Z has 60% burns. Which of the following nursing diagnosis will be your priority:-",
    options: [
      "Risk for infection",
      "Hypothermia",
      "Impaired skin integrity",
      "Disturbed body image"
    ],
    correct: 1,
    explanation: "Loss of skin (the body's primary thermoregulator) over 60% of the body leads to rapid heat loss. Hypothermia is a critical immediate threat in severe burns.",
    wrongReasons: {
      "0": "Infection is a major risk, but it usually develops over days, not immediately.",
      "2": "Impaired skin integrity is the *cause* of the problems, but hypothermia is the life-threatening *consequence*.",
      "3": "Body image is a long-term psychosocial concern."
    }
  },
  {
    num: 455,
    paper: "Paper 3",
    topic: "Pharmacology",
    text: "An asthmatic client is put on montelukast (singulair). During therapy, which of the following laboratories should be monitored?",
    options: [
      "Complete blood count",
      "Sodium and potassium",
      "Calcium and platelet count",
      "Alanine transaminase (ALT) and aspartate transaminase (AST)"
    ],
    correct: 3,
    explanation: "Montelukast can occasionally cause hepatotoxicity. Monitoring liver enzymes (ALT/AST) is recommended to ensure liver health during therapy.",
    wrongReasons: {
      "0": "CBC is not specifically affected by montelukast.",
      "1": "Electrolytes are not affected by this drug.",
      "2": "Calcium and platelets are not affected."
    }
  },
  {
    num: 456,
    paper: "Paper 3",
    topic: "Pharmacology",
    text: "Renal damage is a potential adverse effect of aminoglycosides. In what part of the kidney are aminoglycosides retained which causes this effect?",
    options: [
      "Distal tubule",
      "Proximal tubule",
      "Loop of Henle",
      "Glomerulus"
    ],
    correct: 1,
    explanation: "Aminoglycosides are filtered by the glomerulus and then actively reabsorbed and concentrated in the cells of the proximal tubule, leading to nephrotoxicity.",
    wrongReasons: {
      "0": "The distal tubule is not the primary site of aminoglycoside accumulation.",
      "2": "The Loop of Henle is not the primary site of accumulation.",
      "3": "The glomerulus filters the drug but doesn't retain it in a way that causes the damage."
    }
  },
  {
    num: 457,
    paper: "Paper 3",
    topic: "Pharmacology",
    text: "The intravenous (IV) administered drugs are:",
    options: [
      "100% bioavailable",
      "Rapidly absorbed",
      "Undergoes the first-pass metabolism",
      "Rapidly excreted by renal"
    ],
    correct: 0,
    explanation: "Bioavailability is the fraction of the drug that reaches the systemic circulation. Since IV drugs are injected directly into the blood, they are 100% bioavailable.",
    wrongReasons: {
      "1": "IV drugs aren't 'absorbed'—they are already in the bloodstream.",
      "2": "IV drugs bypass the liver (first-pass metabolism).",
      "3": "Excretion rate depends on the drug's properties, not the route of administration."
    }
  },
  {
    num: 458,
    paper: "Paper 3",
    topic: "Fundamentals",
    text: "When performing instrument preparation process. The recommended concentration of sodium hypochlorite (Jik) solution is:",
    options: [
      "One part of sodium hypochlorite to six parts of water",
      "One part of sodium hypochlorite to nine parts of water",
      "Depends with manufacturer’s instructions",
      "Depends with workplace policies"
    ],
    correct: 1,
    explanation: "A 1:10 dilution (1 part bleach to 9 parts water) is the standard recommendation for a 0.5% chlorine solution used for decontaminating instruments.",
    wrongReasons: {
      "0": "1:7 is not a standard clinical dilution for general decontamination.",
      "2": "While true, there is a standard clinical recommendation (1:10) taught in nursing.",
      "3": "Policies should follow the 1:10 standard."
    }
  },
  {
    num: 459,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "In patients with hyperparathyroidism, which complication is a nurse most concerned about?",
    options: [
      "Kidney stones",
      "Heart failure",
      "Diabetes",
      "Liver disease"
    ],
    correct: 0,
    explanation: "Hyperparathyroidism causes high calcium levels (hypercalcemia). Excess calcium is excreted in the urine, leading to the formation of renal calculi (kidney stones).",
    wrongReasons: {
      "1": "Heart failure is not a direct common complication of hyperparathyroidism.",
      "2": "Diabetes is not related to parathyroid function.",
      "3": "Liver disease is not related to parathyroid function."
    }
  },
  {
    num: 460,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Lifestyle modifications in gastroesophageal reflux disease include the following",
    options: [
      "Administration of antacids",
      "Avoiding solid foods",
      "Timing meals to at least 2 hours before bedtime",
      "Taking meals while sat in upright position"
    ],
    correct: 2,
    explanation: "Eating close to bedtime increases the risk of reflux when lying down. Patients should wait at least 2-3 hours after eating before going to bed.",
    wrongReasons: {
      "0": "Antacids are a *pharmacological* intervention, not a lifestyle modification.",
      "1": "Solid foods are necessary; the *type* of food (avoiding fat/acid) is what matters.",
      "3": "While sitting up is good, the *timing* before bed is a more critical lifestyle change for nocturnal reflux."
    }
  },
  {
    num: 461,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "The following is a modifiable risk factor for hypertension",
    options: [
      "Age",
      "Family history",
      "Obesity",
      "Race"
    ],
    correct: 2,
    explanation: "Modifiable risk factors are those that can be changed through lifestyle or treatment. Obesity is a major modifiable risk factor for hypertension.",
    wrongReasons: {
      "0": "Age is a non-modifiable risk factor.",
      "1": "Family history is a non-modifiable risk factor.",
      "3": "Race is a non-modifiable risk factor."
    }
  },
  {
    num: 462,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Surgery done to relieve symptoms is:",
    options: [
      "Curative",
      "Palliative",
      "Emergency",
      "Constructive"
    ],
    correct: 1,
    explanation: "Palliative surgery is performed to relieve symptoms (like pain or obstruction) or improve quality of life, rather than to cure the underlying disease.",
    wrongReasons: {
      "0": "Curative surgery is intended to remove the cause of the disease.",
      "2": "Emergency surgery must be done immediately to save life or limb.",
      "3": "Constructive surgery is done to restore function or appearance (e.g., cleft palate repair)."
    }
  },
  {
    num: 463,
    paper: "Paper 3",
    topic: "Fundamentals",
    text: "When taking history of a patient and the patient does not seem to understand what you are asking, what is the right action for you to take",
    options: [
      "Call another nurse",
      "Get an interpreter",
      "Use sign language",
      "Use a simpler language"
    ],
    correct: 3,
    explanation: "If a patient doesn't understand, the nurse should first attempt to simplify the language, avoid medical jargon, and clarify the information.",
    wrongReasons: {
      "0": "Calling another nurse doesn't address the communication barrier directly.",
      "1": "An interpreter is used if there is a language barrier, but 'simpler language' is the first step for general misunderstanding.",
      "2": "Sign language is only appropriate if the patient is deaf and uses it."
    }
  },
  {
    num: 464,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "The patient presents with hematuria, dysuria, cold clammy skin and lower abdominal pains. The nurse suspects the patient could be suffering from:",
    options: [
      "Cystitis",
      "Hydronephrosis",
      "Urinary bladder trauma",
      "Urethritis"
    ],
    correct: 2,
    explanation: "Hematuria and lower abdominal pain following trauma, combined with signs of shock (cold, clammy skin), strongly suggest urinary bladder trauma/rupture.",
    wrongReasons: {
      "0": "Cystitis (UTI) causes dysuria and hematuria but usually not signs of shock.",
      "1": "Hydronephrosis is kidney swelling due to urine backup, usually presenting with flank pain.",
      "3": "Urethritis is inflammation of the urethra, typically causing discharge and dysuria without systemic shock signs."
    }
  },
  {
    num: 465,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "The following diagnostic test is used to determine tracheal involvement in esophageal cancer",
    options: [
      "Barium swallow",
      "Oesophageoscopy",
      "Bronchoscopy",
      "Chest x-ray"
    ],
    correct: 2,
    explanation: "Bronchoscopy allows direct visualization of the trachea and bronchi to see if the esophageal tumor has invaded the respiratory tract.",
    wrongReasons: {
      "0": "Barium swallow visualizes the esophagus, not the inside of the trachea.",
      "1": "Oesophageoscopy visualizes the esophagus.",
      "3": "Chest X-ray may show a mass but cannot definitively confirm tracheal wall involvement like a scope can."
    }
  },
  {
    num: 466,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "What drug would you use for the relief of angina pectoris:-",
    options: [
      "Beta blocker",
      "Morphine",
      "Nitroglycerine",
      "Furosemide"
    ],
    correct: 2,
    explanation: "Nitroglycerine is a potent vasodilator that reduces myocardial oxygen demand and improves blood flow to the heart, providing rapid relief of angina.",
    wrongReasons: {
      "0": "Beta blockers are used for long-term management, not acute relief of an attack.",
      "1": "Morphine is used for the pain of myocardial infarction, not typically for stable angina relief.",
      "3": "Furosemide is a diuretic used for fluid overload, not angina."
    }
  },
  {
    num: 467,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "The best diagnostic test for Deep Venous Thrombosis is :-",
    options: [
      "Doppler ultrasound",
      "Angiography",
      "Coagulation profile",
      "Venous intravascular catheterization"
    ],
    correct: 0,
    explanation: "Venous duplex ultrasonography (Doppler) is the non-invasive gold standard for diagnosing DVT by visualizing blood flow and clot presence.",
    wrongReasons: {
      "1": "Angiography (Venography) is invasive and rarely used now that ultrasound is so accurate.",
      "2": "Coagulation profiles (like PT/INR) check clotting time but don't diagnose the presence of a clot.",
      "3": "This is not a standard diagnostic test for DVT."
    }
  },
  {
    num: 468,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "A child with malaria presents with chills, fever and sweat. You know it is as a result of:",
    options: [
      "Obstruction to blood flow",
      "Adherence of infected RBCs to blood vessels",
      "Hemolysis of infected RBCs",
      "Toxic mediators that cause inflammatory responses"
    ],
    correct: 3,
    explanation: "The paroxysms of malaria (chills/fever/sweat) are caused by the release of merozoites and toxins into the bloodstream, triggering a massive release of inflammatory cytokines (toxic mediators).",
    wrongReasons: {
      "0": "Obstruction causes organ damage (like in cerebral malaria) but not the general fever cycle.",
      "1": "Adherence (sequestration) causes severe complications, not the basic febrile paroxysm.",
      "2": "Hemolysis causes anemia, but the fever is triggered by the release of toxins during RBC rupture."
    }
  },
  {
    num: 469,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Which of the following is a common symptom of Hashimoto's thyroiditis?",
    options: [
      "Exophthalmos",
      "Pretibial myxedema",
      "Painless thyroid enlargement",
      "Weight loss"
    ],
    correct: 2,
    explanation: "Hashimoto's often presents with a goiter (painless thyroid enlargement) as the gland is chronically inflamed and eventually becomes underactive.",
    wrongReasons: {
      "0": "Exophthalmos (bulging eyes) is a sign of Graves' disease (hyperthyroidism).",
      "1": "Pretibial myxedema is a sign of Graves' disease.",
      "3": "Weight loss is a sign of hyperthyroidism; Hashimoto's eventually causes weight gain (hypothyroidism)."
    }
  },
  {
    num: 470,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Blood in pericardial sac prevents venous return to and contraction of the heart is associated with:-",
    options: [
      "Pericarditis",
      "Coronary Artery Disease",
      "Myocardial infarction",
      "Cardiac Tamponade"
    ],
    correct: 3,
    explanation: "Cardiac tamponade is a life-threatening condition where fluid/blood in the pericardium compresses the heart, preventing it from filling and pumping effectively.",
    wrongReasons: {
      "0": "Pericarditis is inflammation of the sac, which can lead to effusion but is not the compression itself.",
      "1": "CAD is narrowing of the coronary arteries.",
      "2": "MI is death of heart muscle due to lack of blood flow."
    }
  },
  {
    num: 471,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "A patient with hypothyroidism is at risk for which potential complication if left untreated?",
    options: [
      "Osteoporosis",
      "Myxedema coma",
      "Diabetes mellitus",
      "Hypertension"
    ],
    correct: 1,
    explanation: "Myxedema coma is a rare but life-threatening complication of severe, untreated hypothyroidism, characterized by extreme lethargy, hypothermia, and respiratory failure.",
    wrongReasons: {
      "0": "Osteoporosis is more associated with hyperthyroidism (excess thyroid hormone).",
      "2": "Diabetes is not a direct complication of hypothyroidism.",
      "3": "Hypothyroidism often causes bradycardia and sometimes mild diastolic hypertension, but Myxedema coma is the critical 'untreated' risk."
    }
  },
  {
    num: 472,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Which of the following will be your priority nursing consideration while administering quinine to a child diagnosed with malaria:",
    options: [
      "To monitor the respiratory rate",
      "To monitor for signs of bleeding",
      "To monitor their blood sugars",
      "To monitor the level of consciousness"
    ],
    correct: 2,
    explanation: "Quinine stimulates insulin secretion from the pancreas, which can lead to severe hypoglycemia, especially in children and pregnant women.",
    wrongReasons: {
      "0": "While important, hypoglycemia is a specific and common metabolic side effect of Quinine.",
      "1": "Quinine can cause thrombocytopenia (bleeding), but hypoglycemia is more acutely dangerous during administration.",
      "3": "Level of consciousness is monitored, but it can be affected *by* the hypoglycemia."
    }
  },
  {
    num: 473,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Spina bifida is one of the possible neural tube defects that can occur during early embryological development. Which of the following definitions most accurately describes meningocele:-",
    options: [
      "Complete exposure of spinal cord and meninges",
      "Herniation of spinal cord and meninges into a sac",
      "Sac formation containing meninges and spinal fluid",
      "Spinal cord tumor containing nerve roots"
    ],
    correct: 2,
    explanation: "A meningocele is a sac-like protrusion that contains only the meninges and cerebrospinal fluid (CSF), without the spinal cord/nerves.",
    wrongReasons: {
      "0": "This describes myeloschisis.",
      "1": "This describes myelomeningocele (the most severe form).",
      "3": "Spina bifida is a structural defect, not a tumor."
    }
  },
  {
    num: 474,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Baby N, four years old has just undergone tonsillectomy. The mother call you that the baby is vomiting. The vomit is bright red. What would your immediate action:",
    options: [
      "Offer the baby ice-cream to constrict the capillaries and stop bleeding",
      "Turn the baby to the side to prevent aspiration",
      "Pack the throat with sterile gauzes to stop the bleeding",
      "Call the theatre and wheel the baby back to theatre for hemostasis to be achieved"
    ],
    correct: 1,
    explanation: "The immediate priority for a vomiting patient with a compromised airway (post-op) is to prevent aspiration by positioning them on their side.",
    wrongReasons: {
      "0": "Ice cream is given later, but airway protection is the *immediate* action.",
      "2": "Never pack the throat blindly; it can cause further trauma and airway obstruction.",
      "3": "This may be necessary, but only after the patient is stabilized and the surgeon is notified."
    }
  },
  {
    num: 475,
    paper: "Paper 3",
    topic: "Pharmacology",
    text: "Humatrope (somatropin) is being given to a client with turner syndrome. Which of the following findings is associated with this medication?",
    options: [
      "Decreases ALT and AST level",
      "Mild hyperglycemia",
      "Hypotension",
      "Water intoxication."
    ],
    correct: 1,
    explanation: "Somatropin (Growth Hormone) can decrease insulin sensitivity, leading to elevated blood glucose levels (hyperglycemia).",
    wrongReasons: {
      "0": "It can actually cause liver enzyme elevations in some cases.",
      "2": "It doesn't typically cause hypotension.",
      "3": "Water intoxication is a risk with ADH (Vasopressin), not Growth Hormone."
    }
  },
  {
    num: 476,
    paper: "Paper 3",
    topic: "Pharmacology",
    text: "A client is prescribed with Guaifenesin (mucinex). The nurse determines that the client understands the proper administration of this medication if the client states that he or she will:",
    options: [
      "Take an additional dose once fever and cough persist",
      "Limit oral fluid intake",
      "Drink extra fluid while taking this medication",
      "Take the medication with meals only."
    ],
    correct: 2,
    explanation: "Guaifenesin is an expectorant. Increasing fluid intake is essential to help thin and loosen respiratory secretions, making them easier to cough up.",
    wrongReasons: {
      "0": "Dosage should follow the prescription, not be increased arbitrarily.",
      "1": "Limiting fluids would make the medication less effective.",
      "3": "Food is not required for absorption, though it can help if GI upset occurs."
    }
  },
  {
    num: 477,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "A method used to confirm proper endotracheal tube placement is:",
    options: [
      "Auscultation for breath sounds, inspection for bilateral chest rise",
      "Mechanical ventilator functioning, Chest CT scan",
      "Chest radiograph, SPO2 > 90%",
      "Chest in-drawing, spontaneous breathing"
    ],
    correct: 0,
    explanation: "Immediate confirmation is done by listening for equal breath sounds bilaterally and observing symmetrical chest expansion. CO2 detection (capnography) is also a standard.",
    wrongReasons: {
      "1": "CT scan is not used for routine ETT placement confirmation.",
      "2": "Chest X-ray is the gold standard for *final* position confirmation, but auscultation is the *immediate* clinical method.",
      "3": "Chest in-drawing is a sign of distress, not proper placement."
    }
  },
  {
    num: 478,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "A patient is experiencing acute gastritis after ingesting an acidic substance. The best management intervention is",
    options: [
      "Perform gastric lavage",
      "Provide supportive care and antacid therapy",
      "Induce vomiting using ipecac",
      "Administer motility agents to improve gastric emptying"
    ],
    correct: 1,
    explanation: "For corrosive ingestions (acids/alkalis), inducing vomiting or performing lavage is contraindicated as it can cause further damage to the esophagus. Supportive care and neutralizing agents (if appropriate) are used.",
    wrongReasons: {
      "0": "Lavage is avoided with corrosives due to perforation risk.",
      "2": "Inducing vomiting re-exposes the esophagus to the acid.",
      "3": "Motility agents don't address the acute chemical injury."
    }
  },
  {
    num: 479,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "An early sign of hypovolemic shock is a:-",
    options: [
      "Rapid pulse",
      "Drop in blood pressure",
      "Decrease in urine output",
      "Decrease in pulse"
    ],
    correct: 0,
    explanation: "Tachycardia (rapid pulse) is the body's earliest compensatory mechanism to maintain cardiac output when blood volume is low. Blood pressure drop is a later sign.",
    wrongReasons: {
      "1": "Hypotension is a later, decompensated sign of shock.",
      "2": "Decreased urine output is a sign of progressing shock and renal hypoperfusion.",
      "3": "Pulse increases, not decreases, in early shock."
    }
  },
  {
    num: 480,
    paper: "Paper 3",
    topic: "Fundamentals",
    text: "The nurse theorist who was the first to offer medical- surgical nursing care to patients was:",
    options: [
      "Jean Watson",
      "Virginia Henderson",
      "Florence Nightingale",
      "Dorothea Orem"
    ],
    correct: 2,
    explanation: "Florence Nightingale is considered the founder of modern nursing and established the first formal nursing standards, particularly during the Crimean War where she managed surgical casualties.",
    wrongReasons: {
      "0": "Jean Watson is known for the Theory of Human Caring.",
      "1": "Virginia Henderson defined nursing as assisting individuals to perform activities contributing to health.",
      "3": "Dorothea Orem developed the Self-Care Deficit Nursing Theory."
    }
  },
  {
    num: 481,
    paper: "Paper 3",
    topic: "Fundamentals",
    text: "Cessation of breathing for a short period is called:",
    options: [
      "Dyspnoea",
      "Apnoea",
      "Orthopnoea",
      "Bradypnoea"
    ],
    correct: 1,
    explanation: "Apnoea is the temporary cessation of breathing. It can occur during sleep (sleep apnea) or as a result of various medical conditions.",
    wrongReasons: {
      "0": "Dyspnoea is difficult or labored breathing.",
      "2": "Orthopnoea is difficulty breathing when lying flat.",
      "3": "Bradypnoea is an abnormally slow breathing rate."
    }
  },
  {
    num: 482,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "The UECs laboratory results of acute glomerulonephritis patient reveals hyponatremia, hyperkalemia and hypercalcemia. The priority nursing intervention for the patient is:",
    options: [
      "Monitor the cardiac activity so closely",
      "Monitor the level of consciousness",
      "Monitor the respiratory rate",
      "Monitor the blood pressure"
    ],
    correct: 0,
    explanation: "Hyperkalemia (high potassium) is a life-threatening electrolyte imbalance that can cause fatal cardiac arrhythmias. Monitoring cardiac activity (ECG) is the highest priority.",
    wrongReasons: {
      "1": "Level of consciousness is important but not as acutely life-threatening as cardiac arrest from hyperkalemia.",
      "2": "Respiratory rate is monitored but cardiac stability is the primary concern with high potassium.",
      "3": "Blood pressure is monitored for hypertension in glomerulonephritis, but electrolyte-induced arrhythmias are more immediate risks."
    }
  },
  {
    num: 483,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Which of the following is a priority nursing intervention for a patient who has just undergone a thyroidectomy?",
    options: [
      "Encourage the patient to speak as much as possible",
      "Keep a tracheostomy set at the bedside",
      "Place the patient in a prone position",
      "Administer aspirin for pain relief"
    ],
    correct: 1,
    explanation: "Post-thyroidectomy, there is a risk of airway obstruction due to edema or laryngeal nerve damage. Having a tracheostomy set ready is a critical safety measure.",
    wrongReasons: {
      "0": "The patient should rest their voice to reduce laryngeal edema.",
      "2": "The patient should be in semi-Fowler's position to reduce edema, not prone.",
      "3": "Aspirin is avoided due to the risk of bleeding; other analgesics are preferred."
    }
  },
  {
    num: 484,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "A patient with suspected appendicitis typically experiences pain in which quadrant of the abdomen?",
    options: [
      "Left upper quadrant",
      "Right upper quadrant",
      "Left lower quadrant",
      "Right lower quadrant"
    ],
    correct: 3,
    explanation: "Pain in appendicitis usually starts periumbilical and then migrates to the Right Lower Quadrant (McBurney's point).",
    wrongReasons: {
      "0": "LUQ pain is associated with the spleen or stomach.",
      "1": "RUQ pain is associated with the liver or gallbladder.",
      "2": "LLQ pain is associated with diverticulitis."
    }
  },
  {
    num: 485,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "The priority nursing intervention for a patient with a suspected intestinal obstruction is:",
    options: [
      "Encourage a high-fiber diet",
      "Administer a laxative",
      "To maintain the patient on NPO",
      "Encourage ambulation"
    ],
    correct: 2,
    explanation: "Keeping the patient NPO (nothing by mouth) prevents further distension and prepares the patient for potential surgery.",
    wrongReasons: {
      "0": "Fiber would worsen the obstruction.",
      "1": "Laxatives are contraindicated as they can cause perforation.",
      "3": "Ambulation is good but NPO is the immediate priority for safety."
    }
  },
  {
    num: 486,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "A common complication following a thyroidectomy is damage to which of the following?",
    options: [
      "Vagus nerve",
      "Phrenic nerve",
      "Laryngeal nerve",
      "Facial nerve"
    ],
    correct: 2,
    explanation: "The recurrent laryngeal nerve is located very close to the thyroid gland and is at risk of injury during surgery, which can cause hoarseness or airway obstruction.",
    wrongReasons: {
      "0": "The vagus nerve is higher up, though the laryngeal is a branch of it.",
      "1": "The phrenic nerve controls the diaphragm and is not typically involved in thyroid surgery.",
      "3": "The facial nerve is involved in parotid surgery, not thyroid."
    }
  },
  {
    num: 487,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Which of the following is a classic symptom of Benign Prostatic Hyperplasia (BPH)?",
    options: [
      "Polyuria",
      "Dribbling of urine",
      "Hematuria",
      "Painful ejaculation"
    ],
    correct: 1,
    explanation: "BPH causes urethral compression, leading to symptoms like a weak stream, hesitancy, and post-void dribbling.",
    wrongReasons: {
      "0": "Polyuria (excessive urine) is a sign of diabetes, not BPH.",
      "2": "Hematuria can occur but is not as 'classic' for BPH as obstructive symptoms.",
      "3": "This is more common in prostatitis or infections."
    }
  },
  {
    num: 488,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "A major potential complication following a prostatectomy for BPH is:",
    options: [
      "Infection",
      "Hemorrhage",
      "Urinary retention",
      "Constipation"
    ],
    correct: 1,
    explanation: "The prostatic fossa is highly vascular, making hemorrhage a significant risk in the first 24 hours post-op.",
    wrongReasons: {
      "0": "Infection is a risk for any surgery but hemorrhage is the most acute concern here.",
      "2": "A catheter is usually in place to prevent retention.",
      "3": "Constipation is avoided with stool softeners but isn't the 'major' acute surgical complication."
    }
  },
  {
    num: 489,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Diabetes Mellitus Type 1 is primarily caused by:",
    options: [
      "Insulin resistance",
      "Obesity",
      "Destruction of beta cells in the pancreas",
      "Excessive sugar intake"
    ],
    correct: 2,
    explanation: "Type 1 DM is an autoimmune condition where the body's immune system destroys the insulin-producing beta cells in the Islets of Langerhans.",
    wrongReasons: {
      "0": "Insulin resistance is the hallmark of Type 2 DM.",
      "1": "Obesity is a major risk factor for Type 2, not Type 1.",
      "3": "Sugar intake doesn't cause Type 1 DM."
    }
  },
  {
    num: 490,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Which of the following is a characteristic sign of Diabetic Ketoacidosis (DKA)?",
    options: [
      "Bradypnea",
      "Kussmaul breathing",
      "Weight gain",
      "Moist, clammy skin"
    ],
    correct: 1,
    explanation: "Kussmaul breathing (deep, rapid respirations) is a compensatory mechanism to blow off CO2 and correct metabolic acidosis in DKA.",
    wrongReasons: {
      "0": "Respirations are rapid, not slow.",
      "2": "DKA causes dehydration and weight loss.",
      "3": "Skin is typically hot and dry due to severe dehydration."
    }
  },
  {
    num: 491,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "The immediate management for a conscious patient experiencing hypoglycemia is to:",
    options: [
      "Administer long-acting insulin",
      "Give the patient a diet soda",
      "Administer 15-20g of fast-acting carbohydrate",
      "Encourage the patient to exercise"
    ],
    correct: 2,
    explanation: "The 'Rule of 15' involves giving 15g of simple carbs (like juice or glucose tabs) and rechecking in 15 minutes.",
    wrongReasons: {
      "0": "Insulin would further lower the blood sugar.",
      "1": "Diet soda contains no sugar and will not help.",
      "3": "Exercise would further deplete glucose levels."
    }
  },
  {
    num: 492,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Dietary management for a patient with Chronic Renal Failure (CRF) typically includes:",
    options: [
      "High protein, high sodium diet",
      "Limit protein, sodium, and potassium",
      "High potassium, low carbohydrate diet",
      "Unrestricted fluid intake"
    ],
    correct: 1,
    explanation: "In CRF, the kidneys cannot excrete waste products effectively, so protein (urea), sodium (edema/HTN), and potassium (arrhythmias) must be restricted.",
    wrongReasons: {
      "0": "High protein increases nitrogenous waste; high sodium causes fluid overload.",
      "2": "High potassium is dangerous in renal failure.",
      "3": "Fluids are usually restricted to prevent overload."
    }
  },
  {
    num: 493,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Following a thyroidectomy, the nurse should prioritize assessing for which sign of hypocalcemia?",
    options: [
      "Bradycardia",
      "Trousseau's sign",
      "Hyporeflexia",
      "Constipation"
    ],
    correct: 1,
    explanation: "Accidental removal of parathyroid glands during thyroidectomy causes hypocalcemia, which presents with neuromuscular irritability (Trousseau's and Chvostek's signs).",
    wrongReasons: {
      "0": "Hypocalcemia causes tachycardia and arrhythmias, not typically bradycardia.",
      "2": "It causes hyperreflexia (increased reflexes), not hyporeflexia.",
      "3": "It causes diarrhea or cramping, not constipation."
    }
  },
  {
    num: 494,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "A patient with acute cholecystitis typically reports pain in which area?",
    options: [
      "Left upper quadrant",
      "Right upper quadrant",
      "Left lower quadrant",
      "Right lower quadrant"
    ],
    correct: 1,
    explanation: "Cholecystitis (gallbladder inflammation) causes pain in the Right Upper Quadrant (RUQ), often radiating to the right shoulder or scapula.",
    wrongReasons: {
      "0": "LUQ pain is associated with the spleen or stomach.",
      "2": "LLQ pain is associated with diverticulitis.",
      "3": "RLQ pain is associated with appendicitis."
    }
  },
  {
    num: 495,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "The priority nursing intervention for a patient with acute pancreatitis is to:",
    options: [
      "Encourage a high-fat diet",
      "Maintain the patient on NPO",
      "Administer oral analgesics",
      "Encourage ambulation"
    ],
    correct: 1,
    explanation: "NPO status is essential to 'rest' the pancreas and prevent the release of digestive enzymes that cause further inflammation and pain.",
    wrongReasons: {
      "0": "Fat stimulates the pancreas and worsens inflammation.",
      "2": "IV analgesics are preferred for the severe pain of pancreatitis.",
      "3": "Bedrest is typically recommended during the acute phase to reduce metabolic demand."
    }
  },
  {
    num: 496,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "The most common cause of peptic ulcer disease is:",
    options: [
      "Excessive stress",
      "Spicy foods",
      "Helicobacter pylori infection",
      "Alcohol consumption"
    ],
    correct: 2,
    explanation: "H. pylori is a bacterium that weakens the protective lining of the stomach and duodenum, leading to most peptic ulcers.",
    wrongReasons: {
      "0": "Stress can worsen ulcers but is not the primary cause.",
      "1": "Spicy foods irritate existing ulcers but don't cause them.",
      "3": "Alcohol is a risk factor but not the most common primary cause."
    }
  },
  {
    num: 497,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Which of the following is a characteristic symptom of ulcerative colitis?",
    options: [
      "Constipation",
      "Bloody diarrhea",
      "Steatorrhea",
      "Weight gain"
    ],
    correct: 1,
    explanation: "Ulcerative colitis causes inflammation and ulcers in the colon and rectum, leading to frequent, small-volume bloody diarrhea.",
    wrongReasons: {
      "0": "Diarrhea is the hallmark, not constipation.",
      "2": "Steatorrhea (fatty stools) is more common in malabsorption syndromes like Crohn's or pancreatitis.",
      "3": "UC causes significant weight loss due to diarrhea and malabsorption."
    }
  },
  {
    num: 498,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "A common complication of Crohn's disease is the formation of:",
    options: [
      "Hemorrhoids",
      "Fistulas",
      "Gallstones",
      "Hiatal hernia"
    ],
    correct: 1,
    explanation: "Crohn's disease causes transmural (full-thickness) inflammation, which can lead to the formation of fistulas—abnormal connections between the bowel and other organs or the skin.",
    wrongReasons: {
      "0": "Hemorrhoids are swollen veins in the rectum, not a direct complication of Crohn's inflammation.",
      "2": "Gallstones are more common in Crohn's due to bile acid malabsorption, but fistulas are a hallmark 'complication' of the disease process.",
      "3": "Hiatal hernia is unrelated to Crohn's disease."
    }
  },
  {
    num: 499,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Dietary recommendations for a patient with diverticulitis after the acute phase has resolved include:",
    options: [
      "Low-fiber diet",
      "High-fiber diet",
      "High-fat diet",
      "Low-protein diet"
    ],
    correct: 1,
    explanation: "Once the acute inflammation of diverticulitis subsides, a high-fiber diet is recommended to prevent future episodes by promoting regular bowel movements and reducing pressure in the colon.",
    wrongReasons: {
      "0": "Low-fiber is only for the acute phase.",
      "2": "High-fat diets are generally discouraged for gastrointestinal health.",
      "3": "Protein intake is not typically restricted in diverticulitis management."
    }
  },
  {
    num: 500,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "The primary symptom associated with a hiatal hernia is:",
    options: [
      "Diarrhea",
      "Heartburn",
      "Constipation",
      "Abdominal distension"
    ],
    correct: 1,
    explanation: "A hiatal hernia allows stomach acid to reflux into the esophagus more easily, leading to persistent heartburn (pyrosis) and regurgitation.",
    wrongReasons: {
      "0": "Diarrhea is not a symptom of a hiatal hernia.",
      "2": "Constipation is not a symptom of a hiatal hernia.",
      "3": "Distension is more common in lower GI issues like obstruction."
    }
  },
  {
    num: 501,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "A common cause of hemorrhoids is:",
    options: [
      "Excessive exercise",
      "Chronic constipation and straining",
      "High-fiber diet",
      "Low-fat diet"
    ],
    correct: 1,
    explanation: "Increased pressure in the rectal veins due to chronic constipation, straining during bowel movements, and pregnancy are the most common causes of hemorrhoids.",
    wrongReasons: {
      "0": "Exercise generally helps prevent constipation and hemorrhoids.",
      "2": "High-fiber prevents hemorrhoids by softening stools.",
      "3": "Low-fat is not a cause of hemorrhoids."
    }
  },
  {
    num: 502,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "A common complication of cirrhosis of the liver is the accumulation of fluid in the peritoneal cavity, known as:",
    options: [
      "Edema",
      "Ascites",
      "Pleural effusion",
      "Lymphedema"
    ],
    correct: 1,
    explanation: "Ascites is the accumulation of fluid in the abdomen due to portal hypertension and low albumin levels in patients with advanced liver cirrhosis.",
    wrongReasons: {
      "0": "Edema is general swelling, often in the legs.",
      "2": "Pleural effusion is fluid around the lungs.",
      "3": "Lymphedema is swelling due to lymphatic obstruction."
    }
  },
  {
    num: 503,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "A characteristic sign of hepatic encephalopathy is:",
    options: [
      "Jaundice",
      "Asterixis",
      "Spider angiomas",
      "Palmar erythema"
    ],
    correct: 1,
    explanation: "Asterixis, or 'liver flap', is a coarse flapping tremor of the hands when extended, caused by metabolic toxins (like ammonia) affecting the brain.",
    wrongReasons: {
      "0": "Jaundice is a sign of liver failure but not specific to encephalopathy.",
      "2": "Spider angiomas are skin signs of cirrhosis.",
      "3": "Palmar erythema (red palms) is a skin sign of cirrhosis."
    }
  },
  {
    num: 504,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Viral Hepatitis A is primarily transmitted through the:",
    options: [
      "Blood-borne route",
      "Fecal-oral route",
      "Sexual contact",
      "Respiratory droplets"
    ],
    correct: 1,
    explanation: "Hepatitis A is typically spread through contaminated food or water (fecal-oral route).",
    wrongReasons: {
      "0": "Hepatitis B, C, and D are blood-borne.",
      "2": "Hepatitis B and C are commonly spread through sexual contact.",
      "3": "Hepatitis is not spread through respiratory droplets."
    }
  },
  {
    num: 505,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "A major risk factor for the development of cholelithiasis (gallstones) is often described by the '4 Fs':",
    options: [
      "Female, Fat, Forty, Fertile",
      "Male, Muscle, Mid-thirties, Malnourished",
      "Female, Fit, Fifty, Fasting",
      "Male, Fat, Forty, Fertile"
    ],
    correct: 0,
    explanation: "The classic risk factors for gallstones are being Female, over Forty, of childbearing age (Fertile), and overweight (Fat).",
    wrongReasons: {
      "1": "Males are at lower risk than females.",
      "2": "Being fit and fasting (though rapid weight loss is a risk) are not the classic '4 Fs'.",
      "3": "Females have a higher incidence due to estrogen levels."
    }
  },
  {
    num: 506,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Acute renal failure can be caused by prerenal factors such as:",
    options: [
      "Kidney stones",
      "Severe dehydration or hemorrhage",
      "Bladder tumor",
      "Glomerulonephritis"
    ],
    correct: 1,
    explanation: "Prerenal causes of ARF are those that reduce blood flow to the kidneys, such as severe dehydration, hemorrhage, or heart failure.",
    wrongReasons: {
      "0": "Kidney stones are a *postrenal* cause (obstruction).",
      "2": "Bladder tumors are a *postrenal* cause.",
      "3": "Glomerulonephritis is an *intrarenal* cause (direct damage to the kidney tissue)."
    }
  },
  {
    num: 507,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "A characteristic finding in nephrotic syndrome is:",
    options: [
      "Hematuria",
      "Massive proteinuria",
      "Hypotension",
      "Weight loss"
    ],
    correct: 1,
    explanation: "Nephrotic syndrome is characterized by massive proteinuria (>3.5g/day), hypoalbuminemia, and severe edema.",
    wrongReasons: {
      "0": "Hematuria is more characteristic of *nephritic* syndrome (glomerulonephritis).",
      "2": "Hypertension is common, not hypotension.",
      "3": "Weight gain occurs due to massive edema (anasarca)."
    }
  },
  {
    num: 508,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "A common complication of Chronic Renal Failure (CRF) due to decreased erythropoietin production is:",
    options: [
      "Polycythemia",
      "Anemia",
      "Thrombocytosis",
      "Leukocytosis"
    ],
    correct: 1,
    explanation: "The kidneys produce erythropoietin, which stimulates red blood cell production. In CRF, this production decreases, leading to chronic anemia.",
    wrongReasons: {
      "0": "Polycythemia is an excess of RBCs, the opposite of what happens in CRF.",
      "2": "Thrombocytosis is an excess of platelets.",
      "3": "Leukocytosis is an elevated white blood cell count."
    }
  },
  {
    num: 509,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "A common symptom of Benign Prostatic Hyperplasia (BPH) is:",
    options: [
      "Increased force of the urinary stream",
      "Difficulty starting urination (hesitancy)",
      "Polyuria",
      "Painful urination"
    ],
    correct: 1,
    explanation: "BPH causes the prostate to enlarge and compress the urethra, leading to difficulty initiating a stream, a weak stream, and dribbling.",
    wrongReasons: {
      "0": "The force of the stream is *decreased* in BPH.",
      "2": "Polyuria (excessive volume) is not a typical symptom; frequency (small amounts) is.",
      "3": "Dysuria (pain) is more common in infections like prostatitis or UTIs."
    }
  },
  {
    num: 510,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "Following a prostatectomy, the nurse's priority assessment is to check for signs of:",
    options: [
      "Infection",
      "Hemorrhage",
      "Urinary retention",
      "Constipation"
    ],
    correct: 1,
    explanation: "Prostate tissue is highly vascular, making hemorrhage a significant and immediate risk in the first 24 hours post-surgery.",
    wrongReasons: {
      "0": "Infection is a risk but usually takes longer to develop than hemorrhage.",
      "2": "Urinary retention is managed with a 3-way catheter and continuous bladder irrigation (CBI).",
      "3": "Constipation is a later concern."
    }
  },
  {
    num: 511,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "To prevent recurrent Urinary Tract Infections (UTIs), the nurse should instruct a female patient to:",
    options: [
      "Limit fluid intake",
      "Wipe from front to back",
      "Wear nylon underwear",
      "Take bubble baths regularly"
    ],
    correct: 1,
    explanation: "Wiping from front to back prevents the transfer of E. coli from the anal area to the urethra.",
    wrongReasons: {
      "0": "Fluids should be *increased* to flush out bacteria.",
      "2": "Cotton underwear is preferred as it is more breathable.",
      "3": "Bubble baths can irritate the urethra and increase infection risk."
    }
  },
  {
    num: 512,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "The most common causative organism for cystitis (bladder infection) is:",
    options: [
      "Staphylococcus aureus",
      "Escherichia coli",
      "Klebsiella pneumoniae",
      "Proteus mirabilis"
    ],
    correct: 1,
    explanation: "E. coli, a bacterium normally found in the intestinal tract, is responsible for about 80-90% of community-acquired UTIs.",
    wrongReasons: {
      "0": "Staph is a less common cause of UTIs.",
      "2": "Klebsiella is a cause but much less frequent than E. coli.",
      "3": "Proteus is associated with kidney stones but is not the most common cause."
    }
  },
  {
    num: 513,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "A characteristic sign of pyelonephritis (kidney infection) is:",
    options: [
      "Suprapubic pain",
      "Costovertebral angle (CVA) tenderness",
      "Urethral discharge",
      "Painless hematuria"
    ],
    correct: 1,
    explanation: "CVA tenderness (pain upon percussion over the kidneys) is a hallmark sign of upper urinary tract infection (pyelonephritis).",
    wrongReasons: {
      "0": "Suprapubic pain is more common in cystitis (lower UTI).",
      "2": "Urethral discharge suggests an STI or urethritis.",
      "3": "Painless hematuria is a classic red flag for bladder cancer."
    }
  },
  {
    num: 514,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "The primary symptom of renal calculi (kidney stones) is:",
    options: [
      "Dull, aching back pain",
      "Severe flank pain (renal colic)",
      "High fever and chills",
      "Generalized abdominal pain"
    ],
    correct: 1,
    explanation: "Renal colic is the sudden, excruciating flank pain that often radiates to the groin as the stone moves through the ureter.",
    wrongReasons: {
      "0": "The pain is typically sharp and severe, not dull.",
      "2": "Fever suggests an accompanying infection but is not the primary symptom of the stone itself.",
      "3": "The pain is localized to the flank/groin, not generalized."
    }
  },
  {
    num: 515,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "A major risk factor for the development of bladder cancer is:",
    options: [
      "High-fat diet",
      "Cigarette smoking",
      "Excessive alcohol consumption",
      "Sedentary lifestyle"
    ],
    correct: 1,
    explanation: "Smoking is the most significant risk factor for bladder cancer, as carcinogens from tobacco are excreted in the urine and irritate the bladder lining.",
    wrongReasons: {
      "0": "Diet is less strongly linked to bladder cancer than smoking.",
      "2": "Alcohol is not a primary risk factor for bladder cancer.",
      "3": "Lifestyle is a general health factor but not a specific primary cause here."
    }
  },
  {
    num: 516,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "When caring for a patient with a suspected fracture, the nurse's priority assessment is:",
    options: [
      "Range of motion of the affected limb",
      "Neurovascular status (pulse, sensation, movement)",
      "Pain level on a scale of 1-10",
      "Skin integrity around the injury"
    ],
    correct: 1,
    explanation: "Assessing the '5 Ps' (Pain, Pulse, Pallor, Paresthesia, Paralysis) is critical to ensure that blood flow and nerve function are intact distal to the fracture.",
    wrongReasons: {
      "0": "Never perform ROM on a suspected fracture until it is stabilized.",
      "2": "Pain is important but neurovascular integrity is the priority for limb preservation.",
      "3": "Skin integrity is important (especially for open fractures) but secondary to circulation/sensation."
    }
  },
  {
    num: 517,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "A characteristic sign of compartment syndrome is:",
    options: [
      "Pain that is relieved by elevation",
      "Pain out of proportion to the injury",
      "Increased warmth in the affected limb",
      "Bounding peripheral pulses"
    ],
    correct: 1,
    explanation: "Compartment syndrome causes severe pain that is not relieved by analgesics or elevation and is often described as 'out of proportion' to the apparent injury.",
    wrongReasons: {
      "0": "Elevation can actually worsen compartment syndrome by decreasing arterial pressure.",
      "2": "The limb is usually cool and pale (pallor) due to ischemia.",
      "3": "Pulses are typically weak or absent (pulselessness) in late stages."
    }
  },
  {
    num: 518,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "A major risk factor for the development of osteoporosis is:",
    options: [
      "High-calcium diet",
      "Postmenopausal status in women",
      "Regular weight-bearing exercise",
      "Male gender"
    ],
    correct: 1,
    explanation: "Postmenopausal women are at high risk for osteoporosis due to the decline in estrogen, which normally helps maintain bone density.",
    wrongReasons: {
      "0": "High-calcium intake *prevents* osteoporosis.",
      "2": "Weight-bearing exercise *strengthens* bones.",
      "3": "Women are at much higher risk than men due to hormonal changes."
    }
  },
  {
    num: 519,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "A characteristic feature of Rheumatoid Arthritis (RA) that distinguishes it from osteoarthritis is:",
    options: [
      "Asymmetrical joint involvement",
      "Symmetrical joint involvement",
      "Pain that improves with rest",
      "Involvement of weight-bearing joints only"
    ],
    correct: 1,
    explanation: "RA is a systemic autoimmune disease that typically affects the same joints on both sides of the body (symmetrical involvement), such as both wrists or both knees.",
    wrongReasons: {
      "0": "Osteoarthritis is often asymmetrical (e.g., only one hip).",
      "2": "RA pain often involves morning stiffness that *improves* with movement, not rest.",
      "3": "RA commonly affects small joints (hands/feet), not just weight-bearing ones."
    }
  },
  {
    num: 520,
    paper: "Paper 3",
    topic: "Medical-Surgical",
    text: "The primary symptom of osteoarthritis is:",
    options: [
      "Joint pain that improves with activity",
      "Joint pain that worsens with activity",
      "High fever and joint swelling",
      "Symmetrical joint deformity"
    ],
    correct: 1,
    explanation: "Osteoarthritis is a 'wear-and-tear' disease where joint pain typically increases with use and is relieved by rest.",
    wrongReasons: {
      "0": "RA pain improves with activity; OA pain worsens.",
      "2": "Fever is not a sign of OA (which is non-inflammatory/degenerative).",
      "3": "OA is often asymmetrical."
    }
  }
];
