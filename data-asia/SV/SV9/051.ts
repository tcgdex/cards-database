import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "イワンコ",
		'zh-tw': "岩狗狗",
		'zh-cn': "岩狗狗"
	},

	illustrator: "Yoshimi Miyoshi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [744],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "小さいころは よく 懐く。 育つと 気性が 荒くなるが 主への 恩は 忘れない。",
		'zh-tw': "年幼時期非常容易親近。 雖然長大後脾氣會變得粗暴， 卻絕不會忘記主人的恩情。",
		'zh-cn': "年幼時期非常容易親近。 雖然長大後脾氣會變得粗暴， 卻絕不會忘記主人的恩情。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ほりかえす",
			'zh-tw': "挖回",
			'zh-cn': "挖回"
		},

		effect: {
			ja: "自分の山札を上から1枚見て、もとにもどす。のぞむなら、そのカードをトラッシュする。",
			'zh-tw': "查看自己的牌庫上方1張卡，回復原樣。若希望，將那張卡丟棄。",
			'zh-cn': "查看自己的牌庫上方1張卡，回復原樣。若希望，將那張卡丟棄。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ふむ",
			'zh-tw': "踩",
			'zh-cn': "踩"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card