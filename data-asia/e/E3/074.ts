import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Scizor - 074/087",
         ja: "Scizor -074/087",
         fr: "Scizor - 074/087",
         de: "Scizor - 074/087",
         es: "Scizor - 074/087",
         it: "Scizor - 074/087",
         pt: "Scizor - 074/087",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [212],
      hp: 80,
      types: ["Metal"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Poison Resistance",
            ja: "毒抵抗",
            fr: "Résistance au poison",
            de: "Giftwiderstand",
            es: "Resistencia al veneno",
            it: "Resistenza al veleno",
            pt: "Resistência ao veneno",
          },
          effect: {
            en: "Scizor can't be Poisoned.",
            ja: "Scizorは毒されることはできません。",
            fr: "Scizor ne peut pas être empoisonné.",
            de: "Scizor kann nicht vergiftet werden.",
            es: "Scizor no puede ser envenenado.",
            it: "Scizor non può essere avvelenato.",
            pt: "Scizor não pode ser envenenado.",
          },
      }],

      attacks: [
        {
          cost: ["Metal", "Colorless"],
          name: {
            en: "Snatch",
            ja: "スナッチ",
            fr: "Arracher",
            de: "Schnapp",
            es: "Arrebatar",
            it: "Strappare",
            pt: "Arrebatar",
          },
          effect: {
            en: "Before doing damage, you may choose 1 of your opponent's Benched Pokemon with no damage counters on it and switch the Defending Pokemon with it.",
            ja: "ダメージを与える前に、ダメージカウンターなしで対戦相手のベンチ付きポケモンを1つ選択し、防御ポケモンをそれに切り替えることができます。",
            fr: "Avant de faire des dégâts, vous pouvez choisir 1 des pokemon bancés de votre adversaire sans compteurs de dégâts dessus et commuter le Pokémon en défense avec.",
            de: "Bevor Sie Schaden anrichten, können Sie 1 der Bankpokémon Ihres Gegners ohne Schadenszähler dafür auswählen und das verteidigende Pokémon damit wechseln.",
            es: "Antes de hacer daño, puede elegir 1 de los Pokémon de banca de su oponente sin contadores de daño y cambiar el Pokémon defensor con él.",
            it: "Prima di fare danni, puoi scegliere 1 dei Pokemon in panchina del tuo avversario senza contatori di danno e cambiare il Pokemon in carica con esso.",
            pt: "Antes de causar danos, você pode escolher um dos Pokémon em bancada do seu oponente, sem contadores de dano e trocar o Pokémon atual.",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Heavy Metal",
            ja: "重金属",
            fr: "Heavy metal",
            de: "Schwermetall",
            es: "Metal pesado",
            it: "Heavy metal",
            pt: "Heavy metal",
          },
          effect: {
            en: "Flip a number of coins equal to the amount of Metal Energy attached to Scizor. This attack does 30 damage plus 20 more damage for each heads.",
            ja: "Scizorに取り付けられた金属エネルギーの量に等しい多数のコインをひっくり返します。この攻撃は、30のダメージに加えて、ヘッドごとに20のダメージを与えます。",
            fr: "Retournez un certain nombre de pièces égales à la quantité d'énergie métallique attachée à Scizor. Cette attaque fait 30 dégâts plus 20 dégâts supplémentaires pour chaque tête.",
            de: "Drehen Sie eine Anzahl von Münzen um, die der an Scizor befestigten Metallenergie entspricht. Dieser Angriff verursacht 30 Schäden plus 20 weitere Schäden für jeden Köpfe.",
            es: "Voltee una serie de monedas igual a la cantidad de energía metálica unida a Scizor. Este ataque hace 30 daños más 20 más de daño para cada cabezal.",
            it: "Capolare una serie di monete pari alla quantità di energia metallica attaccata a Scizor. Questo attacco infligge 30 danni più 20 danni in più per ogni teste.",
            pt: "Vire uma série de moedas iguais à quantidade de energia metálica anexada ao Scizor. Este ataque causa 30 danos mais 20 mais danos para cada cabeça.",
          },
        },
      ],

      retreat: 2,

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
