import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蒼響V",
		ja: "ザシアンV"
	},

	illustrator: "Hataya",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "劍之咆哮",
			ja: "けんのほうこう"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用1次，若使用，則自己的回合結束。從自己的牌庫選擇1張【超】能量卡，附於自己的寶可夢身上。並且重洗牌庫。",
			ja: "自分の番に1回使えて、使ったなら、自分の番は終わる。自分の山札からエネルギーを1枚選び、自分のポケモンにつける。そして山札を切る。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "風暴斬",
			ja: "ストームスラッシュ"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上附加的【超】能量的數量×30點傷害。",
			ja: "このポケモンについているエネルギーの数×30ダメージ追加。"
		},

		damage: "60＋",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card