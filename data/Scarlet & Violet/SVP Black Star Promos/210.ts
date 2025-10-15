import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [641],
	set: Set,

	name: {
		en: "Tornadus",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",
	illustrator: "Kouki Saitou",

	attacks: [
		{
			cost: ["Colorless"],

			name: {
				en: "Wrapped in Wind",
			},

			effect: {
				en: "Attach a Basic Energy card from your hand to this Pokémon.",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],

			name: {
				en: "Hurricane",
			},

			effect: {
				en: "Move a Basic Energy from this Pokémon to 1 of your Benched Pokémon.",
			},

			damage: 100
		}
	],

	retreat: 1,
	regulationMark: "I",

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["pokemon-center"]
		}
	],

	thirdParty: {
		cardmarket: 836656,
		tcgplayer: 644835,
	}
}

export default card
