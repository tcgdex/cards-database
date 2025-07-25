import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Persian",
         ja: "ペルシャ語",
         fr: "persan",
         de: "persisch",
         es: "persa",
         it: "persiano",
         pt: "persa",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [53],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Surprise Slash",
            ja: "サプライズスラッシュ",
            fr: "Surprise Slash",
            de: "Überraschungsschlitz",
            es: "Sorpresa",
            it: "Sconfun a sorpresa",
            pt: "Surpreenda a barra",
          },
          effect: {
            en: "Flip a coin. If heads, look at your opponent's hand. If he or she has any Trainer cards there, choose 1 of them. You opponent shuffles that card into his or her deck.",
            ja: "コインをひっくり返します。頭の場合は、相手の手を見てください。彼または彼女がそこにトレーナーカードを持っている場合は、それらの1つを選択してください。対戦相手はそのカードを彼または彼女のデッキにシャッフルします。",
            fr: "Retourner une pièce. Si la tête, regardez la main de votre adversaire. S'il a des cartes d'entraînement là-bas, choisissez 1 d'entre eux. Votre adversaire mélange cette carte dans son deck.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, schauen Sie sich die Hand Ihres Gegners an. Wenn er oder sie dort Trainerkarten hat, wählen Sie 1 davon. Ihr Gegner schlurft diese Karte in sein Deck.",
            es: "Voltea una moneda. Si se dirige, mira la mano de tu oponente. Si él o ella tiene tarjetas de entrenador allí, elija 1 de ellas. Usted oponente baraja esa carta en su mazo.",
            it: "Capovolgi una moneta. Se testa, guarda la mano del tuo avversario. Se lui o lei ha delle carte dell'allenatore lì, scegli 1 di esse. Il tuo avversario mescola quella carta nel suo mazzo.",
            pt: "Vire uma moeda. Se as cabeças, olhe para a mão do seu oponente. Se ele ou ela tiver algum cartões de treinador lá, escolha 1 deles. Seu oponente embaralha essa carta em seu deck.",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Lunge",
            ja: "突進",
            fr: "Se précipiter",
            de: "Longe",
            es: "Estocada",
            it: "Affondo",
            pt: "Estocada",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 50,
        },
      ],


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
