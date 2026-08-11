import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Vullaby",
		fr: "Vostourno",
		es: "Vullaby",
		'es-mx': "Vullaby",
		de: "Skallyk",
		it: "Vullaby",
		pt: "Vullaby"
	},

	illustrator: "Shiburingaru",
	rarity: "Common",
	category: "Pokemon",
	dexId: [629],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Flap",
			fr: "Battement",
			es: "Aleteo",
			'es-mx': "Aleteo",
			de: "Flattern",
			it: "Alabattito",
			pt: "Asa"
		},

		cost: ["Darkness"],

		damage: 10
	}, {
		name: {
			en: "Gust",
			fr: "Tornade",
			es: "Tornado",
			'es-mx': "Ráfaga de Aire",
			de: "Windstoß",
			it: "Raffica",
			pt: "Lufada de Vento"
		},

		cost: ["Darkness", "Colorless"],

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895834,
				tcgplayer: 704806
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895834,
				tcgplayer: 704806
			}
		},
	],
}

export default card
