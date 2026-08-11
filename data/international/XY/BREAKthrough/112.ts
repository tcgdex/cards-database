import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Noivern",
		'fr-fr': "Bruyverne",
		'es-es': "Noivern",
		'it-it': "Noivern",
		'pt-br': "Noivern",
		'de-de': "UHaFnir"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		715,
	],

	hp: 100,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Noibat",
		'fr-fr': "Sonistrelle",
		'es-es': "Noibat",
		'it-it': "Noibat",
		'pt-br': "Noibat",
		'de-de': "eF-eM"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tuning",
				'fr-fr': "Accordage",
				'es-es': "Afinar",
				'it-it': "Sintonizzazione",
				'pt-br': "Afinação",
				'de-de': "Tuning"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand.",
				'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez un nombre de cartes égal au nombre de cartes dans la main de votre adversaire.",
				'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba un número de cartas igual al número de cartas en la mano de tu rival.",
				'it-it': "Metti le carte che hai in mano nel tuo mazzo e rimischialo. Poi pesca un numero di carte pari a quelle che ha in mano il tuo avversario.",
				'pt-br': "Embaralhe a mão no seu baralho. Agora compre o número de cards equivalente ao número de cards na mão do seu oponente.",
				'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend genauso viele Karten, wie dein Gegner auf der Hand hat."
			},

		},
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Air Slash",
				'fr-fr': "Lame d'Air",
				'es-es': "Tajo Aéreo",
				'it-it': "Eterelama",
				'pt-br': "Golpe de Ar",
				'de-de': "Luftschnitt"
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon.",
				'es-es': "Descarta 1 Energía unida a este Pokémon.",
				'it-it': "Scarta un'Energia assegnata a questo Pokémon.",
				'pt-br': "Descarte uma Energia ligada a este Pokémon.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 120,

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
		'en-us': "The ultrasonic waves it emits from its ears can reduce a large boulder to pebbles. It emerges out of the dark to attack.",
	},

	thirdParty: {
		cardmarket: 286358,
		tcgplayer: 107231
	}
}

export default card
