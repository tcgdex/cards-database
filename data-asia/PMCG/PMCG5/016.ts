import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Rocket's Scyther",
         ja: "ロケットのスキタイヤー",
         fr: "Scyther de Rocket",
         de: "Rocket's Scyther",
         es: "Scyther de cohete",
         it: "Rocket's Scither",
         pt: "Scyther do foguete",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [123],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Shadow Images",
            ja: "影の画像",
            fr: "Images d'ombre",
            de: "Schattenbilder",
            es: "Imágenes de sombra",
            it: "Immagini ombra",
            pt: "Imagens de sombra",
          },
          effect: {
            en: "Whenever Rocket's Scyther is attacked, your opponent flips a coin. If tails, that attack does no damage to Rocket's Scyther. (Any other effects of the attack still happen.) This effect lasts until Rocket's Scyther takes damage (or is Benched or is evolved).",
            ja: "RocketのScytherが攻撃されるたびに、相手はコインをひっくり返します。尾の場合、その攻撃はロケットのスキタイヤーにダメージを与えません。 （攻撃の他の効果はまだ発生します。）この効果は、ロケットのスキーターがダメージを受けるまで続きます（またはベンチにされるか、進化します）。",
            fr: "Chaque fois que Scyther de Rocket est attaqué, votre adversaire retourne une pièce. Si Tails, cette attaque ne fait aucun dégât au Scyther de Rocket. (Tout autre effet de l'attaque se produit toujours.) Cet effet dure jusqu'à ce que le scyther de Rocket subisse des dégâts (ou est bancaire ou évolue).",
            de: "Immer wenn Rockets Scyther angegriffen wird, dreht Ihr Gegner eine Münze um. Wenn Schwänze, verursacht dieser Angriff keinen Schaden an Rockets Scyther. (Alle anderen Auswirkungen des Angriffs treten immer noch auf.) Dieser Effekt dauert, bis Rockets Scyther Schaden annimmt (oder auf der Bank oder des weiterentwickelten).",
            es: "Cada vez que se ataca al Scyther de Rocket, tu oponente voltea una moneda. Si Tails, ese ataque no da daño a la Scyther de Rocket. (Cualquier otro efecto del ataque todavía ocurre). Este efecto dura hasta que el Scyther de Rocket recibe daño (o está en banca o evoluciona).",
            it: "Ogni volta che il razzo viene attaccato, il tuo avversario lancia una moneta. Se la coda, quell'attacco non fa danni alla Scither di Rocket. (Qualsiasi altro effetto dell'attacco si verifica ancora.) Questo effetto dura fino a quando il razzo non subisce danni (o viene in panchina o si evolve).",
            pt: "Sempre que o Scyther do Rocket é atacado, seu oponente vira uma moeda. Se caudas, esse ataque não causa danos ao citador do Rocket. (Quaisquer outros efeitos do ataque ainda ocorrem.) Esse efeito dura até que o Scyther do Rocket sofra dano (ou seja bancado ou evoluído).",
          },
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            en: "Blinding Scythe",
            ja: "裂け目",
            fr: "Scythe aveuglant",
            de: "Blendende Sense",
            es: "Guadaña cegadora",
            it: "Bracking Scythe",
            pt: "Cegando foice",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
