import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		ja: "アーマーガアV"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [823],
	hp: 210,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			ja: "わしづかみ"
		},

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
		},

		damage: 30,
		cost: ["Metal"]
	}, {
		name: {
			ja: "スカイハリケーン"
		},

		effect: {
			ja: "次の自分の番、このポケモンは「スカイハリケーン」が使えない。"
		},

		damage: 190,
		cost: ["Metal", "Metal", "Colorless"]
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
	regulationMark: "E",
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 538698, tcgplayer: 569119, cardtrader: 240090 } }
	]
}

export default card
