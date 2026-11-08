import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Trevenant VMAX",
		'fr-fr': "Desséliande VMAX",
		'es-es': "Trevenant VMAX",
		'it-it': "Trevenant VMAX",
		'pt-br': "Trevenant VMAX",
		'de-de': "Trombork VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Grass"],
	stage: "VMAX",
	illustrator: "MUGENUP",
	dexId: [709],

	evolveFrom: {
		'en-us': "Trevenant V",
		'fr-fr': "Desséliande-V",
		'es-es': "Trevenant V",
		'it-it': "Trevenant-V",
		'pt-br': "Trevenant V",
		'de-de': "Trombork-V"
	},

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Missing in the Forest",
			'fr-fr': "Perdus en Forêt"
		},

		effect: {
			'en-us': "This attack does 40 damage for each Supporter card in your opponent's discard pile.",
			'fr-fr': "Cette attaque inflige 40 dégâts pour chaque carte Supporter dans la pile de défausse de votre adversaire."
		},

		damage: "40×"
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Max Tree",
			'fr-fr': "Arbromax"
		},

		damage: 180
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 574264,
				tcgplayer: 246709
			}
		},
	],
}

export default card
