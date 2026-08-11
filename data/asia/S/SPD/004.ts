import { Card } from "../../../interfaces"
import Set from "../SPD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "麒麟奇",
		ja: "キリンリキ"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "尾巴上也有著小小的大腦。如果有誰靠近就會對氣味 產生反應並咬過來，要特別注意。",
		ja: "尻尾にも 小さな 脳がある。 近寄ると においに 反応して かみついて くるので 注意。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "雙重抽出",
			ja: "ダブルドロー"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出2張卡。",
			ja: "自分の山札を2枚引く。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "幻象光線",
			ja: "サイケこうせん"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			ja: "相手のバトルポケモンをこんらんにする。"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [203]
}

export default card