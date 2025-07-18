import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "Gengar",
         ja: "ジェンガー",
         fr: "Gengar",
         de: "Gengar",
         es: "Gengar",
         it: "Gengar",
         pt: "Gengar",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [94],
      hp: 80,
      types: ["Psychic"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Power of Darkness",
            ja: "闇の力",
            fr: "Pouvoir de l'obscurité",
            de: "Kraft der Dunkelheit",
            es: "Poder de la oscuridad",
            it: "Potere dell'oscurità",
            pt: "Poder da escuridão",
          },
          effect: {
            en: "Once during your turn, when you play Gengar from your hand to evolve 1 of your Pokémon, you may flip a coin. If heads, choose 1 of your opponent's Pokémon. Your opponent returns that Pokémon and all cards attached to it to his or her hand.",
            ja: "ターン中に、あなたの手からジェンガーを演奏してポケモンの1つを進化させると、コインをひっくり返すことができます。頭の場合は、対戦相手のポケモンの1つを選択します。相手はそのポケモンとそれに取り付けられたすべてのカードを彼または彼女の手に返します。",
            fr: "Une fois pendant votre tour, lorsque vous jouez Gengar de votre main pour évoluer 1 de votre Pokémon, vous pouvez retourner une pièce. Si les têtes, choisissez un des Pokémon de votre adversaire. Votre adversaire renvoie ce Pokémon et toutes les cartes qui y sont attachées à sa main.",
            de: "Sobald Sie während Ihres Zuges Gengar von Ihrer Hand spielen, um 1 Ihres Pokémons zu entwickeln, können Sie eine Münze umdrehen. Wenn Sie Köpfe haben, wählen Sie 1 der Pokémon Ihres Gegners. Ihr Gegner kehrt das Pokémon und alle Karten an, die an seiner Hand angeschlossen sind.",
            es: "Una vez durante su turno, cuando juegas a Gengar de tu mano para evolucionar 1 de tus Pokémon, puedes voltear una moneda. Si se dirige, elija 1 de los Pokémon de tu oponente. Tu oponente devuelve ese Pokémon y todas las cartas adjuntas a su mano.",
            it: "Una volta durante il tuo turno, quando giochi a Gengar dalla tua mano per evolvere 1 dei tuoi Pokémon, puoi capovolgere una moneta. Se la testa, scegli 1 dei Pokémon del tuo avversario. Il tuo avversario restituisce quel Pokémon e tutte le carte attaccate alla sua mano.",
            pt: "Uma vez durante o seu turno, quando você toca Gengar da sua mão para evoluir 1 do seu Pokémon, você pode virar uma moeda. Se as cabeças, escolha 1 dos Pokémon do seu oponente. Seu oponente retorna esse Pokémon e todas as cartas anexadas a ele à mão dele.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Psychic", "Psychic"],
          name: {
            en: "Psy Horror",
            ja: "PSYホラー",
            fr: "Horreur psy",
            de: "Psy Horror",
            es: "Psy Horror",
            it: "Psy Horror",
            pt: "PSY Horror",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Asleep. If tails, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは今眠っています。尾の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si la tête, le Pokémon en défense est maintenant endormi. Si Tails, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Köpfe, schläft das verteidigende Pokemon jetzt. Wenn Schwänze, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está dormido. Si Tails, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora addormentato. Se le code, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está dormindo. Se o cauda, o pokemon atual agora está confuso.",
          },
          damage: 30,
        },
      ],

      retreat: 2,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
