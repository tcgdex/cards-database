import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Wigglytuff)'

const card: Card = {
	dexId: [36],
	set: Set,

	name: {
		en: "Clefable",
		fr: "Mélodelfe",
		es: "Clefable",
		it: "Clefable",
		pt: "Clefable",
		de: "Pixi"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fairy"],

	evolveFrom: {
		en: "Clefairy",
		fr: "Mélofée",
		es: "Clefairy",
		it: "Clefairy",
		pt: "Clefairy",
		de: "Piepi"
	},

	stage: "Stage1",
	retreat: 2,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Griffe",
			},
			damage: "20",
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Attaque Imprudente",
			},
			damage: "70",
			effect: {
				fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 20 dégâts.",
			},
		},
	],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	resistances: [{
		type: "Darkness",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 98204
	}
}

export default card