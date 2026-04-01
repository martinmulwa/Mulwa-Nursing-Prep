export interface Question {
  num: number;
  topic: string;
  text: string;
  options: string[];
  correct: number;
  explanation: string;
  wrongReasons?: Record<string, string>;
  memory?: string;
}

export const questions: Question[] = [
  {
    num: 1,
    topic: "Anatomy",
    text: "Which of the following cells undergoes meiosis:",
    options: ["Sperm cells", "Nerve cells", "Blood cells", "Muscle cells"],
    correct: 0,
    explanation: "Meiosis produces gametes (sperm/egg) with half the chromosomes. Somatic cells (nerve, blood, muscle) use mitosis.",
    memory: "Meiosis = Mating (sex cells). Mitosis = My Toes (body cells)."
  },
  {
    num: 2,
    topic: "Fundamentals",
    text: "In communication, the sender:",
    options: ["Codes the message", "Decodes the message", "Encodes the message", "Interprets the message"],
    correct: 2,
    explanation: "The sender encodes thoughts into a message. The receiver decodes and interprets it.",
    memory: "Sender Encodes. Receiver Decodes."
  },
  {
    num: 3,
    topic: "Community Health",
    text: "Functions of a community include the following",
    options: [
      "Acculturation of new members, economic productivity, enforcing healthcare decisions on its members",
      "Violating individual rights, distributing goods and services, educating its members",
      "Transmitting beliefs, providing specialized treatment for sick individuals, providing companionship",
      "Transmitting beliefs, acculturation of new members, protection of individual rights and welfare"
    ],
    correct: 3,
    explanation: "Core community functions include socialization (transmitting beliefs, acculturation), mutual support (protection of welfare), and social control.",
    memory: "A healthy community socializes, supports, and protects its members."
  },
  {
    num: 4,
    topic: "Community Health",
    text: "Select a true statement regarding food poisoning",
    options: [
      "It is caused by addition of chemicals to food during preparation",
      "It is caused by multiplication of organisms after consumption in food",
      "It is characterized by fever",
      "The incubation period is typically a few hours or a day"
    ],
    correct: 3,
    explanation: "Food poisoning has a short incubation period (hours to a day) due to rapid bacterial growth or pre-formed toxins.",
    memory: "Food poisoning is FAST. You eat bad food, and within hours, your body tries to expel it."
  },
  {
    num: 5,
    topic: "Medical-Surgical",
    text: "The major goal of treating HIV infection with the ARVs is to",
    options: [
      "Prevent opportunistic infections",
      "Achieve undetectable viral load",
      "Improve the CD4 count",
      "Improve the quality of life"
    ],
    correct: 1,
    explanation: "The primary clinical goal of ART is maximal and durable suppression of the HIV viral load, which then allows immune recovery.",
    memory: "U = U (Undetectable = Untransmittable). The main target is to crush the viral load."
  },
  {
    num: 6,
    topic: "Fundamentals",
    text: "The regulation of nursing practice in Kenya falls under which body",
    options: [
      "The parliament",
      "The national government",
      "Nursing Council of Kenya",
      "The hospitals or place of practice"
    ],
    correct: 2,
    explanation: "The Nursing Council of Kenya (NCK) is the statutory body responsible for regulating nursing and midwifery education and practice.",
    memory: "NCK = Nursing Council of Kenya. They make the rules."
  },
  {
    num: 7,
    topic: "Fundamentals",
    text: "Immunization with live or killed antigens is classified as",
    options: ["Innate immunity", "Passive immunity", "Active immunity", "Cell mediated"],
    correct: 2,
    explanation: "Vaccines introduce antigens to stimulate the body's own immune system to produce antibodies, creating active immunity.",
    memory: "ACTIVE = your body does the ACTING (making antibodies). PASSIVE = passed to you."
  },
  {
    num: 8,
    topic: "Paediatric",
    text: "The part of a child’s stages that is measurable is",
    options: ["Learning", "Development", "Growth", "Cephalocaudal growth"],
    correct: 2,
    explanation: "Growth refers to physical, quantitative, and measurable changes in size (height, weight). Development is qualitative.",
    memory: "GROWTH = GRAMS and INCHES (Measurable). DEVELOPMENT = DOING things (Skills)."
  },
  {
    num: 9,
    topic: "Pharmacology",
    text: "Calcium supplements in patients with osteoporosis should be given alongside the following nutrients",
    options: ["Vitamin C", "Phosphorous", "Vitamin D", "Vitamin B12"],
    correct: 2,
    explanation: "Vitamin D is essential for the intestinal absorption of calcium.",
    memory: "Calcium builds the bone, but Vitamin D unlocks the door to let Calcium into the body."
  },
  {
    num: 10,
    topic: "Paediatric",
    text: "The appropriate intervention for children newly diagnosed with HIV and tuberculosis is to: -",
    options: [
      "Initiate antiretroviral therapy immediately and TB treatment soon after ART is tolerated.",
      "Start TB treatment immediately and antiretroviral therapy soon the TB treatment is tolerated",
      "Initiate both antiretroviral therapy and TB treatment together immediately",
      "Start antiretroviral therapy after TB treatment course is fully completed"
    ],
    correct: 1,
    explanation: "TB treatment is prioritized to prevent fatal spread. ART is started shortly after (2-8 weeks) to avoid Immune Reconstitution Inflammatory Syndrome (IRIS).",
    memory: "TB kills faster. Treat TB first, then bring in the ARVs."
  },
  {
    num: 11,
    topic: "Pharmacology",
    text: "The first line antibiotic for prophylaxis against opportunistic infections in HIV/AIDS is",
    options: [
      "Dapsone",
      "Atovaquone-pyrimethamine",
      "Trimethoprim-sulfamethoxazole",
      "High dose penicillins"
    ],
    correct: 2,
    explanation: "Cotrimoxazole (Trimethoprim-sulfamethoxazole/Septrin) is the first-line prophylaxis against PCP and Toxoplasmosis in HIV patients.",
    memory: "COTRIMOXAZOLE (Septrin) is the SHIELD for HIV patients."
  },
  {
    num: 12,
    topic: "Law",
    text: "For a patient with cholera who has refuse to be quarantined or admitted within a facility and insist on going home the nurse should",
    options: [
      "Respect the client autonomy and allow them to go home",
      "Embrace the feelings of the patient and try to be reasonable with them",
      "Enact the public health act",
      "Call the police on the patient"
    ],
    correct: 2,
    explanation: "Cholera is a highly infectious, notifiable disease. Under the Public Health Act, isolation can be legally enforced to protect the community.",
    memory: "Public Health Act overrides personal autonomy during deadly outbreaks."
  },
  {
    num: 13,
    topic: "Microbiology",
    text: "In the logarithmic phase of bacteria growth in liquid culture media:-",
    options: [
      "There is a decrease in the growth rate",
      "The bacteria die",
      "The bacteria are getting used to the environment",
      "The bacteria have a high rate of metabolism"
    ],
    correct: 3,
    explanation: "The log (exponential) phase involves rapid cell division and extremely high metabolic activity.",
    memory: "LOG phase = LOGICAL to grow fast. LAG = lagging behind (getting used to it)."
  },
  {
    num: 14,
    topic: "Fundamentals",
    text: "The group development stage where the group would evaluate the product and the lessons learned is: -",
    options: ["Storming", "Norming", "Performing", "Adjourning"],
    correct: 3,
    explanation: "In Tuckman's stages, 'Adjourning' involves wrapping up tasks, evaluating outcomes, and disbanding the group.",
    memory: "Adjourning = Adios. Time to review and say goodbye."
  },
  {
    num: 15,
    topic: "Community Health",
    text: "Select the most appropriate statement regarding housing in community health nursing",
    options: [
      "Adequate housing must meet physiologic and psychological criteria for occupant’s health",
      "Only physiologic criteria are considered in forming a decision whether housing is adequate",
      "Privacy is an example of physiologic criterion for adequate housing",
      "All houses that are not permanent in construction are considered inadequate housing"
    ],
    correct: 0,
    explanation: "Healthy housing must satisfy both physiological needs (shelter, sanitation) and psychological needs (privacy, comfort).",
    memory: "A house needs a roof (physiologic) and peace (psychologic)."
  },
  {
    num: 16,
    topic: "Anatomy",
    text: "Which of the following describes an “action potential”:-",
    options: [
      "The high concentration of Na + and Cl − outside the cell, and of K + inside the cell.",
      "The voltage change that moves along the cell membrane until it reaches the axon hillock.",
      "The movement of a neurotransmitter from the pre-synaptic membrane to the post-synaptic membrane.",
      "The movement of Na + across the cell membrane into the cell, followed by the movement of K+ out of the cell."
    ],
    correct: 3,
    explanation: "An action potential is driven by a sudden Na+ influx (depolarization) followed by K+ efflux (repolarization).",
    memory: "ACTION POTENTIAL = Na+ rushes IN (Action), K+ rushes OUT (Reset)."
  },
  {
    num: 17,
    topic: "Pharmacology",
    text: "Which antidiabetic agent works best in patient with insulin resistance.",
    options: ["Biguanides", "Dipeptidy peptidase-4 inhibotors", "Thiazolidinediones", "Meglitinides"],
    correct: 0,
    explanation: "Biguanides (like Metformin) are the first-line standard because they decrease hepatic glucose production and increase peripheral insulin sensitivity.",
    memory: "Biguanides (Metformin) = Best for insulin resistance."
  },
  {
    num: 18,
    topic: "Paediatric",
    text: "Initial treatment of severe acute malnutrition should involve the following",
    options: [
      "Aggressive refeeding to gain weight",
      "Treatment of complications",
      "Exclusive parenteral nutrition",
      "Complementary feeding"
    ],
    correct: 1,
    explanation: "The initial stabilization phase focuses on treating life-threatening complications (hypoglycemia, hypothermia, infection) before cautious refeeding.",
    memory: "STABILIZE before you SUPER-SIZE. Aggressive refeeding can cause fatal refeeding syndrome."
  },
  {
    num: 19,
    topic: "Fundamentals",
    text: "“I do not want to be nursed by you, please get me a male nurse to continue with the procedure” if a patient says this to a nurse on duty this nurse should",
    options: [
      "Leave the patient alone to carry on with their own affair",
      "Explain to the patient that failure to comply will be detrimental to their health",
      "Report the matter to the nurse in charge",
      "Acknowledge patients’ choice and accept the request"
    ],
    correct: 3,
    explanation: "Patients have the right to refuse care from specific providers and request alternatives based on personal or cultural preferences.",
    memory: "Patient autonomy includes choosing who provides their care."
  },
  {
    num: 20,
    topic: "Pharmacology",
    text: "Which of the following patient manifest acetaminophen toxicity?",
    options: [
      "John, 26, with new onset jaundice while on drug therapy",
      "Kevin, 54, with difficulty of breathing while on drug therapy",
      "Steve, 37, with joint stiffness while on drug therapy",
      "Robert, 29, with new-onset glaucoma while on drug therapy."
    ],
    correct: 0,
    explanation: "Acetaminophen toxicity causes severe liver damage (hepatotoxicity), which clinically manifests as jaundice.",
    memory: "ACETAMINOPHEN = LIVER. Liver failure = JAUNDICE (yellow skin/eyes)."
  },
  {
    num: 21,
    topic: "Community Health",
    text: "The role of a nurse in social change is",
    options: [
      "drive the change",
      "increase partnerships to enhance health",
      "educate people on need for change",
      "deliver the change to the community"
    ],
    correct: 2,
    explanation: "Nurses play a key role in educating the community to drive positive social and health changes.",
    memory: "Education is the catalyst for social change."
  },
  {
    num: 22,
    topic: "Fundamentals",
    text: "The right to emergency care for every human being denotes that",
    options: [
      "Any person should be given the best health care possible by the most qualified practitioner available",
      "Any person should be allowed to access health care at the place of their own choosing during an emergency situation",
      "A patient has a right to be admitted and taken care off by every hospital within the country as long as it is an emergency case",
      "A patient should not be turned away if there is clear evidence of need for emergency care"
    ],
    correct: 3,
    explanation: "Healthcare facilities must provide initial stabilizing treatment for true emergencies and cannot simply turn patients away.",
    memory: "EMERGENCY RIGHT = NO TURNING AWAY."
  },
  {
    num: 23,
    topic: "Microbiology",
    text: "You are educating the community on storage of food. You are aware that the following microorganism can cause spoilage of refrigerated and frozen food:-",
    options: ["Physchophiles", "Mesophiles", "Thermophiles", "Hyperthermophiles"],
    correct: 0,
    explanation: "Psychrophiles are cold-loving bacteria that can grow and cause spoilage at refrigeration temperatures.",
    memory: "PSYCHO-philes = Crazy enough to love the COLD fridge."
  },
  {
    num: 24,
    topic: "Medical-Surgical",
    text: "A nurse is performing a head-to-toe assessment on a patient. Which of the following findings should the nurse prioritize for further evaluation?",
    options: [
      "Dry, flaky skin on the patient's elbows",
      "A small, brown mole on the patient's back",
      "Irregular heart rate with occasional skipped beats",
      "Slight yellowing of the patient's sclera"
    ],
    correct: 2,
    explanation: "An irregular heart rate affects circulation (ABCs) and requires immediate evaluation for potentially life-threatening arrhythmias.",
    memory: "ABCs first: Airway, Breathing, CIRCULATION (heart rate)."
  },
  {
    num: 25,
    topic: "Anatomy",
    text: "Which of the following statements is true of neuroglia:-",
    options: [
      "They are the cells that link motor neurons to sensory neurons",
      "It is the non-cellular material that lies between neurons",
      "They have only one dendrite and one axon",
      "They produce the myelin sheath"
    ],
    correct: 3,
    explanation: "Neuroglia (like Schwann cells and oligodendrocytes) support neurons and produce the insulating myelin sheath.",
    memory: "GLIA = GLUE. They support neurons and wrap them in myelin."
  },
  {
    num: 26,
    topic: "Fundamentals",
    text: "The four stages that teams typically go through are:",
    options: [
      "Forming, storming, norming, and excelling",
      "Conforming, storming, norming, and performing",
      "Forming, storming, ignoring, and performing",
      "Forming, storming, norming, and performing"
    ],
    correct: 3,
    explanation: "Tuckman's stages of group development are Forming, Storming, Norming, and Performing.",
    memory: "Form -> Storm -> Norm -> Perform."
  },
  {
    num: 27,
    topic: "Midwifery",
    text: "Implantation of the fertilized ovum takes place within",
    options: ["The first 7 days", "The first 14 days", "In 5 days, period", "After degeneration of the corpus leutem"],
    correct: 0,
    explanation: "The blastocyst typically implants into the uterine lining around 6 to 7 days after fertilization.",
    memory: "IMPLANTATION = DAY 7. It takes a week to travel down the tube."
  },
  {
    num: 28,
    topic: "Pharmacology",
    text: "A patient receiving nitroprusside begun manifesting headache, distant heart sound, imperceptible pulses, and shallow breathing. The nurse knows that these are signs of?",
    options: ["Reflex tachycardia", "Hypothyroidism", "Cyanide toxicity", "Severe alteration of blood pressure"],
    correct: 2,
    explanation: "Nitroprusside metabolism produces cyanide. Prolonged use or high doses can lead to fatal cyanide toxicity.",
    memory: "Nitroprusside = Cyanide risk."
  },
  {
    num: 29,
    topic: "Paediatric",
    text: "You are educating mothers on developmental milestones. At what age will you advise them to start giving their babies’ finger foods?",
    options: ["8 months", "12 months", "4 months", "18 months"],
    correct: 0,
    explanation: "Around 8-9 months, babies develop the pincer grasp, allowing them to safely pick up and eat small finger foods.",
    memory: "8 months = Pincer grasp = Finger foods."
  },
  {
    num: 30,
    topic: "Fundamentals",
    text: "Which of the following ethical principle refers to duty not to harm",
    options: ["Beneficence", "Nonmaleneficence", "Fidelity", "Veracity"],
    correct: 1,
    explanation: "Nonmaleficence is the ethical obligation to 'do no harm' to patients.",
    memory: "NON-MALEFICENCE = NON-MALICIOUS = DO NO HARM."
  },
  {
    num: 31,
    topic: "Community Health",
    text: "Sub-county hospitals are categorized under the following level in the hierarchy of health services",
    options: ["Level I", "Level II", "Level III", "Level IV"],
    correct: 3,
    explanation: "In the Kenyan health system, Level IV facilities are designated as Sub-County Hospitals.",
    memory: "Level 4 = Sub-County Hospital."
  },
  {
    num: 32,
    topic: "Fundamentals",
    text: "Which of the following actions should a nurse take to use a wide base support when transferring a client to a chair?",
    options: [
      "Bend at the waist and place arms under client’s arms and lift",
      "Tighten their pelvic muscles",
      "Spread his/her feet apart",
      "Face the client, bend at the knee place the arms at the client’s forearms and lift the client."
    ],
    correct: 2,
    explanation: "Spreading the feet apart creates a wider base of support, improving stability and body mechanics during transfers.",
    memory: "Wide base = Feet apart = Better balance."
  },
  {
    num: 33,
    topic: "Microbiology",
    text: "The non-motile organisms that live parasitically within the cells of the host are known as:-",
    options: ["Sporozoa", "Ciliata", "Mastigophora", "Rhizopoda"],
    correct: 0,
    explanation: "Sporozoa (e.g., Plasmodium) are non-motile, intracellular parasites.",
    memory: "SPOROZOA = SPORES. They don't have legs or tails to move."
  },
  {
    num: 34,
    topic: "Community Health",
    text: "The following are the major occupational diseases caused by exposure to allergens",
    options: ["Cancer", "Gastrointestinal diseases", "Respiratory diseases", "Neurological diseases"],
    correct: 2,
    explanation: "Occupational exposure to allergens (dust, chemicals) most commonly causes respiratory diseases like occupational asthma.",
    memory: "Allergens in the air = Respiratory problems."
  },
  {
    num: 35,
    topic: "Community Health",
    text: "The following is the most effective method of large scale treatment of drinking water",
    options: ["Filtration", "Boiling", "Fluoridation", "Chlorination"],
    correct: 3,
    explanation: "Chlorination is highly effective, scalable, and provides residual disinfection in the water supply.",
    memory: "CHLORINE = CITY WATER. Cheap and effective at scale."
  },
  {
    num: 36,
    topic: "Fundamentals",
    text: "The BEST description of group dynamics is:",
    options: [
      "The way groups determine member roles",
      "The measured level of group participation",
      "The way groups choose a leader",
      "The way group members interact and respond to change"
    ],
    correct: 3,
    explanation: "Group dynamics refers to the complex interactions, behaviors, and processes that occur between members of a group.",
    memory: "Dynamics = Interaction and change."
  },
  {
    num: 37,
    topic: "Pharmacology",
    text: "What advice would you give to a client receiving theophylline?",
    options: [
      "Limit intake of strawberries and avocado",
      "Limit intake of Butter and cheese",
      "Increase intake of Hot tea and cocoa",
      "Limit intake of Hot tea and cocoa"
    ],
    correct: 3,
    explanation: "Theophylline is a stimulant. Caffeine in tea and cocoa can compound its effects and increase the risk of toxicity.",
    memory: "Theophylline + Caffeine = Too much stimulation."
  },
  {
    num: 38,
    topic: "Fundamentals",
    text: "Communication that takes place within a person is:-",
    options: ["Interpersonal communication", "Inside communication", "Self-conversation", "Intrapersonal communication"],
    correct: 3,
    explanation: "Intrapersonal communication is internal dialogue, self-talk, and processing.",
    memory: "INTRA = WITHIN. INTER = BETWEEN."
  },
  {
    num: 39,
    topic: "Law",
    text: "“Let me go to tat house, this stupid wife will know me by my names, I will kill that woman” if this statement is made by a client the nurse should",
    options: [
      "Report the scenario to the authorities",
      "Deem the patient to be mentally unstable",
      "Advice the patient to be calm and allow them to go home",
      "Laugh with the patient since this is very funny and unrealistic"
    ],
    correct: 0,
    explanation: "A direct threat of harm to a specific individual (Tarasoff warning) mandates breaching confidentiality to warn the victim and authorities.",
    memory: "Duty to Warn overrides confidentiality when lives are at risk."
  },
  {
    num: 40,
    topic: "Medical-Surgical",
    text: "Mechanical ventilation is indicated in which of the following conditions?",
    options: [
      "Acute asthmatic attack",
      "Stable chronic obstructive pulmonary disease",
      "Following minor surgeries",
      "Neuromuscular diseases"
    ],
    correct: 3,
    explanation: "Severe neuromuscular diseases (e.g., Guillain-Barré, ALS) can paralyze respiratory muscles, requiring mechanical ventilation.",
    memory: "If muscles can't pump the lungs, the machine must do it."
  },
  {
    num: 41,
    topic: "Anatomy",
    text: "In which phase of mitosis do centromeres of chromatid pairs line up at the metaphase plate:-",
    options: ["Telophase", "Anaphase", "Metaphase", "Prophase"],
    correct: 2,
    explanation: "During metaphase, chromosomes align in the middle (equator) of the cell.",
    memory: "M for Metaphase = M for Middle."
  },
  {
    num: 42,
    topic: "Pharmacology",
    text: "A pregnant woman needs a lipid lowering agent. What would be best class of lipid-lowering agent for pregnant women?",
    options: [
      "HMG-CoA reductase inhibitor",
      "Bile acid sequestrants",
      "Cholesterol absorption inhibitors",
      "Phosphodiesterase inhibitors"
    ],
    correct: 1,
    explanation: "Bile acid sequestrants are not absorbed systemically, making them the safest lipid-lowering option during pregnancy. Statins are teratogenic.",
    memory: "Bile acid sequestrants stay in the gut, keeping the baby safe."
  },
  {
    num: 43,
    topic: "Anatomy",
    text: "What is the difference between an exocrine gland and an endocrine gland:-",
    options: [
      "An endocrine gland secretes neurotransmitters while an exocrine gland does not",
      "An endocrine gland secretes via a tube to the destination, an exocrine gland does not",
      "An exocrine gland secretes into the blood, an endocrine gland does not",
      "An endocrine gland secretes into the blood, an exocrine gland does not"
    ],
    correct: 3,
    explanation: "Endocrine glands are ductless and secrete hormones directly into the blood. Exocrine glands secrete into ducts.",
    memory: "ENdocrine = INto the blood. EXocrine = EXit via ducts."
  },
  {
    num: 44,
    topic: "Medical-Surgical",
    text: "The most appropriate therapeutic diet for a patient with severe burns is",
    options: ["High calorie diet", "High protein diet", "High calorie high protein diet", "Low salt diet"],
    correct: 2,
    explanation: "Burns cause massive hypermetabolism and tissue loss, requiring high calories for energy and high protein for tissue repair.",
    memory: "BURNS = CALORIES for the engine + PROTEIN for the bricks."
  },
  {
    num: 45,
    topic: "Fundamentals",
    text: "To promote correct anatomic alignment in a supine patient, the nurse should",
    options: [
      "Place the patient’s feet in dorsiflexion",
      "Place a pillow under the patient’s knees",
      "Hyperextend the patient’s neck",
      "Adduct the patient’s shoulders"
    ],
    correct: 0,
    explanation: "Maintaining feet in dorsiflexion (using a footboard) prevents foot drop (plantar flexion contracture).",
    memory: "Dorsiflexion keeps the feet pointing up, preventing foot drop."
  },
  {
    num: 46,
    topic: "Microbiology",
    text: "An example of a mould-like fungi is:-",
    options: ["Candida", "Cryptococcus", "Trichphyton", "Coccidioides"],
    correct: 2,
    explanation: "Trichophyton is a dermatophyte (mold) that causes skin infections like ringworm. Candida and Cryptococcus are yeasts.",
    memory: "Trichophyton = Mold. Candida = Yeast."
  },
  {
    num: 47,
    topic: "Paediatric",
    text: "The following is a key aspect to consider when assessing the breathing of a pediatric:-",
    options: [
      "The capillary refill time",
      "Cyanosis both central and peripheral",
      "Patency of the airway",
      "Alertness of the pediatric"
    ],
    correct: 2,
    explanation: "Airway patency is always the first priority (A in ABCs) before assessing breathing effort or circulation.",
    memory: "A comes before B. Airway before Breathing."
  },
  {
    num: 48,
    topic: "Medical-Surgical",
    text: "The nurse’s main priority when caring for a client with hemiplegia is?",
    options: [
      "Educating the patient",
      "Promoting positive self -image",
      "Helping the patient accept the illness",
      "Providing a safe environment"
    ],
    correct: 3,
    explanation: "Hemiplegia (paralysis of one side) creates a high risk for falls and injury. Safety is the top priority.",
    memory: "Paralysis = Fall Risk. Safety First."
  },
  {
    num: 49,
    topic: "Law",
    text: "A nurse who takes pethidine from the storage alone and injects a patient, then there is a severe reaction due to drug overdose can be charged for",
    options: [
      "Malpractices",
      "Failure to follow the dangerous drugs act",
      "Intent to kill",
      "Ignorance with patient safety compromise"
    ],
    correct: 0,
    explanation: "Administering a controlled drug without a prescription or double-checking, leading to harm, constitutes professional malpractice.",
    memory: "Breaking protocol + Causing harm = Malpractice."
  },
  {
    num: 50,
    topic: "Fundamentals",
    text: "“let me give you some of my chicken and pizza, you are a lovely nurse”, if this is said to a nurse the course of action to be taken should be",
    options: [
      "Advice the client to lay still in bed to monitor his vitals",
      "Take the food since she has put a lot of effort towards the patient recovery",
      "Encourage client to share the food through the management",
      "Decline and review the orientation phase of the nurse-client relationship"
    ],
    correct: 3,
    explanation: "Accepting personal gifts or food blurs professional boundaries. The nurse should politely decline and maintain a professional relationship.",
    memory: "Maintain boundaries. Polite decline."
  },
  {
    num: 51,
    topic: "Fundamentals",
    text: "The following is considered the 5th vital sign",
    options: ["Blood pressure", "Temperature", "Oxygen saturation", "Pain"],
    correct: 3,
    explanation: "Pain is routinely assessed alongside the four standard vital signs to ensure adequate pain management.",
    memory: "TPR, BP, and PAIN."
  },
  {
    num: 52,
    topic: "Paediatric",
    text: "The following statement about HIV transmission is TRUE",
    options: [
      "Exclusive breastfeeding does not pose any risk for transmission to the baby",
      "Complementary feeding before six months does not pose any risk for transmission of the disease",
      "Maternal adherence to antiretroviral therapy does not affect transmission risk",
      "Periodic testing of the baby using highly sensitive methods is required for effective monitoring during breastfeeding"
    ],
    correct: 3,
    explanation: "Breastfeeding carries a transmission risk, so exposed infants must be regularly tested (e.g., via PCR) to monitor their status.",
    memory: "Breastfeeding + HIV = Regular testing required."
  },
  {
    num: 53,
    topic: "Paediatric",
    text: "In management of a 9 months old baby weighing 9kgs who is having convulsions you will administer:-",
    options: [
      "Per rectal Diazepam 4.5mg",
      "IV Diazepam 4.5mg",
      "Per rectal Diazepam 2.7mg",
      "IM Diazepam 2.7mg"
    ],
    correct: 0,
    explanation: "The dose for per rectal diazepam is typically 0.5 mg/kg. For a 9 kg baby, 0.5 x 9 = 4.5 mg. Rectal administration is preferred when IV access is difficult.",
    memory: "0.5 mg/kg for rectal diazepam."
  },
  {
    num: 54,
    topic: "Fundamentals",
    text: "The method of nutritional assessment wherein the patient documents all foods taken during a one-week period is called",
    options: ["Dietary recall", "Food diary", "Food history", "Dietary survey"],
    correct: 1,
    explanation: "A food diary involves the patient logging everything they eat and drink over a specific period (like a week).",
    memory: "Diary = Writing it down as you go."
  },
  {
    num: 55,
    topic: "Nutrition",
    text: "Select a true statement regarding energy metabolism",
    options: [
      "Proteins are metabolized before fats as an alternative energy sources",
      "Carbohydrate molecules generate more calories compared to protein molecule",
      "Fats have equal calorie density to carbohydrates",
      "Carbohydrates and proteins have equal calorie density"
    ],
    correct: 3,
    explanation: "Both carbohydrates and proteins provide approximately 4 kcal per gram. Fats provide 9 kcal per gram.",
    memory: "Carbs = 4, Protein = 4, Fat = 9."
  },
  {
    num: 56,
    topic: "Paediatric",
    text: "Which one of the following will you pick as a red flag in an 11 months old baby:-",
    options: [
      "Cannot walk holding furniture",
      "Cannot stand alone",
      "Cannot sit alone steadily",
      "Cannot pick up small bits of food and transfer them to the mouth"
    ],
    correct: 2,
    explanation: "A baby should be able to sit unsupported by 6-8 months. Inability to sit steadily at 11 months is a significant developmental delay (red flag).",
    memory: "Sitting comes before crawling and walking. 11 months is way too late."
  },
  {
    num: 57,
    topic: "Community Health",
    text: "Food safety and hygiene in Kenya is regulated by",
    options: ["Nurses Act", "Community Health Act", "Public Health Act", "Food safety and hygiene Act"],
    correct: 2,
    explanation: "The Public Health Act contains provisions for sanitation, food safety, and prevention of infectious diseases.",
    memory: "Public Health Act protects the public's food and water."
  },
  {
    num: 58,
    topic: "Anatomy",
    text: "Which hormone has the element iodine as part of its molecule:-",
    options: ["Calcitonin", "Haemoglobin", "Thyroxine", "Parathyroid hormone"],
    correct: 2,
    explanation: "Thyroxine (T4) and Triiodothyronine (T3) are thyroid hormones that require iodine for their synthesis.",
    memory: "Iodine = Thyroid."
  },
  {
    num: 59,
    topic: "Midwifery",
    text: "The division of medicine that deals with abnormal development of the fetus is:-",
    options: ["Embryology", "Pathology", "Teratology", "Microbiology"],
    correct: 2,
    explanation: "Teratology is the study of congenital abnormalities and abnormal embryonic/fetal development.",
    memory: "Teratogens cause defects. Teratology studies them."
  },
  {
    num: 60,
    topic: "Medical-Surgical",
    text: "The nurse is providing wound care to a patient with a Stage II pressure injury. Which of the following wound descriptions is consistent with this classification?",
    options: [
      "Full-thickness skin loss with damage to subcutaneous tissue.",
      "Red, non-blanchable area of intact skin.",
      "Shallow open ulcer with a red-pink wound bed.",
      "Open wound with visible bone or tendon."
    ],
    correct: 2,
    explanation: "Stage II pressure injuries present as partial-thickness skin loss involving the epidermis and/or dermis, appearing as a shallow open ulcer.",
    memory: "Stage I = Red intact. Stage II = Shallow open. Stage III = Deep to fat. Stage IV = Bone/Muscle."
  },
  {
    num: 61,
    topic: "Law",
    text: "If a nurse is faced with a situation where a patient requires an urgent surgery yet upon calling the doctor, he is not able to attend to the patient, the nurse decides to ahead and save the patients life. This scenario could be interpreted as",
    options: ["Lack of professionalism", "Malpractice", "Patient negligence", "Act of good faith"],
    correct: 1,
    explanation: "Performing surgery is outside the nursing scope of practice. Doing so, even with good intentions, constitutes malpractice.",
    memory: "Good intentions don't excuse practicing outside your scope."
  },
  {
    num: 62,
    topic: "Anatomy",
    text: "What is the primary function of the cerebellum:-",
    options: [
      "It regulates such things as body temperature, water balance and emotional responses",
      "It refines/adjusts learned motor movements so that they are performed smoothly.",
      "It controls our automatic functions such as breathing, digestion and cardiovascular functions",
      "It is the origin of our conscious thoughts and intellectual functions"
    ],
    correct: 1,
    explanation: "The cerebellum coordinates voluntary movements, posture, and balance, ensuring smooth motor execution.",
    memory: "Cerebellum = Balance and smooth movement."
  },
  {
    num: 63,
    topic: "Pharmacology",
    text: "A patient with a wound infection is prescribed an antibiotic. Which of the following statements by the patient demonstrates correct understanding of antibiotic therapy?",
    options: [
      "\"I should take the antibiotic until the pain goes away.\"",
      "\"If I start feeling better, I can stop taking the antibiotic early.\"",
      "\"I will take the antibiotic exactly as prescribed for the full course.\"",
      "\"I can save any leftover antibiotic pills in case I have another infection.\""
    ],
    correct: 2,
    explanation: "Completing the full course of antibiotics is crucial to fully eradicate the infection and prevent antibiotic resistance.",
    memory: "Always finish the bottle."
  },
  {
    num: 64,
    topic: "Paediatric",
    text: "A principle of growth and development is:-",
    options: [
      "Its unpredictable",
      "Body organs grow at the same rate",
      "Each stage of growth and development is affected by the preceding types of development",
      "It’s a non-continuous process"
    ],
    correct: 2,
    explanation: "Development is sequential. Mastery of skills in one stage forms the foundation for the next stage.",
    memory: "You have to crawl before you can walk."
  },
  {
    num: 65,
    topic: "Microbiology",
    text: "Facultative anaerobes:-",
    options: [
      "Die when exposed to oxygen",
      "Prefer an increase of amount of carbon and just a trace of oxygen",
      "Grow either in the presence or absence of oxygen",
      "Require an environment of free oxygen"
    ],
    correct: 2,
    explanation: "Facultative anaerobes can survive and grow with or without oxygen, though they often grow better with it.",
    memory: "Facultative = Flexible. They can do both."
  },
  {
    num: 66,
    topic: "Nutrition",
    text: "The quality of proteins is determined by",
    options: [
      "How digestible they are",
      "The variety of non-essential amino acids in the protein",
      "The Variety of essential amino acids in the protein",
      "The calorie density of the protein"
    ],
    correct: 2,
    explanation: "High-quality (complete) proteins contain all nine essential amino acids in adequate proportions.",
    memory: "Quality = Essential Amino Acids."
  },
  {
    num: 67,
    topic: "Fundamentals",
    text: "The ability of a person to ignore all the things present in a different culture and lender the useless is a good example of",
    options: ["Cultural relativism", "Ethnocentrism", "Cultural differences", "tribalism"],
    correct: 1,
    explanation: "Ethnocentrism is the belief that one's own culture is superior, leading to the dismissal or devaluation of other cultures.",
    memory: "Ethno (culture) + Centrism (center) = My culture is the center of the universe."
  },
  {
    num: 68,
    topic: "Fundamentals",
    text: "If a nurse shows to the clinical area with bright colored hair, painted long nails and a mini- skirt. Which of the following is this nurse missing",
    options: [
      "The code of ethics",
      "The fundamental roles of a nurse",
      "The professional responsibilities of nurse",
      "The personal attributes of a nurse"
    ],
    correct: 3,
    explanation: "Professional appearance and grooming are key personal attributes expected of a nurse to maintain patient trust and hygiene standards.",
    memory: "Appearance is a personal attribute."
  },
  {
    num: 69,
    topic: "Nutrition",
    text: "The following statement regarding parenteral nutrition is true",
    options: [
      "Total parenteral nutrition can be administered on a peripheral vein",
      "Parenteral nutrition can be used in a home setting",
      "Parenteral nutrition should not be used alongside enteral nutrition",
      "Change to enteral nutrition is advised as soon as feasible in patients on parenteral nutrition"
    ],
    correct: 3,
    explanation: "Transitioning to enteral nutrition as soon as possible is advised to maintain gut integrity and prevent atrophy.",
    memory: "If the gut works, use it."
  },
  {
    num: 70,
    topic: "Fundamentals",
    text: "The body of nursing that is responsible for enhancing international nurses’ partnership and relations within Kenya is",
    options: [
      "The nursing council of Kenya",
      "The international council of nurses",
      "The nursing and midwives’ council",
      "The National nurse’s association of Kenya"
    ],
    correct: 3,
    explanation: "The National Nurses Association of Kenya (NNAK) is the professional body that links Kenyan nurses with international bodies like the ICN.",
    memory: "NNAK handles professional relations and partnerships."
  },
  {
    num: 71,
    topic: "Paediatric",
    text: "For a child who has attained 7 months of age and still not able to sit the best course of action would be",
    options: [
      "Encourage the child to sit and reassure the mother",
      "Book the child for a pediatric review",
      "Supplement calcium and vitamin D for the baby",
      "Note it as a delay in milestone and notify the physician"
    ],
    correct: 0,
    explanation: "Sitting unsupported typically develops between 6-8 months. At 7 months, it's not yet a definitive delay, so reassurance and encouragement are appropriate.",
    memory: "7 months is still within the normal window for sitting."
  },
  {
    num: 72,
    topic: "Community Health",
    text: "Fluorine is a common cause of teeth damage in children because",
    options: [
      "Fluoride replaces calcium in teeth when taken in large quantities",
      "Children are not able to eliminate fluoride",
      "Fluoride is not a requirement for healthy teeth in children",
      "Fluoride corrodes the teeth because of inflammatory reaction when taken in large quantities"
    ],
    correct: 0,
    explanation: "Excess fluoride during tooth development causes fluorosis, where fluoride disrupts enamel formation and replaces calcium, leading to mottled, brittle teeth.",
    memory: "Too much fluoride = Fluorosis (mottled teeth)."
  },
  {
    num: 73,
    topic: "Anatomy",
    text: "The following is true about mitosis:-",
    options: [
      "It only occurs in the production of sperms and ovum",
      "Division occurs twice",
      "Four daughter cells are produced",
      "Daughter cells produced are diploid"
    ],
    correct: 3,
    explanation: "Mitosis produces two identical diploid somatic cells. Meiosis produces four haploid gametes.",
    memory: "Mitosis = Diploid (2n). Meiosis = Haploid (n)."
  },
  {
    num: 74,
    topic: "Anatomy",
    text: "Where is the autonomic control centre for most of body homeostasis located:-",
    options: ["In the limbic system", "In the brainstem", "In the hypothalamus", "In the cerebellum"],
    correct: 2,
    explanation: "The hypothalamus is the master control center for autonomic functions and homeostasis (temperature, thirst, hunger).",
    memory: "Hypothalamus = Homeostasis."
  },
  {
    num: 75,
    topic: "Community Health",
    text: "Refrigeration preserves food by",
    options: [
      "Significantly slowing down multiplication of microorganisms in food due to low temperatures",
      "Sterilizing the food of microbe due to low temperatures",
      "Slowing down chemical reaction of food components due to low temperatures",
      "Protecting food from entry of microorganisms"
    ],
    correct: 0,
    explanation: "Cold temperatures inhibit the metabolic enzymes of most bacteria, significantly slowing their growth and reproduction.",
    memory: "Cold slows them down, it doesn't kill them."
  },
  {
    num: 76,
    topic: "Microbiology",
    text: "Bacteria can be classified in accordance to their shape. Cocci shaped bacteria:",
    options: ["Have twisted rod-shaped cells", "Are curved", "Are relatively straight", "Are spherical"],
    correct: 3,
    explanation: "Cocci are spherical or round bacteria (e.g., Staphylococcus, Streptococcus). Bacilli are rod-shaped.",
    memory: "Cocci = Circle. Bacilli = Bar."
  },
  {
    num: 77,
    topic: "Pharmacology",
    text: "A nurse is teaching a client on the use of a respiratory inhaler. Which action by the client indicates a need for further teaching.",
    options: [
      "Remove the cap and shakes well before use",
      "Press the canister down with finger ass he breaths in",
      "Inhale the mist and exhales within 5 seconds",
      "Waits 1 to 2 minutes between puffs if more than one puff has been prescribed."
    ],
    correct: 2,
    explanation: "The patient should hold their breath for at least 10 seconds after inhaling to allow the medication to settle in the lungs. Exhaling too quickly wastes the dose.",
    memory: "Hold it in for 10 seconds."
  },
  {
    num: 78,
    topic: "Medical-Surgical",
    text: "A person has AIDS when which of these occurs?",
    options: [
      "Exposure to HIV",
      "HIV antibodies are found in the blood",
      "The CD4+ count is lower than 200 or opportunistic infections develop in an HIV- infected person",
      "A person has HIV for 5 years"
    ],
    correct: 2,
    explanation: "AIDS is the advanced stage of HIV infection, defined clinically by a CD4 count <200 cells/mm³ or the presence of an AIDS-defining opportunistic infection.",
    memory: "AIDS = CD4 < 200 or Opportunistic Infection."
  },
  {
    num: 79,
    topic: "Fundamentals",
    text: "Blood pressure measurement is an important part of the patient’s database. It is considered to be?",
    options: ["The basis for the nursing diagnosis", "Subjective data", "Objective data", "An indicator of patient’s wellbeing"],
    correct: 2,
    explanation: "Blood pressure is a measurable, observable sign, making it objective data, unlike symptoms reported by the patient (subjective data).",
    memory: "Objective = Observable/Measurable. Subjective = Spoken by patient."
  },
  {
    num: 80,
    topic: "Pharmacology",
    text: "Mrs. Smith, a 40-year-old known asthmatic client is admitted due to hypertensive episode. Which of the following drugs would be safest to give?",
    options: ["Nebivolol", "Timolol", "Propranolol", "Atenolol"],
    correct: 3,
    explanation: "Atenolol is a cardioselective beta-1 blocker. Non-selective beta-blockers (like Propranolol and Timolol) block beta-2 receptors in the lungs, triggering fatal bronchospasm in asthmatics.",
    memory: "Atenolol = A to M are cardioselective (safe for asthma)."
  },
  {
    num: 81,
    topic: "Community Health",
    text: "Select the most appropriate statement about family health nursing",
    options: [
      "Family health nursing considers the health of the family as a unit in addition to health needs of each individual in the family",
      "Family health nursing considers health of the family and health of the individual as one",
      "Family health nursing considers it impossible to meet individual health needs without family involvement",
      "Family health nursing considers family as the only component of a functional society"
    ],
    correct: 0,
    explanation: "Family nursing treats the family as both the context for individual health and as the client itself (the family unit).",
    memory: "Family nursing = Individual + Family Unit."
  },
  {
    num: 82,
    topic: "Fundamentals",
    text: "A nurse is documenting a patient's wound dressing change. Which of the following components must be included in the wound care documentation?",
    options: [
      "Type of dressing used, wound appearance, and patient's pain level.",
      "Patient's vital signs, wound location, and date of the next dressing change.",
      "Physician's name, wound dimensions, and patient's insurance information.",
      "Patient's allergies, wound drainage, and names of other nurses present."
    ],
    correct: 0,
    explanation: "Proper wound documentation must include the current state of the wound (appearance), the intervention performed (dressing type), and the patient's response (pain level).",
    memory: "Document what you saw, what you did, and how the patient felt."
  },
  {
    num: 83,
    topic: "Fundamentals",
    text: "When a counselor listens and is keen to pick nonverbal communication of the client he is:",
    options: ["Empathetic", "Honest", "Non-judgmental", "Observant"],
    correct: 3,
    explanation: "Being observant involves actively watching and noting the client's body language, facial expressions, and other nonverbal cues.",
    memory: "Observant = Observing the unspoken."
  },
  {
    num: 84,
    topic: "Pharmacology",
    text: "Which of the following substances would alert the nurse for an increased risk of bleeding for a patient taking clopidogrel?",
    options: ["Chamomile tea", "Orange juice", "Candied mushrooms", "Peanuts"],
    correct: 0,
    explanation: "Chamomile (along with garlic, ginkgo, and ginseng) has mild antiplatelet properties and can increase bleeding risk when combined with clopidogrel.",
    memory: "Herbal teas like Chamomile can thin the blood."
  },
  {
    num: 85,
    topic: "Medical-Surgical",
    text: "Opportunistic infections should be first treated before initiation of antiretroviral therapy because",
    options: [
      "It reduces risk for immune reconstitution syndrome",
      "It increases sensitivity of the virus to ARVs",
      "It reduces the side effects of antiretroviral therapy",
      "It minimizes drug interactions that would occur if the infections were treated alongside ART"
    ],
    correct: 0,
    explanation: "Starting ART while an active opportunistic infection is present can trigger Immune Reconstitution Inflammatory Syndrome (IRIS), a dangerous hyper-inflammatory response.",
    memory: "Treat the infection first to avoid the IRIS storm."
  },
  {
    num: 86,
    topic: "Fundamentals",
    text: "Using Maslow’s hierarchy of needs, the nurse assigns priority to which client need?",
    options: ["Elimination", "Security", "Safety", "belonging"],
    correct: 0,
    explanation: "Elimination is a basic physiological need (base of the pyramid), which must be met before safety, security, or belonging needs.",
    memory: "Physiological needs (Air, Water, Food, Elimination) always come first."
  },
  {
    num: 87,
    topic: "Anatomy",
    text: "What effect does aldosterone hormone have in the body:-",
    options: [
      "It causes glucose to be absorbed from the blood",
      "It cause Na + to be absorbed in the kidneys",
      "It causes Ca ++ to be absorbed from the gut",
      "It causes K + to be absorbed from the fi ltrate"
    ],
    correct: 1,
    explanation: "Aldosterone acts on the kidneys to increase sodium (and water) reabsorption and increase potassium excretion.",
    memory: "Aldosterone = ALl the Sodium (keeps Na+, dumps K+)."
  },
  {
    num: 88,
    topic: "Anatomy",
    text: "Which of the following substances CANNOT pass through the “blood-brain barrier”:-",
    options: ["steroid hormones", "O 2 molecules", "Alcohol", "potassium ions"],
    correct: 3,
    explanation: "The blood-brain barrier is highly selective. Lipid-soluble substances pass easily. Water-soluble ions like K+ require specific transporters and are tightly regulated.",
    memory: "Ions (like K+) are blocked to keep brain electricity stable."
  },
  {
    num: 89,
    topic: "Community Health",
    text: "The main goal of home based care in management of nutrition needs is to",
    options: [
      "Assess patients’ nutritional needs to establish a database.",
      "Work with the patient to develop a strict nutrition care plan.",
      "Supply the patient with adequate food stuff that they may need.",
      "Improve food intake by diagnosing and treating any sign and symptoms that interfere with food intake."
    ],
    correct: 3,
    explanation: "Home-based nutritional care focuses on practical interventions to overcome barriers to eating (e.g., treating nausea, mouth sores) to improve actual intake.",
    memory: "Fix the barriers to eating first."
  },
  {
    num: 90,
    topic: "Paediatric",
    text: "You are assessing a 3 months old baby. You expect that:-",
    options: [
      "She can sit with adequate support",
      "She can roll over from front to back",
      "She can hold the head steady",
      "She can pull feet up to mouth when supine"
    ],
    correct: 2,
    explanation: "By 3 months, an infant should have developed sufficient neck muscle strength to hold their head steady when held upright.",
    memory: "3 months = Head control."
  },
  {
    num: 91,
    topic: "Microbiology",
    text: "Which of the following microorganisms are flagellates:-",
    options: [
      "Candida, Entamoeba, Trypanasoma",
      "Trypanasoma, Trichomomonas, Giardia",
      "Giardia, Candida, Trypanasoma",
      "Entamoeba, Giardia, Candida"
    ],
    correct: 1,
    explanation: "Trypanosoma, Trichomonas, and Giardia are all protozoans that move using whip-like structures called flagella.",
    memory: "Flagellates have tails to swim."
  },
  {
    num: 92,
    topic: "Nutrition",
    text: "A patient suffering liver disease should take the following type of diet",
    options: [
      "Protein-restricted diet",
      "Calorie- restricted diet",
      "Fat-restricted diet",
      "Clear liquid diet"
    ],
    correct: 0,
    explanation: "In severe liver disease, the liver cannot process ammonia (a byproduct of protein breakdown) into urea, so protein intake must be carefully managed/restricted.",
    memory: "Bad liver = Can't handle protein waste (ammonia)."
  },
  {
    num: 93,
    topic: "Fundamentals",
    text: "Select the statement that BEST describes health",
    options: [
      "It is the absence of disease or infirmity",
      "It is the physical well-being of an individual",
      "Health is a continuum between states of illness and well-being",
      "Health is a fixed state of physical and social well-being"
    ],
    correct: 2,
    explanation: "Health is a dynamic continuum between states of optimal well-being and severe illness, not just the absence of disease.",
    memory: "Health is a journey, not a fixed destination."
  },
  {
    num: 94,
    topic: "Community Health",
    text: "The following health management function is performed by the county government",
    options: [
      "Development of hospital infrastructure under their jurisdiction",
      "Regulation of health education under their jurisdiction",
      "Regulation of quality of drugs available to their hospitals",
      "Provision of social health insurance to their residents"
    ],
    correct: 0,
    explanation: "In devolved health systems (like Kenya), county governments are responsible for managing and developing local healthcare infrastructure (Level 1-4 facilities).",
    memory: "Counties build and run the local hospitals."
  },
  {
    num: 95,
    topic: "Anatomy",
    text: "What effect does parathyroid hormone have:-",
    options: [
      "It increases plasma Ca 2+ concentration",
      "It decreases plasma Ca 2+ concentration",
      "It increases the rate of ATP formation",
      "It stimulates the thyroid gland to produce thyroxine"
    ],
    correct: 0,
    explanation: "PTH is released when blood calcium is low. It increases plasma calcium by stimulating bone resorption and renal calcium reabsorption.",
    memory: "PTH = Puts calcium in The blood."
  },
  {
    num: 96,
    topic: "Fundamentals",
    text: "One of the following is classified as a fundamental role of a nurse",
    options: ["To promote health", "To enhance equity", "To educate patients", "To build confidence"],
    correct: 0,
    explanation: "The four fundamental responsibilities of nurses are: to promote health, to prevent illness, to restore health, and to alleviate suffering.",
    memory: "Promote, Prevent, Restore, Alleviate."
  },
  {
    num: 97,
    topic: "Community Health",
    text: "Canning of processed food preserves food over a long period of time because",
    options: [
      "Canning deprives microorganisms in food of suitable conditions to multiply significantly",
      "Canning protects food from entry of microbes from the environment",
      "Processing of food kills all microorganisms in food",
      "Canning preserves food in suitable temperatures"
    ],
    correct: 2,
    explanation: "The canning process involves heating the food to a temperature high enough to kill all microorganisms and spores (commercial sterilization), and sealing it to prevent re-entry.",
    memory: "Canning = Kill everything with heat, then seal it."
  },
  {
    num: 98,
    topic: "Anatomy",
    text: "What is the gap between the plasma membranes of a neuron that conducts an incoming signal and the cell that is going to receive the signal :-",
    options: ["Neuromuscular junction", "Intercellular cleft", "Synaptic cleft", "Intercalated disc"],
    correct: 2,
    explanation: "The synaptic cleft is the microscopic gap between a presynaptic neuron and a postsynaptic cell where neurotransmitters are released.",
    memory: "Synapse = The gap."
  },
  {
    num: 99,
    topic: "Fundamentals",
    text: "Counselor agrees with the client on the number of counseling sessions to be held during",
    options: ["Social stage", "Problem exploration stage", "Interaction stage", "Goal setting stage"],
    correct: 3,
    explanation: "Establishing the framework, including the number of sessions, is part of goal setting and contracting in the counseling process.",
    memory: "Setting the rules is part of setting the goals."
  },
  {
    num: 100,
    topic: "Pharmacology",
    text: "When administering methyl xanthine theophylline, the nurse can expect?",
    options: [
      "Decrease in pulmonary function",
      "Decrease in tidal volume",
      "Increase in pulmonary function",
      "Increase in residual volume"
    ],
    correct: 2,
    explanation: "Theophylline is a bronchodilator. It relaxes smooth muscles in the airways, leading to increased pulmonary function and easier breathing.",
    memory: "Theophylline opens the airways."
  },
  {
    num: 101,
    topic: "Fundamentals",
    text: "“I do not understand what you are explaining to me, it seems my English requires a little sharpening” if this statement comes from a patient the nurse should",
    options: [
      "Allow a relative in the room to interpreter for the patient",
      "Increase their volume so that the patient is able to hear them",
      "Look for a fellow college who understands the patient’s native language to interpret to them",
      "Ask for an interpreter to be availed before the conversation is carried on"
    ],
    correct: 3,
    explanation: "Using professional medical interpreters is the standard of care to ensure accurate communication and patient safety.",
    memory: "Always use a professional interpreter, not family."
  },
  {
    num: 102,
    topic: "Pharmacology",
    text: "Antiretroviral therapy affects clinical progression of HIV by: -",
    options: [
      "Eradication of the HIV virus from the human body",
      "Eradication of opportunistic infections form the immunosuppressed patient",
      "Slowing down viral multiplication rates allowing recovery of immune function",
      "Eliminating viral mutations allowing the immune function to effectively kill HIV viruses"
    ],
    correct: 2,
    explanation: "ART suppresses viral replication, which lowers the viral load, allowing the CD4 cells to replenish and the immune system to recover. It does not eradicate the virus.",
    memory: "ART stops the virus from copying itself."
  },
  {
    num: 103,
    topic: "Fundamentals",
    text: "A nurse is assisting an older adult patient with bathing. Which of the following actions should the nurse prioritize to promote patient safety?",
    options: [
      "Using warm water and mild soap.",
      "Assessing the patient's skin for any changes.",
      "Allowing the patient to stand while showering.",
      "Providing non-slip mats in the bathtub or shower."
    ],
    correct: 3,
    explanation: "Falls are a major risk for older adults, especially in wet environments. Non-slip mats are a critical safety intervention.",
    memory: "Wet floor + Old patient = Fall risk. Use a mat."
  },
  {
    num: 104,
    topic: "Medical-Surgical",
    text: "All adolescents and adults should be started on antiretroviral therapy when:-",
    options: [
      "The CD4 count is less than 350 cells/mm3 irrespective of WHO clinical stage",
      "At any CD4 count immediately on confirmation of positive diagnosis.",
      "The CD4 count is less than 350 cells/mm3 with WHO stage 3 disease",
      "The CD4 count is less than 500 cells/mm3 irrespective of WHO clinical stage"
    ],
    correct: 1,
    explanation: "Current WHO guidelines recommend 'Test and Treat' – initiating ART in all individuals living with HIV immediately upon diagnosis, regardless of CD4 count.",
    memory: "Test and Treat immediately."
  },
  {
    num: 105,
    topic: "Fundamentals",
    text: "the law of learning was first developed by",
    options: ["Edward Thorndike", "S. bandura", "Ivan Pavlov", "Ibrahim Maslow"],
    correct: 0,
    explanation: "Edward Thorndike formulated the 'Laws of Learning' (Law of Readiness, Law of Exercise, Law of Effect) in behavioral psychology.",
    memory: "Thorndike = Laws of Learning."
  },
  {
    num: 106,
    topic: "Law",
    text: "Which of the following is considered a patient’s right?",
    options: [
      "The right to refuse treatment",
      "The right to euthanasia",
      "The right to ignore hospital regulations",
      "The right to refuse to pay for what he/she feels like it is an inferior service"
    ],
    correct: 0,
    explanation: "Competent patients have the legal and ethical right to refuse any medical treatment, even if it is life-saving.",
    memory: "Autonomy means the right to say no."
  },
  {
    num: 107,
    topic: "Fundamentals",
    text: "social mobility denotes",
    options: [
      "the upward movement of a person within social ranks",
      "the overall movement in social ranks",
      "the undisputed capability of a person to rise in the society",
      "the political influence that helps a person rise through social ranks"
    ],
    correct: 1,
    explanation: "Social mobility refers to the movement of individuals or groups between different social strata or classes, which can be upward, downward, or horizontal.",
    memory: "Mobility = Movement (up, down, or sideways)."
  },
  {
    num: 108,
    topic: "Paediatric",
    text: "An infant who is receiving a cardiac glycoside has an apical pulse of 80b/min. which is the best nursing intervention for this assessment finding?",
    options: [
      "Administer drug as ordered.",
      "Withdraw the drug and notify doctor.",
      "Assess apical pulse every hour for the next five hours",
      "Decrease drug dose and administer."
    ],
    correct: 1,
    explanation: "Cardiac glycosides (like Digoxin) slow the heart rate. In infants, a heart rate <90-100 bpm is considered bradycardia and requires withholding the dose and notifying the physician to prevent toxicity.",
    memory: "Infant HR < 90 = Hold Digoxin."
  }
];
