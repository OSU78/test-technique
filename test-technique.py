import js

mensualiteDiv=js.document.getElementById("mensualite")

				
#Fonction qui calcule le montant total des intérêts versés en fonction du montant du crédit et du taux d'intérêt annuel
#Prend trois paramètre : (Montant-emprêter,Taux-annuel,Durée-en-années,Assurance-en-%)
def CalculerMensualité(C,N2,T,ASSU):
       
        T = float(T)
        N = N2*12
        ASSU = float(ASSU)
        t = (T / 12) 
        q = 1 + t / 100 # calcul du coefficient multiplicateur associé à une hausse de t%
        M = (q**N * (C) * (1 - q) / (1 - q**N)) + C*((ASSU/100)/12)
        #print("Votre mensualité sera de {0:.2f} euros".format(M))
        mensualiteDiv.innerText=("{0:.0f}€".format(M))
        I = N * M - C # calcul des intérêts versés
        T2 = T*1/100		
        

