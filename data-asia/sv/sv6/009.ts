import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "バチンキー"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "GOSSAN",
	dexId: [811],
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "２本の スティックで 激しい ビートを 刻める バチンキーほど 仲間たちの 尊敬を 集める。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ドンドンだいこ"
		},

		effect: {
			ja: "自分のバトルポケモンが特性「おまつりおんど」を持つポケモンなら、自分の番に1回使える。自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			ja: "たたく"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card
