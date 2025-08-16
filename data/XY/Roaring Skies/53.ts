import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Altaria",
		fr: "Altaria",
		es: "Altaria",
		it: "Altaria",
		pt: "Altaria",
		de: "Altaria"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		334,
	],

	hp: 80,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Swablu",
		fr: "Tylton",
		es: "Swablu",
		it: "Swablu",
		pt: "Swablu",
		de: "Wablu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Song of Echoes",
				fr: "Écho Mélodique",
				es: "Canción de Ecos",
				it: "Ecocanoro",
				pt: "Som do Eco",
				de: "Echogesang"
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw a number of cards equal to the number of Benched Pokémon (both yours and your opponent's).",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez un nombre de cartes égal au nombre de Pokémon de Banc (les vôtres et ceux de votre adversaire).",
				es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba un número de cartas igual al número de Pokémon en Banca (tanto tuyos como de tu rival).",
				it: "Metti le carte che hai in mano nel tuo mazzo e rimischialo. Poi pesca un numero di carte pari al numero di Pokémon in panchina, sia tuoi che del tuo avversario.",
				pt: "Embaralhe a mão no seu baralho. Em seguida, compre um número de cards igual ao número de Pokémon no Banco (tanto seus quanto do seu oponente).",
				de: "Mische deine Handkarten in dein Deck. Ziehe anschließend genauso viele Karten, wie sich Pokémon auf der Bank befinden (deiner und der deines Gegners)."
			},

		},
		{
			cost: [
				"Water",
				"Metal",
			],
			name: {
				en: "Midnight Eyes",
				fr: "Yeux de Minuit",
				es: "Ojos Medianoche",
				it: "Sguardo a Mezzanotte",
				pt: "Olhos da Meia-Noite",
				de: "Mitternachtsaugen"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 282721,
		tcgplayer: 98089
	}
}

export default card
