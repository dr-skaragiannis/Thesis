# 37. LLM-SpearPhishing — Παραγωγή Στοχευμένων Emails Spear Phishing με LLM και Ανάκτηση Περιεχομένου URL
### LLM-SpearPhishing: Retrieval-Augmented LLM Generation of Spear-Phishing Emails from URL Content

## Στοιχεία Έργου
- **Πηγαίος φάκελος:** προς δημιουργία (νέο θέμα, χωρίς υπάρχουσα υλοποίηση)
- **Θεματική περιοχή:** Κοινωνική μηχανική, spear phishing, μεγάλα γλωσσικά μοντέλα (LLM), ανάκτηση περιεχομένου (RAG), ευαισθητοποίηση και άμυνα
- **Τεχνολογίες:** LLM (τοπικά ή μέσω API), ανάκτηση/εξαγωγή περιεχομένου από URLs (scraping, parsing, embeddings/vector store), σύνθεση και αξιολόγηση κειμένου, φίλτρα/ανιχνευτές phishing, γεννήτρια σεναρίων ευαισθητοποίησης
- **Ενδεικτικός αριθμός φοιτητών:** 1–2

## Εκφώνηση Διπλωματικής Εργασίας

Τα μεγάλα γλωσσικά μοντέλα μπορούν να συνθέσουν πειστικά, προσωποποιημένα μηνύματα όταν τροφοδοτούνται με περιεχόμενο από δημόσιες ιστοσελίδες, αυτό τα καθιστά χρήσιμο εργαλείο ευαισθητοποίησης, αλλά και δυνητικά επικίνδυνο αν ξεφύγει από ελεγχόμενο πλαίσιο. Η εργασία μελετά σύστημα ανάκτησης περιεχομένου από URLs (retrieval-augmented generation) για την παραγωγή ρεαλιστικών emails spear phishing αποκλειστικά για εκπαίδευση και αξιολόγηση άμυνας, όχι για πραγματική στοχοποίηση.

Η διοχέτευση (pipeline), από δημόσια διαθέσιμες πληροφορίες που παρέχονται ως URLs —ιστοσελίδες οργανισμού, ανακοινώσεις, σελίδες ρόλων και επικοινωνίας—, ανακτά, εξάγει και συνθέτει ρόλους, έργα, ορολογία και ύφος, και τα τροφοδοτεί σε LLM για σύνταξη emails με συγκεκριμένο σκοπό και έναυσμα. Η ορθότητα των ανακτώμενων πληροφοριών (αποφυγή παραισθήσεων), η λειτουργία μόνο σε εγκεκριμένο και απομονωμένο περιβάλλον χωρίς στοχοποίηση πραγματικών προσώπων, και η τεκμηρίωση των σεναρίων είναι δεσμευτικοί όροι.

Η αξιολόγηση καλύπτει ποιότητα, πειστικότητα και προσωποποίηση (ανθρώπινη αξιολόγηση), ορθότητα των ανακτώμενων γεγονότων, σύγκριση με ανθρώπινα γραμμένα ή βασισμένα σε πρότυπα (template-based) emails, καθώς και αμυντική αξία: ανιχνευσιμότητα από φίλτρα, κάλυψη ενδείξεων, χρήση για εκπαίδευση χρηστών. Μετρικές και εναλλακτικές προσεγγίσεις τεκμηριώνονται.

Η δεοντολογία περιλαμβάνει συγκατάθεση, μη στοχοποίηση, προστασία δεδομένων, περιορισμούς χρήσης και Guardrails, και απόρριψη κακόβουλων αιτημάτων. Πιθανές επεκτάσεις είναι ενσωμάτωση ανιχνευτών, προσαρμοστική δυσκολία σε προγράμματα ευαισθητοποίησης και αξιολόγηση ανθεκτικότητας των αμυνών σε αποφυγή φίλτρων.

## Αξιολόγηση και σημαντικά αποτελέσματα

**Πώς διεξάγεται.** Πειράματα σε ελεγχόμενο, απομονωμένο περιβάλλον: παραγωγή σεναρίων από ορισμένα URLs, ανθρώπινη (τυφλή) αξιολόγηση και σύγκριση με baselines (ανθρώπινα / template-based). Όπου γίνεται μελέτη χρηστών, με συγκατάθεση και ανωνυμοποίηση.

**Αποτελέσματα που μετράνε.** Πειστικότητα και προσωποποίηση (βαθμολογία ανθρώπων), ορθότητα ανακτώμενων γεγονότων (factuality), ποσοστό διέλευσης από φίλτρα και ανιχνευτές phishing, και βελτίωση αναγνώρισης σε σενάρια εκπαίδευσης.

## Ενδεικτικές Δημοσιεύσεις (πραγματικές, χωρίς arXiv)
1. Lewis, P., et al. "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks." *Advances in Neural Information Processing Systems (NeurIPS)*, 2020.
2. Kumaraguru, P., et al. "Protecting People from Phishing: The Design and Evaluation of an Embedded Training Email System." *ACM CHI*, 2007.
3. Sheng, S., et al. "Anti-Phishing Phil: The Design and Evaluation of a Game That Teaches People Not to Fall for Phish." *USENIX SOUPS*, 2007.
4. Han, Y., Shen, Y. "Accurate Spear Phishing Campaign Attribution and Early Detection." *ACM Symposium on Applied Computing (SAC)*, 2016.
5. Ho, G., et al. "Detecting and Characterizing Lateral Phishing at Scale." *USENIX Security Symposium*, 2019.
6. Gupta, M., Akiri, C., Aryal, K., Parker, E., Praharaj, L. "From ChatGPT to ThreatGPT: Impact of Generative AI in Cybersecurity and Privacy." *IEEE Access*, 2023.
7. Das, S., et al. "PickMail: A Serious Game for Email Phishing." *NDSS Workshop on Usable Security (USEC)*, 2022.
8. Chaudhary, S., et al. "Phishing Awareness and Education: A Systematic Review." *Computers & Security* (Elsevier), 2023.
