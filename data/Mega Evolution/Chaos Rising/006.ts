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
		en: "Quilladin"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [651],
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		en: "Chespin"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Leaf Charge"
		},

		cost: ["Grass"],
		damage: 20,

		effect: {
			en: "Search your deck for a Basic Grass Energy card and attach it to this Pokémon. Then, shuffle your deck."
		}
	}, {
		name: {
			en: "Vine Whip"
		},

		cost: ["Grass", "Grass", "Colorless"],
		damage: 80
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693537
	}
}

export default card