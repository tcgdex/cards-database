import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Steelix GL",
		fr: "Steelix  Niv. 38",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		208,
	],
	hp: 110,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mend",
				fr: "Réparation",
			},
			effect: {
				en: "Search your discard pile for a Metal Energy card and attach it to Steelix If you do, remove 1 damage counter from Steelix .",
				fr: "Choisissez dans votre pile de défausse une carte Énergie Metal et attachez-la à Steelix . Retirez alors à Steelix  1 marqueur de dégât.",
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Squeeze",
				fr: "Compression",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 50 more damage and the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 50 dégâts supplémentaires et le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
