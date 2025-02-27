import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "シュバルゴ",
		'zh-tw': "騎士蝸牛",
		'zh-cn': "騎士蝸牛"
	},

	illustrator: "Takumi Wada",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [589],
	hp: 120,
	types: ["Metal"],

	description: {
		ja: "槍を 構え 敵へ 突撃。 ネギガナイトとの 決闘を 描いた 絵画が 有名。",
		'zh-tw': "會舉起長矛突擊敵人。 有一幅名畫描繪著 牠和蔥遊兵決鬥的場景。",
		'zh-cn': "會舉起長矛突擊敵人。 有一幅名畫描繪著 牠和蔥遊兵決鬥的場景。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "つきさす",
			'zh-tw': "突刺",
			'zh-cn': "突刺"
		},

		damage: 20
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			ja: "アイアンバスター",
			'zh-tw': "鐵之光炮",
			'zh-cn': "鐵之光炮"
		},

		damage: 120,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card