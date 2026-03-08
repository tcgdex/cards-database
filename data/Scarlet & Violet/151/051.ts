import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [51],
	set: Set,

	name: {
		fr: "Triopikeur",
		en: "Dugtrio",
		es: "Dugtrio",
		it: "Dugtrio",
		pt: "Dugtrio",
		de: "Digdri"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	evolveFrom: {
		fr: "Taupiqueur",
		en: "Diglett",
		es: "Diglett",
		it: "Diglett",
		pt: "Diglett",
		de: "Digda"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			fr: "Culbute Surprise",
			en: "Headbutt Bounce",
			es: "Bote Cabezazo",
			it: "Rimbalzo Bottintesta",
			pt: "Cabeçada Ricochete",
			de: "Abrupter Kopfstoß"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			fr: "Boue-Bombe",
			en: "Mud Bomb",
			es: "Bomba Fango",
			it: "Pantanobomba",
			pt: "Bomba de Lama",
			de: "Schlammbombe"
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Miki Tanaka",

	thirdParty: {
		cardmarket: 733646
	}
}

export default card