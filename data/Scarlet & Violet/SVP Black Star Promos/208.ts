import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [494],
	set: Set,

	name: {
		en: "Victini",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	illustrator: "Amelicart",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "V-Force",
		},

		effect:{
			en: "If you have 4 or fewer Benched Pokémon, this attack does nothing.",
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "I",

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			size: "jumbo"
		}
	],

	thirdParty: {
		cardmarket: 836653,
		tcgplayer: 646169,
	}
}

export default card
