import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Altaria",
		'fr-fr': "Altaria",
		'es-es': "Altaria",
		'it-it': "Altaria",
		'pt-br': "Altaria",
		'de-de': "Altaria"
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
		'en-us': "Swablu",
		'fr-fr': "Tylton",
		'es-es': "Swablu",
		'it-it': "Swablu",
		'pt-br': "Swablu",
		'de-de': "Wablu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Song of Echoes",
				'fr-fr': "Écho Mélodique",
				'es-es': "Canción de Ecos",
				'it-it': "Ecocanoro",
				'pt-br': "Som do Eco",
				'de-de': "Echogesang"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Then, draw a number of cards equal to the number of Benched Pokémon (both yours and your opponent's).",
				'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez un nombre de cartes égal au nombre de Pokémon de Banc (les vôtres et ceux de votre adversaire).",
				'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba un número de cartas igual al número de Pokémon en Banca (tanto tuyos como de tu rival).",
				'it-it': "Metti le carte che hai in mano nel tuo mazzo e rimischialo. Poi pesca un numero di carte pari al numero di Pokémon in panchina, sia tuoi che del tuo avversario.",
				'pt-br': "Embaralhe a mão no seu baralho. Em seguida, compre um número de cards igual ao número de Pokémon no Banco (tanto seus quanto do seu oponente).",
				'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend genauso viele Karten, wie sich Pokémon auf der Bank befinden (deiner und der deines Gegners)."
			},

		},
		{
			cost: [
				"Water",
				"Metal",
			],
			name: {
				'en-us': "Midnight Eyes",
				'fr-fr': "Yeux de Minuit",
				'es-es': "Ojos Medianoche",
				'it-it': "Sguardo a Mezzanotte",
				'pt-br': "Olhos da Meia-Noite",
				'de-de': "Mitternachtsaugen"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
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

	description: {
		'en-us': "On sunny days, it flies freely through the sky and blends into the clouds. It sings in a beautiful soprano.",
	},

	thirdParty: {
		cardmarket: 282721,
		tcgplayer: 98089
	}
}

export default card
