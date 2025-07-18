import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Gyarados ex",
         ja: "Gyarados Ex",
         fr: "Gyarados ex",
         de: "Gyarados ex",
         es: "Gyarados ex",
         it: "Gyarados Ex",
         pt: "Gyarados Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [130],
      hp: 130,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Twister",
            ja: "ツイスター",
            fr: "Tornade",
            de: "Twister",
            es: "Tornado",
            it: "Twister",
            pt: "Twister",
          },
          effect: {
            en: "Flip 2 coins. For each heads, choose 1 Energy attached to the Defending Pokemon, if any, and discard it. If both are tails, this attack does nothing.",
            ja: "2つのコインをフリップします。各ヘッドについて、ディフェンディングポケモンに取り付けられた1つのエネルギーを選択して、それを破棄します。両方が尾の場合、この攻撃は何もしません。",
            fr: "Flip 2 pièces. Pour chaque tête, choisissez 1 énergie attachée au Pokémon en défense, le cas échéant, et jetez-le. Si les deux sont des queues, cette attaque ne fait rien.",
            de: "2 Münzen umdrehen. Wählen Sie für jeden Köpfe 1 Energie, die an das verteidigende Pokemon angebracht sind, falls vorhanden, und entsorgen Sie es. Wenn beide Schwänze sind, tut dieser Angriff nichts.",
            es: "Flip 2 monedas. Para cada cabezal, elija 1 energía unida al Pokémon defensor, si lo hay, y deséchela. Si ambas son colas, este ataque no hace nada.",
            it: "Flip 2 monete. Per ogni testa, scegli 1 energia collegata al Pokemon in difesa, se presente e scartalo. Se entrambi sono code, questo attacco non fa nulla.",
            pt: "Flip 2 moedas. Para cada cabeça, escolha 1 energia ligada ao Pokémon defensor, se houver, e descarte -o. Se ambos são caudas, esse ataque não faz nada.",
          },
          damage: 40,
        },
        {
          cost: ["Water", "Water", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Dragon Rage",
            ja: "ドラゴンレイジ",
            fr: "Rage de dragon",
            de: "Dragon Wut",
            es: "Rabia de dragón",
            it: "Rage del drago",
            pt: "RAGA DA DRAGON",
          },
          damage: 100,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
