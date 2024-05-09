import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "マシマシラ"
	},

	category: "Pokemon",
	rarity: "Rare",
	illustrator: "kodama",
	dexId: [1015],
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "安全な 場所から 強烈な めまいを 引き起こす 念力を 放って 敵を 翻弄する。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "アドレナブレイン"
		},

		effect: {
			ja: "このポケモンにエネルギーがついているなら、自分の番に1回使える。自分の場のポケモン1匹にのっているダメカンを3個まで選び、相手の場のポケモン1匹にのせ替える。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "サイコトリップ"
		},

		damage: 60,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card
