import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "スコヴィラン",
		'zh-tw': "狠辣椒"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [952],
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "レッドヘッドは 辛み成分を 炎エネルギーに 変え 激辛の 火炎放射を まき散らす。",
		'zh-tw': "會把辣味成分轉換成火之能量，然後從紅色的頭朝著四周噴灑出辣到爆炸的火焰。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ダブルタイプ",
			'zh-tw': "雙重屬性"
		},

		effect: {
			ja: "このポケモンは、場にいるかぎりとの2つのタイプになる。",
			'zh-tw': "只要這隻寶可夢在場上，改為【草】與【火】2種屬性。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "スパイシーヘッド",
			'zh-tw': "香料頭擊"
		},

		damage: 110,

		effect: {
			ja: "このワザのダメージは抵抗力を計算しない。",
			'zh-tw': "這個招式的傷害不計算抵抗力。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card