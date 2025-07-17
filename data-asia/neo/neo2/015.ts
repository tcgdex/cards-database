import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Wooper",
         ja: "ウーパー",
         fr: "Wooper",
         de: "Wooper",
         es: "Wooper",
         it: "Wooper",
         pt: "Wooper",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [194],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Slime",
            ja: "スライム",
            fr: "Vase",
            de: "Schleim",
            es: "Limo",
            it: "Melma",
            pt: "Lodo",
          },
          effect: {
            en: "If an attack would do damage to Wooper during your opponent's next turn, your opponent flips a coin. If tails, prevent all damage to Wooper from that attack. (Any other effects of that attack happen.)",
            ja: "対戦相手の次のターン中に攻撃がWooperにダメージを与える場合、対戦相手はコインをひっくり返します。尾の場合、その攻撃からWooperへのすべての損傷を防ぎます。 （その攻撃の他の効果はすべて発生します。）",
            fr: "Si une attaque faisait des dégâts à Wooper lors du prochain tour de votre adversaire, votre adversaire retourne une pièce. Si Tails, empêchez tous les dommages à Wooper de cette attaque. (Tout autre effet de cette attaque se produit.)",
            de: "Wenn ein Angriff Wooper während der nächsten Runde Ihres Gegners beschädigt würde, dreht Ihr Gegner eine Münze. Wenn Schwänze, verhindern Sie, dass Wooper diesen Angriff beschädigt. (Alle anderen Auswirkungen dieses Angriffs ereignen sich.)",
            es: "Si un ataque le dañaría a Wooper durante el próximo turno de tu oponente, tu oponente voltea una moneda. Si las colas, evitan todo el daño a Wooper por ese ataque. (Cualquier otro efecto de ese ataque ocurre).",
            it: "Se un attacco infliggesse danni a Wooper durante il prossimo turno dell'avversario, il tuo avversario lancia una moneta. Se coda, impedire tutti i danni a Wooper da quell'attacco. (Qualsiasi altro effetto di quell'attacco accade.)",
            pt: "Se um ataque causaria danos a Wooper durante o próximo turno do seu oponente, seu oponente vira uma moeda. Se a cauda, evite que todos os danos a Wooper desse ataque. (Quaisquer outros efeitos desse ataque acontecerem.)",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Tail Slap",
            ja: "テールスラップ",
            fr: "Gifle",
            de: "Schwanzschlag",
            es: "Bofetada",
            it: "Slap di coda",
            pt: "Tail Slap",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
