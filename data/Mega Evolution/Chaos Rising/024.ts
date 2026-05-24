import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Avalugg"
	},

	illustrator: "Tomoki Sone",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [713],
	hp: 160,
	types: ["Water"],

	evolveFrom: {
		en: "Bergmite"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Iceberg Breaker"
		},

		cost: ["Water"],

		effect: {
			en: "Discard the top 6 cards of your deck, and this attack does 60 damage for each Basic Water Energy card that you discarded in this way."
		}
	}, {
		name: {
			en: "Frost Stamp"
		},

		cost: ["Water", "Water", "Colorless", "Colorless"],
		damage: 160
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693448,
		cardmarket: 886416
	}
}

export default card