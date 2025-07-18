import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Poliwhirl",
         ja: "PoliWhirl",
         fr: "Polihirl",
         de: "Poliwhirl",
         es: "Poliwhirl",
         it: "Poliwhirl",
         pt: "Poliwhirl",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [61],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Energy Ball",
            ja: "エネルギーボール",
            fr: "Balle énergétique",
            de: "Energieball",
            es: "Bola de energía",
            it: "Sfera di energia",
            pt: "Bola de energia",
          },
          effect: {
            en: "Does 30 damage plus 10 more damage for each Energy attached to Poliwhirl but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
            ja: "PoliWhirlに付随する各エネルギーに対して30のダメージに加えて10ダメージを加えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
            fr: "Fait 30 dégâts plus 10 dommages supplémentaires pour chaque énergie attachée à Poliwhirl, mais pas utilisé pour payer le coût énergétique de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette manière.",
            de: "Fügt 30 Schäden plus 10 weitere Schäden für jede an Poliwhirl angeschlossene Energie, aber nicht zur Bezahlung der Energiekosten dieses Angriffs. Auf diese Weise können Sie nicht mehr als 20 Schäden hinzufügen.",
            es: "Hace 30 daños más 10 daños más por cada energía unida a Poliwhirl pero no se usa para pagar el costo de energía de este ataque. No puede agregar más de 20 daños de esta manera.",
            it: "Fa 30 danni più 10 danni per ogni energia attaccata a Poliwhirl ma non è usato per pagare il costo energetico di questo attacco. Non puoi aggiungere più di 20 danni in questo modo.",
            pt: "Os 30 danos mais 10 mais danos para cada energia anexada a Poliwhirl, mas não costumavam pagar pelo custo de energia desse ataque. Você não pode adicionar mais de 20 danos dessa maneira.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
