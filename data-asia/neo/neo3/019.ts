import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Octillery",
         ja: "オクリリー",
         fr: "Octillerie",
         de: "Oktillerie",
         es: "Octillería",
         it: "Octillery",
         pt: "OCTLLERY",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [224],
      hp: 80,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Constrict",
            ja: "収縮します",
            fr: "Se limiter",
            de: "Verengen",
            es: "Apretar",
            it: "Restringere",
            pt: "Contrair",
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
          cost: ["Water", "Water", "Water"],
          name: {
            en: "Octazooka",
            ja: "オタスーカ",
            fr: "Octazooka",
            de: "Octazooka",
            es: "Octazooka",
            it: "Octazooka",
            pt: "Octazaoka",
          },
          effect: {
            en: "Flip a coin. If heads, whenever the Defending Pokemon attacks, your opponent flips a coin. If tails, that attack does nothing. (Benching or evolving that Pokemon ends this effect.)",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンが攻撃するたびに、相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。 （ポケモンがこの効果を終了するというベンチまたは進化。）",
            fr: "Retourner une pièce. Si les têtes, chaque fois que les Pokémon en défense attaque, votre adversaire retourne une pièce. Si Tails, cette attaque ne fait rien. (Banc ou évolution de ce pokemon termine cet effet.)",
            de: "Eine Münze drehen. Wenn der Köpfe, wenn der verteidigende Pokemon angreift, dreht Ihr Gegner eine Münze. Wenn Schwänze, tut dieser Angriff nichts. (Beulen oder Weiterentwicklung dieses Pokemon beendet diesen Effekt.)",
            es: "Voltea una moneda. Si se dirige, cada vez que el Pokémon defensor ataca, tu oponente voltea una moneda. Si Tails, ese ataque no hace nada. (Benching o evolucionando que Pokémon termina este efecto).",
            it: "Capovolgi una moneta. Se la testa, ogni volta che il Pokemon in carica attacca, il tuo avversario lancia una moneta. Se la coda, quell'attacco non fa nulla. (Da banco o in evoluzione che Pokemon termina questo effetto.)",
            pt: "Vire uma moeda. Se as cabeças, sempre que o pokemon defensor ataca, seu oponente vira uma moeda. Se caudas, esse ataque não faz nada. (Bancho ou evolução que Pokemon termina esse efeito.)",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
