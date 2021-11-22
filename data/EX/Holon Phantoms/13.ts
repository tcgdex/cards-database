import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Omastar δ",
		fr: "Amonistar δ ESPÈCES DELTA"
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		139,
	],
	hp: 110,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Omanyte",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Bind",
				fr: "Étreinte"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vengeful Spikes",
				fr: "Piques vengeresses"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Omanyte, Omastar, Kabuto, Kabutops, and Kabutops ex in your discard pile. You can't add more than 60 damage in this way.",
				fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Amonita, Amonistar, Kabuto, Kabutops et Kabutops ex dans votre pile de défausse. Vous ne pouvez pas ajouter plus de 60 dégâts de cette façon."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
