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
		en: "Deoxys"
	},

	illustrator: "hncl",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [386],
	hp: 100,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Psychic Speed"
		},

		cost: ["Psychic"],
		damage: 30,

		effect: {
			en: "You may draw cards until you have 5 cards in your hand."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693477,
		cardmarket: 886426
	}
}

export default card