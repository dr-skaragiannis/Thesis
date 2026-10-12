# 35. LLM-ICS-Attacks — Γλωσσικά Μοντέλα (LLM) και Επιθέσεις σε Βιομηχανικά Συστήματα Ελέγχου (ICS)
### LLM-ICS-Attacks: Introducing LLM Agents into Industrial Control and Emulating Cyberattack Scenarios on the Fischertechnik Training Factory Industry 4.0

## Στοιχεία Έργου
- **Πηγαίος φάκελος:** προς δημιουργία (νέο θέμα, χωρίς υπάρχουσα υλοποίηση)
- **Εξοπλισμός/βάση:** Fischertechnik Training Factory Industry 4.0 (εκπαιδευτικό μοντέλο εργοστασίου: PLC, αισθητήρες, μεταφορικές ταινίες, ρομποτικός βραχίονας)
- **Θεματική περιοχή:** Ασφάλεια βιομηχανικών συστημάτων (OT/ICS), μεγάλα γλωσσικά μοντέλα (LLM) και πράκτορες, σενάρια απειλών, ανίχνευση και απόκριση
- **Τεχνολογίες:** Fischertechnik Training Factory Industry 4.0, PLC/SCADA, πρωτόκολλα OPC UA/Modbus, πράκτορες LLM (τοπικοί ή μέσω API), τηλεμετρία/καταγραφή, προσομοίωση επιθέσεων
- **Ενδεικτικός αριθμός φοιτητών:** 1–2

## Εκφώνηση Διπλωματικής Εργασίας

Τα μεγάλα γλωσσικά μοντέλα αρχίζουν να εμφανίζονται ως πράκτορες παρακολούθησης και υποστήριξης σε βιομηχανικά περιβάλλοντα, με αβέβαιες συνέπειες για την ασφάλεια της διεργασίας. Η εργασία μελετά την εισαγωγή πρακτόρων LLM στον έλεγχο ICS πάνω στο εκπαιδευτικό εργοστάσιο Fischertechnik Training Factory Industry 4.0. Η αρχιτεκτονική του εργοστασίου —PLC, αισθητήρες, ενεργοποιητές, ροές παραγωγής—, τα πρωτόκολλα επικοινωνίας και τα μοντέλα απειλών (MITRE ATT&CK for ICS, IEC 62443, NIST SP 800-82) ορίζουν ένα ρεαλιστικό, απομονωμένο και ασφαλές πεδίο έρευνας.

Ένας ή περισσότεροι πράκτορες αναλαμβάνουν ερμηνεία τηλεμετρίας, διατύπωση εντολών και προτάσεις απόκρισης σε ανωμαλίες, υπό αυστηρούς περιορισμούς ασφάλειας. Παράλληλα σχεδιάζονται και εκτελούνται σενάρια απειλών αποκλειστικά σε απομονωμένο εργαστήριο: χειραγώγηση εντολών και τιμών αισθητήρων, παραπλάνηση του πράκτορα μέσω κακόβουλων δεδομένων (prompt injection), μη εξουσιοδοτημένες αλλαγές στη λογική του PLC και άρνηση λειτουργίας. Στόχος είναι η μελέτη τρωτοτήτων και η αξιολόγηση προστατευτικών μηχανισμών — όχι η στόχευση πραγματικών εγκαταστάσεων.

Η αξιολόγηση συγκρίνει την προσέγγιση με συμβατικό έλεγχο χωρίς LLM: ποσοστό ανίχνευσης και απόκρισης, ασφάλεια και ορθότητα των εντολών του πράκτορα, ανθεκτικότητα σε παραπλάνηση και ιχνηλασιμότητα αποφάσεων. Παραδοχές, εργαλεία και περιορισμοί δηλώνονται ρητά.

Όλη η πειραματική εργασία παραμένει σε απομονωμένο, προσομοιωμένο εργαστήριο, χωρίς σύνδεση με παραγωγικά δίκτυα. Προτάσεις επέκτασης περιλαμβάνουν κανόνες ανίχνευσης, ανθρώπινο έλεγχο (human-in-the-loop) και σύνδεση με πλατφόρμες κυβερνοπεδίου.

## Αξιολόγηση και σημαντικά αποτελέσματα

**Πώς διεξάγεται.** Πειράματα σε απομονωμένο εργαστήριο με το Fischertechnik Training Factory: προ/μετα-έλεγχος προστατευτικών μηχανισμών, εκτέλεση σεναρίων απειλών, καταγραφή επιτυχίας ή αποτυχίας απόκρισης, καθώς και χρόνου και ακρίβειας των αποφάσεων του πράκτορα.

**Αποτελέσματα που μετράνε.** Ποσοστό ανίχνευσης και απόκρισης σε σενάρια απειλών, ασφάλεια και ορθότητα των εντολών του πράκτορα, ανθεκτικότητα σε prompt injection και παραπλάνηση, καθυστέρηση και ιχνηλασιμότητα (τεκμηρίωση) των αποφάσεων.

## Ενδεικτικές Δημοσιεύσεις (πραγματικές, χωρίς arXiv)
1. Stouffer, K., Pillitteri, V., Lightman, S., Abrams, M., Hahn, A. *Guide to Industrial Control Systems (ICS) Security*. NIST Special Publication 800-82 Rev. 2, 2015.
2. MITRE Corporation. *ATT&CK for Industrial Control Systems (ICS)*. MITRE, 2020.
3. Kayan, H., Nunes, M., Rana, O., Burnap, P., Perera, C. "Cybersecurity of Industrial Cyber-Physical Systems: A Review." *ACM Computing Surveys*, 2022.
4. Horkan, M., et al. "A Taxonomy of Industrial Control System Security Testbeds." *Computers & Security* (Elsevier), 2023.
5. Adepu, S., Mathur, A. "An Investigation into the Response of a Water Treatment System to Cyber Attacks." *IEEE Symposium on Computers and Communication (ISCC)*, 2016.
6. Goh, J., Adepu, S., Tan, M., Lee, Z. S. "Anomaly Detection in Cyber Physical Systems Using Recurrent Neural Networks." *IEEE International Symposium on High Assurance Systems Engineering (HASE)*, 2017.
7. Gupta, M., Akiri, C., Aryal, K., Parker, E., Praharaj, L. "From ChatGPT to ThreatGPT: Impact of Generative AI in Cybersecurity and Privacy." *IEEE Access*, 2023.
