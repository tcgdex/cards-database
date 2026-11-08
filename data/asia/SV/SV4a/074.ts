import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ユンゲラー",
		'zh-tw': "勇基拉",
		'th-th': "ยุนเกเรอร์",
		'id-id': "Kadabra"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	dexId: [64],
	hp: 80,
	types: ["Psychic"],

	description: {
		'ja-jp': "念力の 威力は 絶大。 進化に 備えて 額の 星に サイコパワーを 蓄えている。",
		'zh-tw': "念力的威力大得驚人。會把精神力量儲存在額頭 的星星裡，以備進化所需。",
		'th-th': "มีพลังจิตตานุภาพอันทรงพลังอยู่ จะเก็บสะสมพลังจิตไว้ที่ดาวบนหัวไว้เพื่อเตรียมวิวัฒนาการ",
		'id-id': "Kekuatan telekinesis Kadabra sangat kuat. Pokémon ini bersiap untuk berevolusi dengan menghimpun kekuatan psikokinesis pada bintang di dahinya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'ja-jp': "テレポートアタック",
			'zh-tw': "瞬間移動攻擊",
			'th-th': "เทเลพอร์ทแอทแทก",
			'id-id': "Teleport Attack"
		},

		damage: 30,

		effect: {
			'ja-jp': "このポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
			'th-th': "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์",
			'id-id': "Tukar Pokémon ini dengan Pokémon Cadangan."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746456,
				tcgplayer: 567463,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577336,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card