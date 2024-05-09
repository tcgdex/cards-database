import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "マグカルゴex"
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 270,
	types: ["Fire"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "あついマグマ"
		},

		damage: 70,

		effect: {
			ja: "相手のバトルポケモンをやけどにする。"
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "グラウンドバーン"
		},

		damage: "140＋",

		effect: {
			ja: "おたがいの山札を上から1枚ずつトラッシュし、その中にあるエネルギーの枚数×140ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3
}

export default card