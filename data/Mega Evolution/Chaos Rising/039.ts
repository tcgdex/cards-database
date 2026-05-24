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
		en: "Trevenant"
	},

	illustrator: "Uninori",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [709],
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		en: "Phantump"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Cursed Root"
		},

		cost: ["Psychic"],
		damage: 30,

		effect: {
			en: "During your opponent's next turn, Energy cards can't be attached from their hand to the Defending Pokémon."
		}
	}, {
		name: {
			en: "Over Pain"
		},

		cost: ["Psychic", "Psychic"],
		damage: 60,

		effect: {
			en: "This attack does 10 more damage for each damage counter on all of your opponent's Pokémon."
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

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693556,
		cardmarket: 886431
	}
}

export default card