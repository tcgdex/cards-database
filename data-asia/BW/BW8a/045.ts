import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ミルタンク"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	dexId: [241],
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "ミルタンクの ミルクを 飲んで 育った 子供は 健康で たくましい 大人に なるという。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "まんたんミルク"
		},

		effect: {
			ja: "自分のポケモンを1匹選び、HPをすべて回復する。その後、このポケモンについているエネルギーをすべてトラッシュする。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			ja: "たいあたり"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567889, tcgplayer: 602214, cardtrader: 143020 }, stamp: ["1st-edition"] }
	]
}

export default card
