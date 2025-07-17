import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Omastar",
         ja: "Omastar",
         fr: "Omastar",
         de: "Omastar",
         es: "OmaStar",
         it: "Omastar",
         pt: "OMASTAR",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [139],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Squeeze",
            ja: "絞る",
            fr: "Presser",
            de: "Quetschen",
            es: "Estrujar",
            it: "Stretta",
            pt: "Espremer",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 20 more damage and the Defending Pokemon is now Paralyzed. If tails, this attack does 10 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与え、防御ポケモンが麻痺しています。尾の場合、この攻撃は10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 20 dégâts supplémentaires et le Pokémon en défense est maintenant paralysé. Si Tails, cette attaque fait 10 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 10 Schäden plus 20 weitere Schäden und das verteidigende Pokémon ist jetzt gelähmt. Wenn Schwänze, verursacht dieser Angriff 10 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 20 más de daño y el Pokémon defensor ahora está paralizado. Si Tails, este ataque hace 10 daños.",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 10 danni più 20 danni in più e il Pokemon in carica è ora paralizzato. Se le code, questo attacco infligge 10 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 20 mais danos e o pokemon atual agora está paralisado. Se caudas, esse ataque causa 10 danos.",
          },
        },
        {
          cost: ["Water", "Water", "Water"],
          name: {
            en: "Spike Barrage",
            ja: "スパイク弾幕",
            fr: "Barrage",
            de: "Spike Barrage",
            es: "Barrera de pico",
            it: "Spike Barrage",
            pt: "Barragem de pico",
          },
          effect: {
            en: "Flip a number of coins equal to the number of Water Energy attached to Omastar. This attack does 20 damage plus 20 more damage for each heads.",
            ja: "Omastarに付着した水エネルギーの数に等しい多数のコインをひっくり返します。この攻撃は20のダメージに加えて、各ヘッドに対して20のダメージをさらに発生させます。",
            fr: "Retournez un certain nombre de pièces égales au nombre d'énergie d'eau attachée à Omastar. Cette attaque fait 20 dégâts plus 20 dégâts supplémentaires pour chaque tête.",
            de: "Drehen Sie eine Anzahl von Münzen um, die der Anzahl der an Omastar befestigten Wasserenergie entspricht. Dieser Angriff verursacht 20 Schäden plus 20 weitere Schäden für jeden Köpfe.",
            es: "Voltee una serie de monedas igual al número de energía de agua unida a OmaStar. Este ataque hace 20 daños más 20 más de daño para cada cabezal.",
            it: "Capolare una serie di monete pari al numero di energia idrica attaccata a Omastar. Questo attacco infligge 20 danni più 20 danni in più per ogni teste.",
            pt: "Vire uma série de moedas iguais ao número de energia da água anexada ao OMASTAR. Este ataque causa 20 danos mais 20 mais danos para cada cabeça.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
