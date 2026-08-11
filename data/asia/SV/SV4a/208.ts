import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "スコヴィラン",
		'zh-tw': "狠辣椒",
		'id-id': "Scovillain"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	dexId: [952],
	hp: 110,
	types: ["Grass"],

	description: {
		'ja-jp': "レッドヘッドは 辛み成分を 炎エネルギーに 変え 激辛の 火炎放射を まき散らす。",
		'zh-tw': "會把辣味成分轉換成火之能量，然後從紅色的頭朝著四周 噴灑出辣到爆炸的火焰。",
		'id-id': "Kepala merah Scovillain mengubah unsur pedas menjadi energi api dan menyebarkan semburan api yang sangat pedas."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "ダブルタイプ",
			'zh-tw': "雙重屬性",
			'id-id': "Tipe Ganda"
		},

		effect: {
			'ja-jp': "このポケモンは、場にいるかぎりとの2つのタイプになる。",
			'zh-tw': "只要這隻寶可夢在場上，改為【草】與【火】2種屬性。",
			'id-id': "Selama Pokémon ini ada di Arena, Pokémon ini menjadi 2 tipe yaitu {Daun} dan {Api}."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'ja-jp': "スパイシーヘッド",
			'zh-tw': "香料頭擊",
			'id-id': "Spicy Head"
		},

		damage: 110,

		effect: {
			'ja-jp': "このワザのダメージは抵抗力を計算しない。",
			'zh-tw': "這個招式的傷害不計算抵抗力。",
			'id-id': "Kerusakan akibat serangan ini tidak terpengaruh oleh Resistansi."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747562,
				tcgplayer: 567609,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card