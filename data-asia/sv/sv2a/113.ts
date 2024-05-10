import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ラッキー",
		'zh-tw': "吉利蛋"
	},

	illustrator: "Taiga Kayama",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [113],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "傷ついた ポケモンや 人がいると 栄養満点の タマゴを産み 分け与える 優しい ポケモン。",
		'zh-tw': "心地很善良的寶可夢，會生出營養滿分的蛋 分給受傷的寶可夢和人類。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ラッキーボーナス",
			'zh-tw': "幸運紅利"
		},

		effect: {
			ja: "自分の番に、ウラになっている自分のサイドからこのカードをとったとき、自分のベンチに空きがあるなら、手札に加える前に使える。このポケモンを自分のベンチに出す。その後、コインを1回投げオモテなら、さらにサイドを1枚とる。",
			'zh-tw': "在自己的回合，從自己的反面朝上的獎賞卡中獲得這張卡時，若自己的備戰區有空位，則可在加入手牌前使用。將這隻寶可夢放置於自己的備戰區。然後，擲1次硬幣若為正面，則再獲得1張獎賞卡。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ひっぱたく",
			'zh-tw': "重摑"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card