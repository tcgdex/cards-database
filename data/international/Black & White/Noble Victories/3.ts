import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Leavanny",
		'fr-fr': "Manternel",
		'es-es': "Leavanny",
		'it-it': "Leavanny",
		'pt-br': "Leavanny",
		'de-de': "Matrifol"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		542,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Swadloon",
		'fr-fr': "Couverdure",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Leaf Tailor",
				'fr-fr': "Couturier",
				'es-es': "Sastre de Hojas",
				'it-it': "Sartofoglia",
				'pt-br': "Alfaiate de Folhas",
				'de-de': "Blattschneider"
			},
			effect: {
				'en-us': "Each of your Pokémon that has any Energy attached to it has no Weakness.",
				'fr-fr': "Chacun de vos Pokémon auquel de l’Énergie est attachée n’a pas de Faiblesse.",
				'es-es': "Cada uno de tus Pokémon que tenga cualquier Energía unida a él no tiene ninguna Debilidad.",
				'it-it': "Nessuno dei tuoi Pokémon che ha delle Energie assegnate ha debolezza.",
				'pt-br': "Cada um de seus Pokémon que possui qualquer Energia ligada não possui Fraquezas.",
				'de-de': "Jedes deiner Pokémon, an dem Energie angelegt ist, hat keine Schwäche."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cutting Arm",
				'fr-fr': "Bras Coupant",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Upon finding a small Pokémon, it weaves clothing for it from leaves, using cutters on its arms and sticky silk.",
	},

	thirdParty: {
		cardmarket: 280126,
		tcgplayer: 86687
	}
}

export default card
