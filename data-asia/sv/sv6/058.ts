import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "サンドパン"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Nisota Niso",
	dexId: [28],
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "トゲは 皮膚が 硬くなったもの。 体を 丸めて トゲトゲを 刺すように 相手を 攻撃する。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ツメをたてる"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "じしん"
		},

		damage: 120,

		effect: {
			ja: "自分のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card
