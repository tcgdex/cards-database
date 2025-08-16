import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [501],
	set: Set,

	name: {
		en: "Oshawott",
		fr: "Moustillon",
		es: "Oshawott",
		it: "Oshawott",
		pt: "Oshawott",
		de: "Ottaro"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Beat",
			fr: "Bataille",
			es: "Toque",
			it: "Battuta",
			pt: "Pulso",
			de: "Verprügler"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658578,
		tcgplayer: 272241
	}
}

export default card