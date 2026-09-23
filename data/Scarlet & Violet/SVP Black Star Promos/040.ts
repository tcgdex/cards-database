import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [921],
	set: Set,

	name: {
		en: "Pawmi",
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Static Slap",
		},

		effect: {
			en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	illustrator: "Ryuta Fuse",
	description: {
		en: "It has underdeveloped electric sacs on its cheeks. These sacs can produce electricity only if Pawmi rubs them furiously with the pads on its forepaws.",
	},
	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 512043
			},
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 715755,
				tcgplayer: 607764
			},
		}
	],
}

export default card
