import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [822],
	set: Set,

	name: {
		en: "Corvisquire",
		fr: "Bleuseille",
		es: "Corvisquire",
		it: "Corvisquire",
		pt: "Corvisquire",
		de: "Kranoviz"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		en: "Rookidee",
		fr: "Minisange",
		es: "Rookidee",
		it: "Rookidee",
		pt: "Rookidee",
		de: "Meikro"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Naoyo Kimura",

	description: {
		en: "The lessons of many harsh battles have taught it how to accurately judge an opponent's strength."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Fury Attack"
		},

		damage: "30×",

		effect: {
			en: "Flip 3 coins. This attack does 30 damage for each heads."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card