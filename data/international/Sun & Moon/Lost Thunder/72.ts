import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Electivire",
		'fr-fr': "Élekable",
		'es-es': "Electivire",
		'it-it': "Electivire",
		'pt-br': "Electivire",
		'de-de': "Elevoltek"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		466,
	],

	hp: 140,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Electabuzz",
		'fr-fr': "Élektek",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Electrocharge",
				'fr-fr': "Électrocharge",
				'es-es': "Electrocarga",
				'it-it': "Carica Voltaica",
				'pt-br': "Eletrocarga",
				'de-de': "Elektroladung"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Lightning Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
				'fr-fr': "Cherchez jusqu’à 2 cartes Énergie Lightning dans votre deck et attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 cartas de Energía Lightning y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a due carte Energia Lightning e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 2 cartas de Energia Lightning no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Lightning-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "High-Voltage Knuckle",
				'fr-fr': "Poing Haute Tension",
				'es-es': "Nudillo Alto Voltaje",
				'it-it': "Pugno Folgorante",
				'pt-br': "Punho de Alta Voltagem",
				'de-de': "Starkstromfaust"
			},
			effect: {
				'en-us': "Discard 3 Energy from this Pokémon.",
				'fr-fr': "Défaussez 3 Énergies de ce Pokémon.",
				'es-es': "Descarta 3 Energías de este Pokémon.",
				'it-it': "Scarta tre Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte 3 Energias deste Pokémon.",
				'de-de': "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 190,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "When it gets excited, it thumps its chest. With every thud, thunder roars and electric sparks shower all around.",
	},

	thirdParty: {
		cardmarket: 365710,
		tcgplayer: 178881
	}
}

export default card
