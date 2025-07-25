import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Gengar ex",
         ja: "Gengar Ex",
         fr: "Gengar Ex",
         de: "Gengar ex",
         es: "Gengar ex",
         it: "Gengar Ex",
         pt: "Gengar Ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [94],
      hp: 150,
      types: ["Psychic"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Poltergeist",
            ja: "ポルターガイスト",
            fr: "Esprit frappeur",
            de: "Poltergeist",
            es: "Duende",
            it: "Poltergeist",
            pt: "Poltergeist",
          },
          effect: {
            en: "Look at your opponent's hand. This attack does 40 damage plus 10 more damage for each Trainer card in your opponent's hand.",
            ja: "相手の手を見てください。この攻撃は、相手の手の中の各トレーナーカードに対して40のダメージと10ダメージを与えます。",
            fr: "Regardez la main de votre adversaire. Cette attaque fait 40 dégâts plus 10 dégâts supplémentaires pour chaque carte d'entraînement dans la main de votre adversaire.",
            de: "Schauen Sie sich die Hand Ihres Gegners an. Dieser Angriff verursacht 40 Schäden plus 10 weitere Schäden für jede Trainerkarte in der Hand Ihres Gegners.",
            es: "Mira la mano de tu oponente. Este ataque hace 40 daños más 10 daños más para cada carta de entrenador en la mano de tu oponente.",
            it: "Guarda la mano del tuo avversario. Questo attacco infligge 40 danni più 10 danni in più per ogni carta dell'allenatore nella mano dell'avversario.",
            pt: "Olhe para a mão do seu oponente. Este ataque causa 40 danos mais 10 mais danos para cada cartão de treinador na mão do seu oponente.",
          },
        },
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
            en: "Prize Count",
            ja: "賞金",
            fr: "Décompte",
            de: "Preisanzahl",
            es: "Conteo de premios",
            it: "Conteggio dei premi",
            pt: "Contagem de prêmios",
          },
          effect: {
            en: "If you have more Prize cards left than your opponent, this attack does 60 damage plus 40 more damage.",
            ja: "対戦相手よりも多くの賞品が残っている場合、この攻撃は60ダメージに加えて40ダメージを与えます。",
            fr: "S'il vous reste plus de cartes de prix que votre adversaire, cette attaque fait 60 dégâts plus 40 dégâts de plus.",
            de: "Wenn Sie mehr Preiskarten übrig haben als Ihr Gegner, verursacht dieser Angriff 60 Schaden zuzüglich 40 mehr Schaden.",
            es: "Si te quedan más cartas de premios que tu oponente, este ataque hace 60 daños más 40 daños más.",
            it: "Se hai più carte premiate rispetto al tuo avversario, questo attacco infligge 60 danni più 40 danni.",
            pt: "Se você tiver mais cartões de prêmios que o seu oponente, esse ataque causará 60 danos mais 40 mais danos.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
