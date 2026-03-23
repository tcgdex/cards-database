import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Wigglytuff)'

const card: Card = {
	dexId: [161],
	set: Set,

	name: {
		en: "Sentret",
		fr: "Fouinette",
		es: "Sentret",
		it: "Sentret",
		pt: "Sentret",
		de: "Wiesor"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,

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
		type: "Fighting",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 98190
	}
}

export default card