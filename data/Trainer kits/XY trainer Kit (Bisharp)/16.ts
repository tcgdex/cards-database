import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Bisharp)'

const card: Card = {
	dexId: [625],
	set: Set,

	name: {
		en: "Bisharp",
		fr: "Scalproie",
		es: "Bisharp",
		it: "Bisharp",
		pt: "Bisharp",
		de: "Caesurio"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	evolveFrom: {
		en: "Pawniard",
		fr: "Scalpion",
		es: "Pawniard",
		it: "Pawniard",
		pt: "Pawniard",
		de: "Gladiantri"
	},

	stage: "Stage1",
	retreat: 1,

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				fr: "Piqûre Infernale",
			},
			damage: "20",
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Griffe Acier",
			},
			damage: "70",
		},
	],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Psychic",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 98165
	}
}

export default card