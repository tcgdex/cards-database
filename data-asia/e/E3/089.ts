import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Kingdra - 089/087",
         ja: "キングドラ-089/087",
         fr: "Kingdra - 089/087",
         de: "Kingdra - 089/087",
         es: "Kingdra - 089/087",
         it: "Kingdra - 089/087",
         pt: "Kingdra - 089/087",
      },

      rarity: "Secret Rare",
      category: "Pokemon",
      dexId: [230],
      hp: 110,
      types: ["Colorless"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Crystal Type",
            ja: "クリスタルタイプ",
            fr: "Type de cristal",
            de: "Kristalltyp",
            es: "Tipo de cristal",
            it: "Crystal Type",
            pt: "Tipo de cristal",
          },
          effect: {
            en: "Whenever you attach a Water, Lightning, or Psychic basic Energy card from your hand to Kingdra, Kingdra's type (color) becomes the same as that Energy card type until the end of the turn.",
            ja: "手からキングドラに水、稲妻、またはサイキックベーシックエネルギーカードを取り付けると、キングドラのタイプ（色）はターンの終わりまでそのエネルギーカードタイプと同じになります。",
            fr: "Chaque fois que vous attachez une carte d'énergie de base d'eau, de foudre ou de base psychique de votre main à Kingdra, le type de Kingdra (couleur) devient le même que ce type de carte d'énergie jusqu'à la fin du tour.",
            de: "Immer wenn Sie ein Wasser, einen Blitz oder eine psychische Grundsenergiekarte von Ihrer Hand an Kingdra anbringen, wird Kingdras Typ (Farbe) bis zum Ende der Kurve den gleichen wie dieser Energiekartentyp.",
            es: "Cada vez que adjunta una tarjeta de energía de agua, rayos o psíquicos de su mano a Kingdra, el tipo (color) de Kingdra se convierte en el mismo tipo de tarjeta de energía hasta el final del turno.",
            it: "Ogni volta che attacchi una carta di energia di base dell'acqua, dei fulmini o psichici dalla mano a Kingdra, il tipo di Kingdra (colore) diventa lo stesso di quel tipo di carta energetica fino alla fine del turno.",
            pt: "Sempre que você prende um cartão de energia básica de água, raios ou psíquicos da sua mão a Kingdra, o tipo de Kingdra (cor) se torna o mesmo que o tipo de cartão de energia até o final do turno.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Water", "Lightning"],
          name: {
            en: "Aquabomb",
            ja: "Aquabomb",
            fr: "Aquabomb",
            de: "Aquabomb",
            es: "Agubomb",
            it: "Aquabomb",
            pt: "Aquabomb",
          },
          effect: {
            en: "Kingdra does 10 damage to itself. (Don't apply Weakness or Resistance when Kingdra damages itself with this attack.)",
            ja: "Kingdraはそれ自体に10ダメージを与えます。 （Kingdraがこの攻撃で損害を与える場合、衰弱や抵抗を適用しないでください。）",
            fr: "Kingdra fait 10 dégâts à lui-même. (N'appliquez pas la faiblesse ou la résistance lorsque Kingdra s'est endommagé par cette attaque.)",
            de: "Kingdra schädigt sich 10. (Wenden Sie keine Schwäche oder Widerstand an, wenn sich Kingdra bei diesem Angriff schadet.)",
            es: "Kingdra hace 10 daños a sí mismo. (No aplique debilidad o resistencia cuando Kingdra se daña con este ataque).",
            it: "Kingdra fa 10 danni a se stesso. (Non applicare debolezza o resistenza quando Kingdra si danneggia con questo attacco.)",
            pt: "Kingdra causa 10 danos a si mesmo. (Não aplique fraqueza ou resistência quando Kingdra se danificar com esse ataque.)",
          },
          damage: 40,
        },
        {
          cost: ["Psychic", "Psychic", "Lightning", "Colorless"],
          name: {
            en: "Dual Burn",
            ja: "二重火傷",
            fr: "Double brûlure",
            de: "Doppelverbrennung",
            es: "Doble quemadura",
            it: "Dual Burn",
            pt: "Queimadura dupla",
          },
          effect: {
            en: "Flip 2 coins. For each tails, discard 1 Energy card attached to Kingdra.",
            ja: "2つのコインをフリップします。各テールについて、Kingdraに取り付けられた1つのエネルギーカードを捨てます。",
            fr: "Flip 2 pièces. Pour chaque queue, jetez 1 carte d'énergie attachée à Kingdra.",
            de: "2 Münzen umdrehen. Für jeden Schwanz entsorgen Sie 1 Energiekarte an Kingdra.",
            es: "Flip 2 monedas. Para cada cola, deseche 1 tarjeta de energía unida a Kingdra.",
            it: "Flip 2 monete. Per ogni coda, scartare 1 carta energetica attaccata a Kingdra.",
            pt: "Flip 2 moedas. Para cada cauda, descarte 1 cartão de energia anexado a Kingdra.",
          },
          damage: 60,
        },
      ],

      retreat: 3,

};
