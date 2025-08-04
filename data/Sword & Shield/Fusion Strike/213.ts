import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [428],
	set: Set,

	name: {
		en: "Lopunny",
		fr: "Lockpin",
		es: "Lopunny",
		it: "Lopunny",
		pt: "Lopunny",
		de: "Schlapor"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	evolveFrom: {
		en: "Buneary",
		fr: "Laporeille",
		es: "Buneary",
		it: "Buneary",
		pt: "Buneary",
		de: "Haspiror"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "AKIRA EGAWA",

	description: {
		en: "It's notably wary and has a dislike of fighting, but at the same time, it can deliver powerful kicks with its lithe legs."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Hopping Shot",
			fr: "Tir Sauteur",
			de: "Hüpfkick",
			es: "Disparo Salto",
			pt: "Disparada Saltitante",
			it: "Colpo Salterino"
		},

		damage: 70
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582949,
		tcgplayer: 253310
	}
}

export default card