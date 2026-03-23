import { Card } from "../../../interfaces"
import Set from "../HGSS Black Star Promos"

const card: Card = {
	name: {
		en: "Zoroark and Legendary Pokémon",
	},
	illustrator: "Kouki Saitou",
	rarity: "Black Star Promo",
	category: "Pokemon",

	set: Set,
	dexId: [571, 483, 383, 384],
	hp: 500,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Darkness", "Fighting", "Metal", "Colorless"],
			name: {
				en: "Call of Legends",
			},
			effect: {
				en: "A fierce battle unfolds between Zoroark and the Legendary Pokémon!",
			},
			damage: 1000,
		},
	],

	weaknesses: [
		{
			type: "Fighting",
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

	variants: [
		{
			type: "normal",
			size: "jumbo"
		}
	]
}

export default card

