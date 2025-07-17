import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Shellder",
         ja: "シェルダー",
         fr: "Chagrin",
         de: "Schellder",
         es: "Cáscara",
         it: "Shellder",
         pt: "Shellder",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [90],
      hp: 30,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Supersonic",
            ja: "超音速",
            fr: "Supersonique",
            de: "Überschall",
            es: "Supersónico",
            it: "Supersonico",
            pt: "Supersônico",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso.",
          },

        },
        {
          cost: ["Water"],
          name: {
            en: "Hide in Shell",
            ja: "シェルを隠します",
            fr: "Cacher en coquille",
            de: "Verstecken Sie sich in Shell",
            es: "Esconderse",
            it: "Nascondersi in Shell",
            pt: "Esconda -se na concha",
          },
          effect: {
            en: "Flip a coin. If heads, prevent all damage done to Shellder during your opponent's next turn. (Any other effects of attacks still happen.)",
            ja: "コインをひっくり返します。頭の場合は、相手の次のターン中にシェルダーに与えられたすべてのダメージを防ぎます。 （攻撃の他の影響はまだ発生しています。）",
            fr: "Retourner une pièce. Si les têtes, évitez tous les dégâts causés à Shellder lors du prochain tour de votre adversaire. (Tout autre effet des attaques se produit.)",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, verhindern Sie alle Schäden, die in der nächsten Kurve Ihres Gegners an Schalpern angerichtet wurden. (Alle anderen Auswirkungen von Angriffen treten immer noch auf.)",
            es: "Voltea una moneda. Si se dirige, evite todo el daño hecho a Shellder durante el próximo turno de su oponente. (Todavía ocurren cualquier otro efecto de los ataques).",
            it: "Capovolgi una moneta. Se le teste, impediscono tutti i danni arrecati a Shellder durante il turno successivo dell'avversario. (Qualsiasi altro effetto degli attacchi si verifica ancora.)",
            pt: "Vire uma moeda. Se as cabeças, impedem todos os danos causados a Shellder durante o próximo turno do seu oponente. (Quaisquer outros efeitos dos ataques ainda acontecem.)",
          },

        },
      ],

      retreat: 1,

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
