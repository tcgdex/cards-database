import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [59],

	name: {
		'en-us': "Arcanine",
		'fr-fr': "Arcanin",
		'es-es': "Arcanine",
		'it-it': "Arcanine",
		'pt-br': "Arcanine",
		'de-de': "Arkani"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos",
		'es-es': "Growlithe",
		'it-it': "Growlithe",
		'pt-br': "Growlithe",
		'de-de': "Fukano"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Warming Up",
				'fr-fr': "Réchauffement",
				'es-es': "Calentamiento",
				'it-it': "Scaldarsi",
				'pt-br': "Aquecimento",
				'de-de': "Aufwärmen"
			},
			effect: {
				'en-us': "If this Pokémon has a Burning Scarf attached, it gets +100 HP.",
				'fr-fr': "Si un Bandana Brûlant est attaché à ce Pokémon, il reçoit +100 PV.",
				'es-es': "Si este Pokémon tiene 1 Bandana Ardiente unida a él, obtiene 100 PS más.",
				'it-it': "Se questo Pokémon ha una carta Bandana Ardente assegnata, ha 100 PS in più.",
				'pt-br': "Se este Pokémon tiver 1 Cachecol em Chamas ligado a ele, receberá 100 PS a mais.",
				'de-de': "Wenn an dieses Pokémon ein Flammenhalstuch angelegt ist, erhält es +100 KP."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Fire Mane",
				'fr-fr': "Crinière de Feu",
				'es-es': "Crin de Fuego",
				'it-it': "Criniera di Fuoco",
				'pt-br': "Crina de Fogo",
				'de-de': "Flammenmähne"
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 130,
	types: ["Fire"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "The sight of it running over 6,200 miles in a single day and night has captivated many people."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457593,
				tcgplayer: 213104
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457593,
				tcgplayer: 213104
			}
		},
	],
}

export default card
