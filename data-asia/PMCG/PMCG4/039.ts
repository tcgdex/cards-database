import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Mankey",
         ja: "マンキー",
         fr: "Homme",
         de: "Manker",
         es: "Mankey",
         it: "Mankey",
         pt: "Mankey",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [56],
      hp: 40,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Mischief",
            ja: "いたずら",
            fr: "Sottises",
            de: "Unfug",
            es: "Travesura",
            it: "Dispetto",
            pt: "Travessura",
          },
          effect: {
            en: "Shuffle your opponent's deck.",
            ja: "相手のデッキをシャッフルします。",
            fr: "Mercer le jeu de votre adversaire.",
            de: "Mischen Sie das Deck Ihres Gegners.",
            es: "Baraja la cubierta de tu oponente.",
            it: "Shuffle il mazzo del tuo avversario.",
            pt: "Embaralhar o baralho do seu oponente.",
          },
        },
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Anger",
            ja: "怒り",
            fr: "Colère",
            de: "Wut",
            es: "Enojo",
            it: "Rabbia",
            pt: "Raiva",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage; if tails, this attack does 20 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires; Si Tails, cette attaque fait 20 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 20 Schäden plus 20 weitere Schäden; Wenn Schwänze, verursacht dieser Angriff 20 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 20 más de daño; Si Tails, este ataque hace 20 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni più 20 danni in più; Se le code, questo attacco infligge 20 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 20 mais danos; Se as caudas, esse ataque causam 20 danos.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
