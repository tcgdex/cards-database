import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [814],
	set: Set,

	name: {
		'fr-fr': "Lapyro",
		'en-us': "Raboot",
		'es-es': "Raboot",
		'it-it': "Raboot",
		'pt-br': "Raboot",
		'de-de': "Kickerlo"
	},

	illustrator: "Lee HyunJung",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		'fr-fr': "Flambino",
		'en-us': "Scorbunny"
	},

	attacks: [{
		name: {
			'fr-fr': "Nitrocharge",
			'en-us': "Flame Charge",
			'es-es': "Nitrocarga",
			'it-it': "Nitrocarica",
			'pt-br': "Ataque de Chamas",
			'de-de': "Nitroladung"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck une carte Énergie Fire, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			'en-us': "Search your deck for a Fire Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			'es-es': "Busca en tu baraja 1 carta de Energía Fire y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta Energia Fire e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por 1 carta de Energia Fire no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Fire-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			'fr-fr': "Coup d'Pied Magnum",
			'en-us': "Magnum Kick",
			'es-es': "Patada Mágnum",
			'it-it': "Supercalcio",
			'pt-br': "Chute Magnum",
			'de-de': "Magnumtritt"
		},

		damage: 70,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "It kicks berries right off the branches of trees and then juggles them with its feet, practicing its footwork."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539468,
				tcgplayer: 232363
			}
		},
	],
}

export default card
