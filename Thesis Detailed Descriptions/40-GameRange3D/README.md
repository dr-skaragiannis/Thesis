# 40. GameRange3D — Τρισδιάστατο Κυβερνοπεδίο Μη Επανδρωμένων Αεροσκαφών σε Gazebo
### GameRange3D: A Gazebo Cyber Range for Drone Missions, Packet Flows and Warzone Training Scenarios

## Στοιχεία Έργου
- **Πηγαίος φάκελος:** προς δημιουργία (νέο θέμα, χωρίς υπάρχουσα υλοποίηση)
- **Θεματική περιοχή:** Κυβερνοπεδία, ασφάλεια μη επανδρωμένων αεροσκαφών, προσομοίωση, εκπαίδευση
- **Τεχνολογίες:** Gazebo, αυτόματος πιλότος σε software-in-the-loop (ενδεικτικά PX4 ή ArduPilot), ανταλλαγή πακέτων αποστολής με σταθμό εδάφους, καταγραφή τηλεμετρίας, σενάρια εκπαίδευσης
- **Ενδεικτικός αριθμός φοιτητών:** 1–2

## Εκφώνηση Διπλωματικής Εργασίας

Η ασφάλεια μη επανδρωμένων αεροσκαφών δεν διδάσκεται με ασφάλεια σε πραγματική πτήση. Η εργασία σχεδιάζει και αξιολογεί το GameRange3D, εκπαιδευτικό κυβερνοπεδίο όπου εικονικά drones κινούνται σε Gazebo, ανταλλάσσουν πακέτα αποστολής με σταθμό εδάφους και ολοκληρώνουν σενάρια με αφηγηματικό πλαίσιο πεδίου επιχειρήσεων. Ο εκπαιδευόμενος μαθαίνει να διαβάζει τη ροή εντολών και τηλεμετρίας, να ξεχωρίζει την αναμενόμενη από την ανώμαλη συμπεριφορά και να αποκαθιστά αξιόπιστο έλεγχο, μέσα σε κλειστό προσομοιωτή.

Η αρχιτεκτονική συνδυάζει προσομοίωση φυσικής, αυτόματο πιλότο σε software-in-the-loop και καταγραφή των πακέτων της αποστολής. Τα σενάρια είναι βαθμιδωτά: κανονική αποστολή και ανάγνωση πακέτων, απώλεια ή αλλοίωση του καναλιού εντολών, ασυνέπεια τηλεμετρίας πλοήγησης, και απόκριση του χειριστή. Κάθε σενάριο δίνει παρατηρήσιμα ίχνη και κριτήριο επιτυχίας. Το πακετάρισμα και η αποστολή αφορούν μηνύματα της προσομοίωσης και σύγκριση με ίχνη που παρέχει ο διδάσκων. Δεν περιλαμβάνονται οδηγίες προσβολής πραγματικών αεροσκαφών ή ραδιοζεύξεων εκτός εργαστηρίου.

Η αξιολόγηση μετρά αν οι εκπαιδευόμενοι εντοπίζουν το ανώμαλο ίχνος, εξηγούν τον αντίκτυπο στην αποστολή και επιλέγουν αναλογική απόκριση, σε σύγκριση με ομάδα που διαβάζει μόνο θεωρία. Τεκμηριώνονται η πιστότητα της προσομοίωσης, η αναπαραγωγιμότητα των σεναρίων και τα όρια μεταφοράς σε πραγματικό σμήνος.

## Αξιολόγηση και σημαντικά αποτελέσματα

**Πώς διεξάγεται.** Όλα τα σενάρια τρέχουν σε Gazebo και σε software-in-the-loop, χωρίς πραγματικά αεροσκάφη και χωρίς εκπομπή εκτός εργαστηρίου. Μελέτη χρηστών μόνο με συγκατάθεση.

**Αποτελέσματα που μετράνε.** Εντοπισμός ανώμαλου ίχνους, εξήγηση του αντικτύπου στην αποστολή, καταλληλότητα της απόκρισης, και αναπαραγωγιμότητα του σεναρίου μεταξύ εκτελέσεων.

## Ενδεικτικές Δημοσιεύσεις (πραγματικές, χωρίς arXiv)
1. Koenig, N., Howard, A. "Design and Use Paradigms for Gazebo, an Open-Source Multi-Robot Simulator." *IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)*, 2004.
2. Meier, L., Honegger, D., Pollefeys, M. "PX4: A Node-Based Multithreaded Open Source Robotics Framework for Deeply Embedded Platforms." *IEEE International Conference on Robotics and Automation (ICRA)*, 2015.
3. Javaid, A. Y., Sun, W., Devabhaktuni, V. K., Alam, M. "Cyber Security Threat Analysis and Modeling of an Unmanned Aerial Vehicle System." *IEEE Conference on Technologies for Homeland Security (HST)*, 2012.
4. Hartmann, K., Steup, C. "The Vulnerability of UAVs to Cyber Attacks — An Approach to the Risk Assessment." *International Conference on Cyber Conflict (CyCon)*, 2013.
5. Rodday, N. M., Schmidt, R. de O., Pras, A. "Exploring Security Vulnerabilities of Unmanned Aerial Vehicles." *IEEE/IFIP Network Operations and Management Symposium (NOMS)*, 2016.
6. Yamin, M. M., Katt, B., Gkioulos, V. "Cyber Ranges and Security Testbeds: Scenarios, Functions, Tools and Architecture." *Computers & Security*, 2020.
