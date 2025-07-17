import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Rapidash",
         ja: "Rapidash",
         fr: "Rapide",
         de: "Rapidash",
         es: "Rapas",
         it: "Rapidash",
         pt: "Rapidash",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [78],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Agility",
            ja: "敏ility性",
            fr: "Agilité",
            de: "Beweglichkeit",
            es: "Agilidad",
            it: "Agilità",
            pt: "Agilidade",
          },
          effect: {
            en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Rapidash.",
            ja: "コインをひっくり返します。ヘッドが、相手の次のターン中に、RapidAshに行われた損害を含む攻撃のすべての影響を防ぎます。",
            fr: "Retourner une pièce. Si les têtes, au cours du prochain virage de votre adversaire, empêchent tous les effets des attaques, y compris les dégâts, effectués à Rapidash.",
            de: "Eine Münze drehen. Wenn Köpfe während der nächsten Runde Ihres Gegners alle Auswirkungen von Angriffen, einschließlich Schäden, an Rapidash verhindern.",
            es: "Voltea una moneda. Si las cabezas, durante el próximo turno de tu oponente, evitan que todos los ataques de los ataques, incluido el daño, se hagan a Rapidash.",
            it: "Capovolgi una moneta. Se le teste, durante il prossimo turno dell'avversario, impediscono a tutti gli effetti degli attacchi, inclusi i danni, fatti a Rapidash.",
            pt: "Vire uma moeda. Se as cabeças, durante o próximo turno do seu oponente, impedem todos os efeitos dos ataques, incluindo danos, causados ao Rapidash.",
          },
          damage: 10,
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Gallop",
            ja: "ギャロップ",
            fr: "Galop",
            de: "Galopp",
            es: "Galope",
            it: "Galoppo",
            pt: "Galope",
          },
          effect: {
            en: "Flip a coin. If heads, discard a Fire Energy card attached to Rapidash and this attack does 30 damage plus 20 more damage.",
            ja: "コインをひっくり返します。頭の場合は、Rapidashに取り付けられた消防エネルギーカードを捨ててください。この攻撃は30ダメージに加えて20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, jetez une carte d'énergie d'incendie attachée à Rapidash et cette attaque fait 30 dégâts plus 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, verwerfen Sie eine an Rapidash verbundene Brandenergiekarte, und dieser Angriff schädigt 30 Schäden plus 20 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, deseche una tarjeta de energía de fuego unida a Rapidash y este ataque hace 30 daños más 20 más de daño.",
            it: "Capovolgi una moneta. Se le teste, scartare una carta di energia antincendio attaccata a Rapidash e questo attacco infligge 30 danni più 20 danni.",
            pt: "Vire uma moeda. Se as cabeças, descarte um cartão de energia de incêndio preso ao Rapidash e esse ataque causará 30 danos mais 20 danos.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
