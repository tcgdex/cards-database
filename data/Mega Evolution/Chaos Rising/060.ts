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
		en: "Metang"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Common",
	category: "Pokemon",
	dexId: [375],
	hp: 100,
	types: ["Metal"],

	evolveFrom: {
		en: "Beldum"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Metal Claw"
		},

		cost: ["Metal"],
		damage: 30
	}, {
		name: {
			en: "Guard Press"
		},

		cost: ["Metal", "Metal", "Colorless"],
		damage: 70,

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693523,
		cardmarket: 886452
	}
}

export default card