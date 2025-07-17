import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Misty's Poliwhirl",
         ja: "MistyのPoliWhirl",
         fr: "Poliwhirl de Misty",
         de: "Mistys Poliwhirl",
         es: "Misty's Poliwhirl",
         it: "Misty's Poliwirl",
         pt: "Misty's Poliwhirl",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [61],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Rapids",
            ja: "急流",
            fr: "Rapides",
            de: "Stromschnellen",
            es: "Rápidos",
            it: "Rapide",
            pt: "Corredeiras",
          },
          effect: {
            en: "If the Defending Pokemon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those Energy cards and discard it.",
            ja: "防衛ポケモンにエネルギーカードが付いている場合は、コインをひっくり返します。頭の場合は、それらのエネルギーカードの1つを選択して廃棄します。",
            fr: "Si le Pokémon en défense a des cartes d'énergie qui y sont attachées, retournez une pièce. Si les têtes, choisissez 1 de ces cartes d'énergie et jetez-la.",
            de: "Wenn das verteidigende Pokemon an Energiekarten angebracht ist, drehen Sie eine Münze. Wenn Sie Köpfe haben, wählen Sie 1 dieser Energiekarten und verwerfen Sie es.",
            es: "Si el Pokémon defensor tiene alguna tarjeta de energía unida, voltea una moneda. Si se dirige, elija 1 de esas tarjetas de energía y deséchela.",
            it: "Se il Pokemon in difesa ha delle carte di energia ad esso collegate, capovolgi una moneta. Se la testa, scegli 1 di quelle carte energetiche e scartalo.",
            pt: "Se o Pokémon atual tiver algum cartão de energia anexado a ele, vire uma moeda. Se as cabeças, escolha 1 dessas cartas de energia e descarte -as.",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Water Punch",
            ja: "ウォーターパンチ",
            fr: "Coup de poing",
            de: "Wasserstempel",
            es: "Golpe de agua",
            it: "Punch d'acqua",
            pt: "Punchado de água",
          },
          effect: {
            en: "Flip a number of coins equal to the number of Water Energy attached to Misty's Poliwhirl. This attack does 30 damage plus 10 damage for each heads.",
            ja: "MistyのPoliWhirlに取り付けられた水エネルギーの数に等しい多数のコインをひっくり返します。この攻撃は、30のダメージとヘッドごとに10ダメージを与えます。",
            fr: "Retournez un certain nombre de pièces égales au nombre d'énergie d'eau attachée au polihirl de Misty. Cette attaque fait 30 dégâts plus 10 dégâts pour chaque tête.",
            de: "Drehen Sie eine Anzahl von Münzen um, die der Anzahl der Wasserenergie entspricht, die an Mistys Poliwhirl befestigt ist. Dieser Angriff verursacht 30 Schäden plus 10 Schäden für jeden Köpfe.",
            es: "Voltee una serie de monedas igual al número de energía de agua unida a Misty's Poliwhirl. Este ataque hace 30 daños más 10 daños para cada cabezal.",
            it: "Capovolgi un numero di monete pari al numero di energia idrica attaccata al poliwhirl di Misty. Questo attacco infligge 30 danni più 10 danni per ogni teste.",
            pt: "Vire uma série de moedas iguais ao número de energia da água presa ao Poliwhirl de Misty. Este ataque causa 30 danos mais 10 danos para cada cabeça.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
