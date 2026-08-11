import { Card } from 'models/database/card'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	dexId: [375],
	set: Set,

	name: {
		'en-us': "Metang",
		'fr-fr': "Metang"
	},

	illustrator: "Hisao Nakamura",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",
	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Beldum",
		'fr-fr': "Terhal"
	},

	attacks: [{
		cost: [
			"Psychic",
			"Colorless"
		],
		name: {
			'en-us': "Psychic Boom",
			'fr-fr': "Psycho-boom"
		},
		effect: {
			'en-us': "Does 10 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
			'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur."
		},
		damage: "10+"
	}, {
		cost: [
			"Psychic",
			"Colorless",
			"Colorless"
		],
		name: {
			'en-us': "Quick Blow",
			'fr-fr': "Coup d'poing éclair"
		},
		effect: {
			'en-us': "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires."
		},
		damage: "40+"
	}],

	weaknesses: [
		{
			type: "Psychic",
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 277188,
				tcgplayer: 87376
			}
		},
	],

}

export default card
