import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Muk - 005/092",
         ja: "MUK -005/092",
         fr: "MUK - 005/092",
         de: "Muk - 005/092",
         es: "Muk - 005/092",
         it: "MUK - 005/092",
         pt: "Muk - 005/092",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [89],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Heavyweight",
            ja: "ヘビー級",
            fr: "Poids lourd",
            de: "Schwergewicht",
            es: "De peso pesado",
            it: "Pesante peso",
            pt: "Peso pesado",
          },
          effect: {
            en: "As long as there is a Grass Energy attached to Muk, you must pay an additional {{e}}{{e}} to retreat it.",
            ja: "MUKに草のエネルギーが取り付けられている限り、追加の{{e}} {{e}} {{e}}を支払う必要があります。",
            fr: "Tant qu'il y a une énergie d'herbe attachée à Muk, vous devez payer un {{e}}} {{e}} supplémentaire pour le retirer.",
            de: "Solange es eine Grasergie an Muk gibt, müssen Sie einen zusätzlichen {{e}} {{e}} bezahlen, um es zurückzuziehen.",
            es: "Mientras haya una energía de hierba unida a MUK, debe pagar un {{e}}} {{e}} adicional para retirarla.",
            it: "Finché c'è un'energia di erba allegata a Muk, è necessario pagare un ulteriore {{e}} {{e}} per ritirarlo.",
            pt: "Enquanto houver uma energia de grama anexada ao muk, você deverá pagar um {{e}} {{e}} adicional para retirá -lo.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Burning Sludge",
            ja: "燃えるスラッジ",
            fr: "Boues brûlantes",
            de: "Brennen Schlamm",
            es: "Lodos ardientes",
            it: "Fanghi ardenti",
            pt: "Lodo ardente",
          },
          effect: {
            en: "Flip a number of coins equal to the amount of Grass Energy attached to Muk. If any of them are heads, the Defending Pokemon is now Poisoned and Burned.",
            ja: "MUKに取り付けられた草のエネルギーの量に等しい多数のコインをひっくり返します。それらのいずれかが頭である場合、防御するポケモンは現在毒され、燃やされています。",
            fr: "Retournez un certain nombre de pièces égales à la quantité d'énergie de l'herbe attachée à Muk. Si l'un d'eux est la tête, le Pokémon en défense est maintenant empoisonné et brûlé.",
            de: "Drehen Sie eine Anzahl von Münzen um, die der an Muk befestigten Grasenergie entspricht. Wenn einer von ihnen Köpfe ist, wird das verteidigende Pokémon jetzt vergiftet und verbrannt.",
            es: "Voltee una serie de monedas igual a la cantidad de energía de hierba unida a MUK. Si alguno de ellos son cabezas, el Pokémon defensor ahora está envenenado y quemado.",
            it: "Capolare una serie di monete pari alla quantità di energia dell'erba attaccata al MUK. Se qualcuno di loro è testa, il Pokemon in carica viene ora avvelenato e bruciato.",
            pt: "Vire uma série de moedas iguais à quantidade de energia da grama anexada ao muk. Se algum deles é cabeças, o Pokémon atual agora está envenenado e queimado.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
