import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Spheal",
         ja: "スフィアル",
         fr: "Sphoal",
         de: "Spheal",
         es: "Esfera",
         it: "Sfeal",
         pt: "Speal",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [363],
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
            en: "Flip a coin. If heads, prevent all damage done to Spheal during your opponent's next turn.",
            ja: "コインをひっくり返します。頭の場合は、相手の次のターン中にすべてのダメージがスフィアルに与えられたことを防ぎます。",
            fr: "Retourner une pièce. Si les têtes, empêchent tous les dommages causés à la sphérique pendant le prochain tour de votre adversaire.",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, verhindern Sie alle Schäden, die Spheal während der nächsten Kurve Ihres Gegners angerichtet haben.",
            es: "Voltea una moneda. Si se dirige, evite todo el daño hecho a Spheal durante el próximo turno de tu oponente.",
            it: "Capovolgi una moneta. Se le teste, impediscono a tutti i danni fatti per sfruttare durante il turno successivo dell'avversario.",
            pt: "Vire uma moeda. Se as cabeças, impedem que todos os danos causados ao SPHEAL durante o próximo turno do seu oponente.",
          },
        },
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Aurora Beam",
            ja: "オーロラビーム",
            fr: "Faisceau auroré",
            de: "Aurora Strahl",
            es: "Haz de aurora",
            it: "Raggio di aurora",
            pt: "Feixe de aurora",
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
