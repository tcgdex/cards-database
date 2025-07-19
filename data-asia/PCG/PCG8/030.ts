import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Electrike",
         ja: "電気",
         fr: "Électrike",
         de: "Elektrike",
         es: "Electrídico",
         it: "Elettrike",
         pt: "Eletrike",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [309],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Sniff Out",
            ja: "スニッフアウト",
            fr: "Renifler",
            de: "Schnüffeln",
            es: "Oler",
            it: "Fiutare",
            pt: "Sniff fora",
          },
          effect: {
            en: "Put any 1 card from your discard pile into your hand.",
            ja: "廃棄の山から1枚のカードを手に入れます。",
            fr: "Mettez une carte 1 de votre tas de défausse dans votre main.",
            de: "Legen Sie eine 1 -Karte von Ihrem Ablagerungsstapel in Ihre Hand.",
            es: "Pon cualquier tarjeta de 1 de tu pila de descarte en tu mano.",
            it: "Metti in mano qualsiasi carta 1 dalla tua pila di scarto.",
            pt: "Coloque qualquer 1 cartão da sua pilha de descarte em sua mão.",
          },
        },
        {
          cost: ["Lightning"],
          name: {
            en: "Quick Blow",
            ja: "素早い打撃",
            fr: "Coup rapide",
            de: "Schneller Schlag",
            es: "Golpe rápido",
            it: "BUOGNO QUAST",
            pt: "Golpe rápido",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 10 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 10 Schäden plus 10 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 10 daños más.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 10 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 10 mais danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
