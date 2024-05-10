import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒードラン",
		'zh-tw': "席多藍恩"
	},

	category: "Pokemon",
	rarity: "Rare",
	illustrator: "AKIRA EGAWA",
	dexId: [485],
	hp: 140,
	types: ["Metal"],

	description: {
		ja: "火山の 洞穴に 生息。 十字の ツメを 食いこませて 壁や 天井を はい回る。",
		'zh-tw': "棲息在火山的洞穴裡。 以十字形的爪子勾住 牆壁或洞頂爬行。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "しゃくねつボディ",
			'zh-tw': "灼熱之軀"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをやけどにする。",
			'zh-tw': "這隻寶可夢在戰鬥場上受到對手的寶可夢招式的傷害時，將使用招式的寶可夢【灼傷】。"
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "スチールバースト",
			'zh-tw': "鋼鐵爆炸"
		},

		damage: "50×",

		effect: {
			ja: "このポケモンについているエネルギーをすべてトラッシュし、その枚数×50ダメージ。",
			'zh-tw': "將這隻寶可夢身上附加的【鋼】能量卡全部丟棄，造成其張數×50點傷害。"
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

	retreat: 4,
	regulationMark: "H"
}

export default card
