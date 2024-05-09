import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴニョニョ"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [293],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "鳴きはじめると 自分の 声に 驚いて さらに 激しく 鳴く。 鳴き疲れると 眠ってしまう。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "つきとばす"
		},

		damage: 10,

		effect: {
			ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card