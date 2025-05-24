import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "シロナのミカルゲ",
		'zh-tw': "<竹蘭的>花岩怪",
		'zh-cn': "<竹蘭的>花岩怪"
	},

	illustrator: "satoma",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [442],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "いつも 悪さばかり していたら 不思議な 術で 本体を 要石に 縛りつけられた。",
		'zh-tw': "總是作惡多端， 不料有一天本體被 神奇法術綁縛到了楔石上。",
		'zh-cn': "總是作惡多端， 不料有一天本體被 神奇法術綁縛到了楔石上。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "レイジングカース",
			'zh-tw': "激怒咒詛",
			'zh-cn': "激怒咒詛"
		},

		damage: "10×",

		effect: {
			ja: "自分のベンチの「シロナのポケモン」全員にのっているダメカンの数×10ダメージ。このワザのダメージは弱点を計算しない。",
			'zh-tw': "造成自己的備戰區的所有「竹蘭的寶可夢」身上放置的傷害指示物的數量×10點傷害。這個招式的傷害不計算弱點。",
			'zh-cn': "造成自己的備戰區的所有「竹蘭的寶可夢」身上放置的傷害指示物的數量×10點傷害。這個招式的傷害不計算弱點。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card