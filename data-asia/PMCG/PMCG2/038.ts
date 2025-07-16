import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Fearow",
         ja: "恐れて",
         fr: "Fearow",
         de: "Fearow",
         es: "Ferow",
         it: "Fearow",
         pt: "Fearow",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [22],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
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
            en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Fearow.",
            ja: "コインをひっくり返します。ヘッドが、相手の次のターン中に、Fearowに行われた損害を含む攻撃のすべての影響を防ぎます。",
            fr: "Retourner une pièce. Si les têtes, au cours du prochain tour de votre adversaire, empêchent tous les effets des attaques, y compris les dégâts, faites à Fearow.",
            de: "Eine Münze drehen. Wenn die Köpfe während der nächsten Runde Ihres Gegners alle Auswirkungen von Angriffen, einschließlich Schäden an Fearow, verhindern.",
            es: "Voltea una moneda. Si las cabezas, durante el próximo turno de tu oponente, evitan que todos los efectos de los ataques, incluido el daño, se hagan a Fearow.",
            it: "Capovolgi una moneta. Se le teste, durante il prossimo turno dell'avversario, impediscono a tutti gli effetti degli attacchi, inclusi i danni, fatti a Fearow.",
            pt: "Vire uma moeda. Se as cabeças, durante o próximo turno do seu oponente, impedem todos os efeitos dos ataques, incluindo danos, causados a Fearow.",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Drill Peck",
            ja: "ドリルペック",
            fr: "Percez",
            de: "Bohrer Peck",
            es: "Bisagro",
            it: "Drill Peck",
            pt: "Peck de perfuração",
          },
          damage: 40,
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
