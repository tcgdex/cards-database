import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [642],
	set: Set,

	name: {
		en: "Thundurus",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",
	illustrator: "Anesaki Dynamic",

	attacks: [
		{
			cost: ["Colorless"],

			name: {
				en: "Charge",
			},

			effect: {
				en: "Search your deck for a Basic Lightning Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			},
		},
		{
			cost: ["Lightning", "Colorless", "Colorless"],

			name: {
				en: "Disaster Volt",
			},

			effect: {
				en: "Discard an Energy from this Pokémon.",
			},

			damage: 110
		}
	],

	retreat: 1,
	regulationMark: "I",

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
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
		cardmarket: 836655,
		tcgplayer: 644833,
	}
}

export default card
