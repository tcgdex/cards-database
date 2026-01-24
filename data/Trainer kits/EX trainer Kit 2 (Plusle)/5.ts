import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	dexId: [375],
	set: Set,

	name: {
		en: "Metang",
		fr: "Metang"
	},

	illustrator: "Hisao Nakamura",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",
	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Beldum",
		fr: "Terhal"
	},

	attacks: [{
		cost: [
			"Psychic",
			"Colorless"
		],
		name: {
			en: "Psychic Boom",
			fr: "Psycho-boom"
		},
		effect: {
			en: "Does 10 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
			fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur."
		},
		damage: "10+"
	}, {
		cost: [
			"Psychic",
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Quick Blow",
			fr: "Coup d'poing éclair"
		},
		effect: {
			en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires."
		},
		damage: "40+"
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "2x"
		},
	],

	retreat: 2,

	thirdParty: {
		tcgplayer: 87376
	}
}

export default card
