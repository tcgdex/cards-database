import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "キラフロル"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Kazumasa Yasukuni",
	dexId: [970],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "毒エネルギーが 結晶化した 花びらは テラスタルの 宝石に 似ていると 最近 判明した。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "しんけいどく"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをどくとマヒにする。"
		}
	}, {
		cost: ["Fighting"],

		name: {
			ja: "ベノムショック"
		},

		damage: "30＋",

		effect: {
			ja: "相手のバトルポケモンがどくなら、100ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card
