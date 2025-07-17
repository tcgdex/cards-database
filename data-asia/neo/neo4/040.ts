import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Light Azumarill",
         ja: "軽いアズマリル",
         fr: "Azumarill léger",
         de: "Licht Azumarill",
         es: "Ligero azumarill",
         it: "Leggero azumarill",
         pt: "Azumarill leve",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [184],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Bubble",
            ja: "バブル",
            fr: "Bulle",
            de: "Blase",
            es: "Burbuja",
            it: "Bolla",
            pt: "Bolha",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 10,
        },
        {
          cost: ["Water", "Colorless", "Colorless"],
          name: {
            en: "Bubble Jump",
            ja: "バブルジャンプ",
            fr: "Saut à bulles",
            de: "Blasensprung",
            es: "Salto de burbujas",
            it: "Salto a bolla",
            pt: "Salto de bolha",
          },
          effect: {
            en: "If you have any Benched Pokemon, flip a coin. If heads, take 2 Energy cards attached to Light Azumarill and attach them to 1 of your Benched Pokemon. Then return Light Azumarill and all cards attached to it to your hand.",
            ja: "ベンチ付きポケモンがある場合は、コインをひっくり返します。頭の場合は、2枚のエネルギーカードをライトアズマリルに取り付けて、ベンチ付きポケモン1枚に取り付けます。次に、ライトアズマリルとそれに取り付けられたすべてのカードを手に返します。",
            fr: "Si vous avez des pokemon bancés, retournez une pièce. Si les têtes, prenez 2 cartes d'énergie attachées à Azumarill léger et attachez-les à 1 de votre pokemon banc. Renvoyez ensuite Light Azumarill et toutes les cartes qui y sont attachées à votre main.",
            de: "Wenn Sie ein Bank -Pokemon haben, drehen Sie eine Münze. Wenn Sie Köpfe haben, nehmen Sie 2 Energiekarten, die an hellem Azumarill befestigt sind, und befestigen Sie sie an 1 Ihres Bankpokémons. Kehren Sie dann Light Azumarill und alle an Ihrer Hand befestigten Karten zurück.",
            es: "Si tienes algún Pokémon de banca, voltea una moneda. Si se dirige, tome 2 tarjetas de energía unidas a la luz Azumarill y adjuntelas a 1 de su Pokémon de banca. Luego regrese la luz de Azumarill y todas las tarjetas adjuntas a su mano.",
            it: "Se hai dei Pokemon in panchina, capovolgi una moneta. Se la testa, prendi 2 carte di energia attaccate alla luce Azumarill e attaccali a 1 del tuo Pokemon in panchina. Quindi restituisce la luce Azumarill e tutte le carte attaccate alla tua mano.",
            pt: "Se você tiver algum Pokémon em banco, vire uma moeda. Se as cabeças, pegue 2 cartões de energia anexados à luz azumarill e prenda -os a 1 de seu Pokémon em banco. Em seguida, retorne o Azumarill leve e todas as cartas anexadas à sua mão.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
