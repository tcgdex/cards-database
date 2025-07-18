import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Shelgon",
         ja: "シェルゴン",
         fr: "Shelgon",
         de: "Shelgon",
         es: "Shelgon",
         it: "Shelgon",
         pt: "Shelgon",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [372],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Scrunch",
            ja: "スクランチ",
            fr: "Frotter",
            de: "Scrunch",
            es: "Crujir",
            it: "Scricchiolio",
            pt: "Scrunch",
          },
          effect: {
            en: "Flip a coin. If heads, prevent all damage done to Shelgon during your opponent's next turn. (Any other effects of attacks still happen.)",
            ja: "コインをひっくり返します。頭の場合は、対戦相手の次のターン中にシェルゴンにすべてのダメージを与えないようにします。 （攻撃の他の影響はまだ発生しています。）",
            fr: "Retourner une pièce. Si les têtes, empêchent tous les dommages causés à Shelgon lors du prochain tour de votre adversaire. (Tout autre effet des attaques se produit.)",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, verhindern Sie alle Schäden, die Shelgon während der nächsten Kurve Ihres Gegners angerichtet haben. (Alle anderen Auswirkungen von Angriffen treten immer noch auf.)",
            es: "Voltea una moneda. Si se dirige, evite todo el daño causado a Shelgon durante el próximo turno de su oponente. (Todavía ocurren cualquier otro efecto de los ataques).",
            it: "Capovolgi una moneta. Se le teste, impediscono tutti i danni arrecati a Shelgon durante il prossimo turno dell'avversario. (Qualsiasi altro effetto degli attacchi si verifica ancora.)",
            pt: "Vire uma moeda. Se as cabeças, impedem todos os danos causados a Shelgon durante o próximo turno do seu oponente. (Quaisquer outros efeitos dos ataques ainda acontecem.)",
          },
        },
        {
          cost: ["Fire", "Water", "Colorless"],
          name: {
            en: "Rolling Attack",
            ja: "ローリング攻撃",
            fr: "Attaque roulante",
            de: "Rolling -Angriff",
            es: "Ataque rodante",
            it: "Attacco rotolante",
            pt: "Ataque de rolamento",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
