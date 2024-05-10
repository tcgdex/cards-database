import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "イッカネズミex",
		'zh-tw': "一家鼠ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いっちだんけつ",
			'zh-tw': "一致團結"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、自分の場の「ワッカネズミ」と「イッカネズミ（『ポケモンex』をふくむ）」の数×3個ぶんのダメカンを、ワザを使ったポケモンにのせる。",
			'zh-tw': "這隻寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，將與自己場上「一對鼠」與「一家鼠（包含『寶可夢【ex】』）」的數量×3個的相同數量的傷害指示物，放置於使用招式的寶可夢身上。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "がっつくまえば",
			'zh-tw': "貪心門牙"
		},

		damage: 120,

		effect: {
			ja: "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card