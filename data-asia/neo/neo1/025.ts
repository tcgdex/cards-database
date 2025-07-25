import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Marill",
         ja: "マリル",
         fr: "Marille",
         de: "Marill",
         es: "Marillero",
         it: "Marill",
         pt: "Marill",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [183],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Defense Curl",
            ja: "防衛カール",
            fr: "Curl de défense",
            de: "Verteidigung Curl",
            es: "Rizo de defensa",
            it: "Curl di difesa",
            pt: "Curl de defesa",
          },
          effect: {
            en: "Flip a coin. If heads, prevent all damage done to Marill during your opponent's next turn. (Any other effects of attacks still happen.)",
            ja: "コインをひっくり返します。頭の場合は、対戦相手の次のターン中にマリルにすべてのダメージを与えないようにします。 （攻撃の他の影響はまだ発生しています。）",
            fr: "Retourner une pièce. Si les têtes, empêchent tous les dommages causés à Marill lors du prochain tour de votre adversaire. (Tout autre effet des attaques se produit.)",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, verhindern Sie alle Schäden, die Marill während der nächsten Kurve Ihres Gegners angerichtet haben. (Alle anderen Auswirkungen von Angriffen treten immer noch auf.)",
            es: "Voltea una moneda. Si se dirige, evite todo el daño hecho a Marill durante el próximo turno de su oponente. (Todavía ocurren cualquier otro efecto de los ataques).",
            it: "Capovolgi una moneta. Se le teste, impediscono tutti i danni fatti a Marill durante il prossimo turno dell'avversario. (Qualsiasi altro effetto degli attacchi si verifica ancora.)",
            pt: "Vire uma moeda. Se as cabeças, impedem todos os danos causados a Marill durante o próximo turno do seu oponente. (Quaisquer outros efeitos dos ataques ainda acontecem.)",
          },
        },
        {
          cost: ["Water", "Water"],
          name: {
            en: "Bubble Bomb",
            ja: "バブル爆弾",
            fr: "Bombe à bulles",
            de: "Bubble Bomb",
            es: "Bomba",
            it: "Bomba a bolle",
            pt: "Bomba de bolha",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed. If tails, Marill does 10 damage to itself.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。テールの場合、マリルはそれ自体に10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé. Si Tails, Marill se fait 10 dégâts.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt. Wenn Schwänze, verursacht Marill 10 Schäden an sich.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado. Si Tails, Marill hace 10 daños a sí mismo.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato. Se code, Marill fa 10 danni a se stesso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado. Se a cauda, Marill causa 10 danos a si mesmo.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
