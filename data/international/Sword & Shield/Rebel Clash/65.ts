import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [737],

	name: {
		'en-us': "Charjabug",
		'fr-fr': "Chrysapile",
		'es-es': "Charjabug",
		'it-it': "Charjabug",
		'pt-br': "Charjabug",
		'de-de': "Akkup"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Grubbin",
		'fr-fr': "Larvibule",
		'es-es': "Grubbin",
		'it-it': "Grubbin",
		'pt-br': "Grubbin",
		'de-de': "Mabula"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Charge",
				'fr-fr': "Chargeur",
				'es-es': "Carga",
				'it-it': "Sottocarica",
				'pt-br': "Carga",
				'de-de': "Ladevorgang"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Lightning Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
				'fr-fr': "Cherchez jusqu'à 2 cartes Énergie Lightning dans votre deck, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
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
				"Colorless",
			],
			name: {
				'en-us': "Lightning Ball",
				'fr-fr': "Boule Éclair",
				'es-es': "Bola Relámpago",
				'it-it': "Fulminpalla",
				'pt-br': "Bola de Raios",
				'de-de': "Kugelblitz"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 90,
	types: ["Lightning"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "While its durable shell protects it from attacks, Charjabug strikes at enemies with jolts of electricity discharged from the tips of its jaws."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457758,
				tcgplayer: 213148
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457758,
				tcgplayer: 213148
			}
		},
	],
}

export default card
