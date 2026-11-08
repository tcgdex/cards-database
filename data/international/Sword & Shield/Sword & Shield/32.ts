import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Raboot",
		'fr-fr': "Lapyro",
		'es-es': "Raboot",
		'it-it': "Raboot",
		'pt-br': "Raboot",
		'de-de': "Kickerlo"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Scorbunny",
		'fr-fr': "Flambino",
		'es-es': "Scorbunny",
		'it-it': "Scorbunny",
		'pt-br': "Scorbunny",
		'de-de': "Hopplo"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Flame Charge",
				'fr-fr': "Nitrocharge",
				'es-es': "Nitrocarga",
				'it-it': "Nitrocarica",
				'pt-br': "Ataque de Chamas",
				'de-de': "Nitroladung"
			},
			effect: {
				'en-us': "Search your deck for a Fire Energy card and attach it to this Pokémon. Then, shuffle your deck.",
				'fr-fr': "Cherchez dans votre deck une carte Énergie Fire, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta de Energía Fire y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo una carta Energia Fire e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 carta de Energia Fire no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Fire-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Magnum Kick",
				'fr-fr': "Coup d'Pied Magnum",
				'es-es': "Patada Mágnum",
				'it-it': "Supercalcio",
				'pt-br': "Chute Magnum",
				'de-de': "Magnumtritt"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "It kicks berries right off the branches of trees and then juggles them with its feet, practicing its footwork."
	},

	dexId: [814],

	thirdParty: {
		cardmarket: 436319,
		tcgplayer: 208310
	}
}

export default card
