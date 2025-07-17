import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Meowth",
         ja: "meowth",
         fr: "Miaulement",
         de: "Meowth",
         es: "Maullido",
         it: "Meowth",
         pt: "MEOWTH",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [52],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Sudden Swipe",
            ja: "突然スワイプ",
            fr: "Coup soudain",
            de: "Plötzlich streift",
            es: "Golpe repentino",
            it: "Swipe improvviso",
            pt: "Deslize repentino",
          },
          effect: {
            en: "Flip a coin. If heads, look at your opponent's hand. If he or she has any Energy cards there, choose 1 of them. Your opponent shuffles that card into his or her deck.",
            ja: "コインをひっくり返します。頭の場合は、相手の手を見てください。彼または彼女がそこにエネルギーカードを持っている場合は、それらの1つを選択してください。あなたの対戦相手はそのカードを彼または彼女のデッキにシャッフルします。",
            fr: "Retourner une pièce. Si la tête, regardez la main de votre adversaire. S'il a des cartes d'énergie là-bas, choisissez 1 d'entre eux. Votre adversaire mélange cette carte dans son deck.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, schauen Sie sich die Hand Ihres Gegners an. Wenn er oder sie dort Energiekarten hat, wählen Sie 1 davon. Dein Gegner mischt diese Karte in sein Deck.",
            es: "Voltea una moneda. Si se dirige, mira la mano de tu oponente. Si él o ella tiene alguna tarjeta de energía allí, elija 1 de ellas. Tu oponente baraja esa carta en su mazo.",
            it: "Capovolgi una moneta. Se testa, guarda la mano del tuo avversario. Se lui o lei ha delle carte energetiche lì, scegli 1 di esse. Il tuo avversario mescola quella carta nel suo mazzo.",
            pt: "Vire uma moeda. Se as cabeças, olhe para a mão do seu oponente. Se ele ou ela tiver cartas de energia lá, escolha 1 delas. Seu oponente embaralha essa carta em seu deck.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

};
