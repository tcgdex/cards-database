import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Noctowl",
         ja: "ノクトウル",
         fr: "Noctowl",
         de: "Noctowl",
         es: "Nocto",
         it: "Noctewl",
         pt: "Noctowl",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [164],
      hp: 60,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Glaring Gaze",
            ja: "まぶしい視線",
            fr: "Regard flagrant",
            de: "Getreide Blick",
            es: "Mirada evidente",
            it: "Sguardo evidente",
            pt: "Olhar gritante",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may flip a coin. If heads, look at your opponent's hand. If your opponent has any Trainer cards there, choose 1 of them. Your opponent shuffles that card into his or her deck. This power can't be used if Noctowl is Asleep, Confused, or Paralyzed.",
            ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、相手の手を見てください。対戦相手がそこにトレーナーカードを持っている場合は、そのうち1枚を選択してください。あなたの対戦相手はそのカードを彼または彼女のデッキにシャッフルします。 Noctowlが眠ったり、混乱したり、麻痺している場合、この力は使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez retourner une pièce. Si la tête, regardez la main de votre adversaire. Si votre adversaire a des cartes d'entraînement là-bas, choisissez 1 d'entre eux. Votre adversaire mélange cette carte dans son deck. Ce pouvoir ne peut pas être utilisé si Noctowl est endormi, confus ou paralysé.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Münze umdrehen. Wenn Sie Köpfe haben, schauen Sie sich die Hand Ihres Gegners an. Wenn Ihr Gegner dort Trainerkarten hat, wählen Sie 1 davon. Dein Gegner mischt diese Karte in sein Deck. Diese Kraft kann nicht verwendet werden, wenn Noctowl schläft, verwirrt oder gelähmt ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede voltear una moneda. Si se dirige, mira la mano de tu oponente. Si tu oponente tiene alguna tarjetas de entrenador allí, elija 1 de ellas. Tu oponente baraja esa carta en su mazo. Este poder no se puede usar si Noctowl está dormido, confundido o paralizado.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi capovolgere una moneta. Se testa, guarda la mano del tuo avversario. Se il tuo avversario ha delle carte dell'allenatore lì, scegli 1 di esse. Il tuo avversario mescola quella carta nel suo mazzo. Questa potenza non può essere usata se NocTowwwh è addormentato, confuso o paralizzato.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode virar uma moeda. Se as cabeças, olhe para a mão do seu oponente. Se o seu oponente tiver algum cartões de treinador lá, escolha 1 deles. Seu oponente embaralha essa carta em seu deck. Esse poder não pode ser usado se Noctowl estiver dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Wing Attack",
            ja: "翼攻撃",
            fr: "Attaque d'aile",
            de: "Flügelangriff",
            es: "Ataque del ala",
            it: "Attacco dell'ala",
            pt: "Ataque de asa",
          },
          damage: 30,
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
