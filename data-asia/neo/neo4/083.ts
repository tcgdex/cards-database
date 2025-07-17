import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Scizor",
         ja: "ダークシゾール",
         fr: "Scizor sombre",
         de: "Dunkler Scizor",
         es: "Oscuro",
         it: "Dark Scizor",
         pt: "Dark Scizor",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [212],
      hp: 70,
      types: ["Metal"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Threaten",
            ja: "脅かす",
            fr: "Menacer",
            de: "Drohen",
            es: "Amenazar",
            it: "Minacciare",
            pt: "Ameaçar",
          },
          effect: {
            en: "Flip a coin. If heads, look at your opponent's hand. If he or she has any Trainer cards there, choose 1 of them. Your opponent shuffles that card into his or her deck.",
            ja: "コインをひっくり返します。頭の場合は、相手の手を見てください。彼または彼女がそこにトレーナーカードを持っている場合は、それらの1つを選択してください。あなたの対戦相手はそのカードを彼または彼女のデッキにシャッフルします。",
            fr: "Retourner une pièce. Si la tête, regardez la main de votre adversaire. S'il a des cartes d'entraînement là-bas, choisissez 1 d'entre eux. Votre adversaire mélange cette carte dans son deck.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, schauen Sie sich die Hand Ihres Gegners an. Wenn er oder sie dort Trainerkarten hat, wählen Sie 1 davon. Dein Gegner mischt diese Karte in sein Deck.",
            es: "Voltea una moneda. Si se dirige, mira la mano de tu oponente. Si él o ella tiene tarjetas de entrenador allí, elija 1 de ellas. Tu oponente baraja esa carta en su mazo.",
            it: "Capovolgi una moneta. Se testa, guarda la mano del tuo avversario. Se lui o lei ha delle carte dell'allenatore lì, scegli 1 di esse. Il tuo avversario mescola quella carta nel suo mazzo.",
            pt: "Vire uma moeda. Se as cabeças, olhe para a mão do seu oponente. Se ele ou ela tiver algum cartões de treinador lá, escolha 1 deles. Seu oponente embaralha essa carta em seu deck.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Slash",
            ja: "スラッシュ",
            fr: "Sabrer",
            de: "Schrägstrich",
            es: "Barra oblicua",
            it: "Barra",
            pt: "Slash",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
