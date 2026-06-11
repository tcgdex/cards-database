import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [538],
	set: Set,

	name: {
		en: "Throh",
		fr: "Judokrak",
		es: "Throh",
		it: "Throh",
		pt: "Throh",
		de: "Jiutesto"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Lunge Out",
			fr: "Allonger",
			es: "Arremeter",
			it: "Affondo Lungo",
			pt: "Bote",
			de: "Sprungangriff"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Seismic Toss",
			fr: "Frappe Atlas",
			es: "Sísmico",
			it: "Movimento Sismico",
			pt: "Arremesso Sísmico",
			de: "Geowurf"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "It performs throwing moves with first-rate skill. Over the course of many battles, Throh's belt grows darker as it absorbs its wearer's sweat.",
	},

	thirdParty: {
		cardmarket: 608530,
		tcgplayer: 263796
	}
}

export default card