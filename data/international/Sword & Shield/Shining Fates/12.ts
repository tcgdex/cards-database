import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [811],
	set: Set,

	name: {
		'fr-fr': "Badabouin",
		'en-us': "Thwackey",
		'es-es': "Thwackey",
		'it-it': "Thwackey",
		'pt-br': "Thwackey",
		'de-de': "Chimstix"
	},

	illustrator: "0313",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'fr-fr': "Ouistempo",
		'en-us': "Grookey"
	},

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Avantage du Terrain",
			'en-us': "Lay of the Land",
			'es-es': "Dominio del Terreno",
			'it-it': "Dominio del Territorio",
			'pt-br': "Dono do Pedaço",
			'de-de': "Ortskunde"
		},

		effect: {
			'fr-fr': "Si vous avez un Stade en jeu, ce Pokémon n'a pas de Coût de Retraite.",
			'en-us': "If you have a Stadium in play, this Pokémon has no Retreat Cost.",
			'es-es': "Si tienes un Estadio en juego, este Pokémon no tiene ningún Coste de Retirada.",
			'it-it': "Se hai in gioco una carta Stadio, questo Pokémon non ha costo di ritirata.",
			'pt-br': "Se você tiver um Estádio em jogo, este Pokémon não terá custo de Recuo.",
			'de-de': "Wenn du eine Stadionkarte im Spiel hast, hat dieses Pokémon keine Rückzugskosten."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Tapotige",
			'en-us': "Branch Poke",
			'es-es': "Punzada Rama",
			'it-it': "Ramostoccata",
			'pt-br': "Cutucada com Galho",
			'de-de': "Zweigstoß"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "The faster a Thwackey can beat out a rhythm with its two sticks, the more respect it wins from its peers."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 539083,
				tcgplayer: 232386
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539083,
				tcgplayer: 232386
			}
		},
	],
}

export default card
