import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Swablu",
         ja: "Swablu",
         fr: "Swablu",
         de: "Swablu",
         es: "Swablu",
         it: "Swablu",
         pt: "Swablu",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [333],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Fluff",
            ja: "綿毛",
            fr: "Duvet",
            de: "Flaum",
            es: "Pelusa",
            it: "Lanugine",
            pt: "Foff",
          },
          effect: {
            en: "Whenever Swablu would be damaged or affected by an opponent's attack and already has at least 1 damage counter on it, flip a coin. If heads, prevent all effects of that attack, including damage, done to Swablu.",
            ja: "Swabluが対戦相手の攻撃によって損傷または影響を受け、すでに少なくとも1つのダメージカウンターがあるときはいつでも、コインをひっくり返します。頭の場合は、Swabluに行われた損害を含む、その攻撃のすべての影響を防ぎます。",
            fr: "Chaque fois que Swablu serait endommagé ou affecté par l'attaque d'un adversaire et a déjà au moins 1 compteur de dégâts dessus, retournez une pièce. Si les têtes, empêchent tous les effets de cette attaque, y compris les dégâts, causés à Swablu.",
            de: "Immer wenn Swablu durch den Angriff eines Gegners beschädigt oder betroffen wäre und bereits mindestens einen Schadenschalter hat, drehen Sie eine Münze. Wenn Sie Köpfe sind, verhindern Sie alle Auswirkungen dieses Angriffs, einschließlich Schäden an Swablu.",
            es: "Cada vez que Swablu sería dañado o afectado por el ataque de un oponente y ya tiene al menos 1 contador de daño, voltea una moneda. Si las cabezas, evitan todos los efectos de ese ataque, incluido el daño, se hacen a Swablu.",
            it: "Ogni volta che Swablu sarebbe danneggiato o influenzato dall'attacco di un avversario e ha già almeno 1 contatore di danni su di esso, capovolgere una moneta. Se le teste, impediscono tutti gli effetti di quell'attacco, incluso il danno, fatto a Swablu.",
            pt: "Sempre que Swablu seria danificado ou afetado pelo ataque de um oponente e já possui pelo menos 1 contador de danos, gire uma moeda. Se as cabeças, impedem todos os efeitos desse ataque, incluindo danos, causados ao Swablu.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Peck",
            ja: "ペック",
            fr: "Picorer",
            de: "Picken",
            es: "Picotear",
            it: "Peck",
            pt: "Peck",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
