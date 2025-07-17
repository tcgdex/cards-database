import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Diglett",
         ja: "ディグレット",
         fr: "Diglett",
         de: "Diglett",
         es: "Diglett",
         it: "Diglett",
         pt: "Diglett",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [50],
      hp: 40,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Burrow",
            ja: "バロウ",
            fr: "Terrier",
            de: "Bau",
            es: "Madriguera",
            it: "Tana",
            pt: "Toca",
          },
          effect: {
            en: "Flip a coin. If heads, prevent all damage done by attacks to Diglett during your opponent's next turn. (Any other effects of attacks still happen.)",
            ja: "コインをひっくり返します。頭の場合は、相手の次のターン中に攻撃によってDiglettへのすべての損害を防ぎます。 （攻撃の他の影響はまだ発生しています。）",
            fr: "Retourner une pièce. Si les têtes, empêchent tous les dégâts causés par les attaques à Diglett lors du prochain tour de votre adversaire. (Tout autre effet des attaques se produit.)",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, verhindern Sie alle Schäden durch Angriffe an Diglett während der nächsten Kurve Ihres Gegners. (Alle anderen Auswirkungen von Angriffen treten immer noch auf.)",
            es: "Voltea una moneda. Si se dirige, evite todo el daño causado por ataques a Diglett durante el próximo turno de tu oponente. (Todavía ocurren cualquier otro efecto de los ataques).",
            it: "Capovolgi una moneta. Se le teste, impediscono tutti i danni causati dagli attacchi a Diglett durante il turno successivo dell'avversario. (Qualsiasi altro effetto degli attacchi si verifica ancora.)",
            pt: "Vire uma moeda. Se as cabeças, impedem todos os danos causados por ataques a Diglett durante o próximo turno do seu oponente. (Quaisquer outros efeitos dos ataques ainda acontecem.)",
          },
          damage: 10,
        },
      ],

      retreat: 1,

};
