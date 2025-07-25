import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Shining Noctowl",
         ja: "輝くノクトウル",
         fr: "Noctowl brillant",
         de: "Leuchtend Noctowl",
         es: "Noctowl brillante",
         it: "Noctowl brillante",
         pt: "Noctowl brilhante",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [164],
      hp: 60,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic", "Lightning", "Colorless"],
          name: {
            en: "Flashing Eyes",
            ja: "点滅する目",
            fr: "Yeux clignotants",
            de: "Blinkende Augen",
            es: "Ojos intermitentes",
            it: "Occhi lampeggianti",
            pt: "Olhos piscando",
          },
          effect: {
            en: "Flip 3 coins. If exactly 1 is heads, the Defending Pokemon is now Asleep. If exactly 2 are heads, the Defending Pokemon is now Confused. If all 3 are heads, the Defending Pokemon is now Paralyzed.",
            ja: "3コインをフリップします。正確に1がヘッドである場合、防御ポケモンは今眠っています。正確に2がヘッドである場合、防御ポケモンは混乱しています。 3つすべてがヘッドである場合、防御ポケモンは麻痺しています。",
            fr: "Flip 3 pièces. Si exactement 1 est la tête, le Pokémon en défense est maintenant endormi. Si exactement 2 sont des têtes, le Pokémon en défense est maintenant confus. Si les 3 sont les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "3 Münzen umdrehen. Wenn genau 1 Köpfe sind, schläft das verteidigende Pokémon jetzt. Wenn genau 2 Köpfe sind, ist das verteidigende Pokémon jetzt verwirrt. Wenn alle 3 Köpfe sind, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Flip 3 monedas. Si exactamente 1 es cabezas, el Pokémon defensor ahora está dormido. Si exactamente 2 son cabezas, el Pokémon defensor ahora está confundido. Si los 3 son cabezas, el Pokémon defensor ahora está paralizado.",
            it: "Flip 3 monete. Se esattamente 1 è la testa, il Pokemon in difesa è ormai addormentato. Se esattamente 2 sono teste, il Pokemon in carica è ora confuso. Se tutti e 3 sono teste, il Pokemon in carica è ora paralizzato.",
            pt: "Flip 3 moedas. Se exatamente 1 estiver cabeças, o Pokemon defensor está agora dormindo. Se exatamente 2 são cabeças, o Pokemon atual agora está confuso. Se todos os três são cabeças, o Pokémon atual agora está paralisado.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

};
