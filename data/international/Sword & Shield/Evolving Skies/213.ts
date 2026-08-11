import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Lycanroc VMAX",
		'fr-fr': "Lougaroc VMAX",
		'es-es': "Lycanroc VMAX",
		'it-it': "Lycanroc VMAX",
		'pt-br': "Lycanroc VMAX",
		'de-de': "Wolwerock VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Fighting"],
	stage: "VMAX",
	illustrator: "Mitsuhiro Arita",
	dexId: [745],

	evolveFrom: {
		'en-us': "Lycanroc V",
		'fr-fr': "Lougaroc-V",
		'es-es': "Lycanroc V",
		'it-it': "Lycanroc-V",
		'pt-br': "Lycanroc V",
		'de-de': "Wolwerock-V"
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Hunting Claw",
			'fr-fr': "Griffe de Chasse"
		},

		effect: {
			'en-us': "Knock Out 1 of your opponent's Pokémon in play that has 60 HP or less remaining.",
			'fr-fr': "Mettez K.O. l'un des Pokémon en jeu de votre adversaire auquel il reste 60 PV ou moins."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Max Edge",
			'fr-fr': "Lamomax"
		},

		effect: {
			'en-us': "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		damage: 190
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 574271,
				tcgplayer: 246714
			}
		},
	],
}

export default card
