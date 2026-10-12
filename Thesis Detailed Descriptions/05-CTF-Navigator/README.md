# 5. CTF-Navigator — Ευφυής Καθοδηγητής για Ασκήσεις Capture the Flag
### CTF-Navigator: An AI-Assisted Learning Navigator for Capture-the-Flag Cybersecurity Exercises

## Στοιχεία Έργου
- **Πηγαίος φάκελος:** `CTF-NAVIGATOR-MAIN/` (και `CTF-NAVIGATOR-MAIN.zip`)
- **Θεματική περιοχή:** Εκπαιδευτική τεχνολογία, κυβερνοασφάλεια, ευφυείς διδακτικοί βοηθοί, LLM
- **Τεχνολογίες:** Firebase (Auth/Firestore), τοπικό ή απομακρυσμένο LLM (Ollama), frontend εφαρμογή
- **Ενδεικτικός αριθμός φοιτητών:** 1–2

## Εκφώνηση Διπλωματικής Εργασίας

Στις ασκήσεις Capture the Flag (CTF) οι αρχάριοι συχνά κολλάνε στην επιλογή εργαλείου, στην έλλειψη στρατηγικής ή στην άγνοια της φάσης αναγνώρισης — όχι επειδή δεν υπάρχει λύση κάπου στο διαδίκτυο. Η εργασία αναπτύσσει και αξιολογεί έναν ευφυή καθοδηγητή που προσφέρει διαβαθμισμένη βοήθεια χωρίς να αποκαλύπτει την απάντηση. Μελετάται πώς προσεγγίζουν τα προβλήματα οι αρχάριοι και πού ένας βοηθός βασισμένος σε μεγάλα γλωσσικά μοντέλα (LLM) μπορεί να παρέμβει χρήσιμα.

Η εφαρμογή οργανώνει τις ασκήσεις, παρακολουθεί την πρόοδο του χρήστη και δίνει στοχευμένες υποδείξεις και επεξηγήσεις. Η αρχιτεκτονική συνδυάζει ασφαλή διαχείριση λογαριασμού και δεδομένων προόδου (π.χ. Firebase) με μηχανισμό παραγωγής απαντήσεων από τοπικό ή απομακρυσμένο μοντέλο (π.χ. Ollama), και ορίζει σαφείς πολιτικές για το τι επιτρέπεται να αποκαλύψει ο βοηθός.

Τεχνικά πρέπει να ελεγχθούν τα αιτήματα προς το μοντέλο (prompt engineering και περιορισμός διαρροής λύσεων), η ανθεκτικότητα σε προσπάθειες «παραπλάνησης» ώστε να δοθεί η απάντηση, και η ποιότητα των υποδείξεων. Η αξιολόγηση γίνεται συστηματικά, με μετρικές μάθησης όπως χρόνος επίλυσης, ποσοστό επιτυχίας και αριθμός υποδείξεων, ιδανικά με ομάδα ελέγχου.

Η αρχιτεκτονική τεκμηριώνεται· συζητούνται ασφάλεια, ιδιωτικότητα και κόστος· προτείνονται επεκτάσεις όπως προσαρμογή της δυσκολίας στο επίπεδο του χρήστη, πολυγλωσσική υποστήριξη και ενσωμάτωση σε πλατφόρμες CTF.

## Αξιολόγηση και σημαντικά αποτελέσματα

**Πώς διεξάγεται.** Συγκρίνονται ομάδα με βοηθό και ομάδα χωρίς (ή με στατικές υποδείξεις). Μετρώνται χρόνος επίλυσης, ποσοστό επιτυχίας, αριθμός υποδείξεων και το κατά πόσον ο βοηθός αποκάλυψε τη λύση σε δοκιμές «παραπλάνησης». Η χρησιμότητα των υποδείξεων αξιολογείται και ποιοτικά.

**Αποτελέσματα που μετράνε.** Μαθησιακό όφελος χωρίς διαρροή λύσης, ανθεκτικότητα σε jailbreak και prompt injection του βοηθού, καθώς και κόστος και καθυστέρηση των κλήσεων μοντέλου.

## Ενδεικτικές Δημοσιεύσεις (πραγματικές, χωρίς arXiv)
1. Švábenský, V., Vykopal, J., Čeleda, P. "What Are Cybersecurity Education Papers About? A Systematic Literature Review of SIGCSE and ITiCSE Conferences." *ACM SIGCSE*, 2020.
2. Vykopal, J., Švábenský, V., Chang, E.-C. "Benefits and Pitfalls of Using Capture the Flag Games in University Courses." *ACM SIGCSE*, 2020.
3. Chothia, T., Novakovic, C. "An Offline Capture The Flag-Style Virtual Machine and an Assessment of Its Value for Cybersecurity Education." *USENIX 3GSE*, 2015.
4. Kasunic, K. J., et al. "Learning to Hack: The Cybersecurity Learning Trajectories of Capture-the-Flag Competitors." *IEEE/ACM CSEE&T*, 2024.
5. Nagarajan, A., et al. "Exploring Game-Based Learning for Cybersecurity Education: A Systematic Literature Review." *ACM Transactions on Computing Education*, 2023.
6. Liu, Y., et al. "Large Language Models for Education: A Survey." *IEEE Transactions on Learning Technologies*, 2024.
