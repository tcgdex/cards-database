import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ユンゲラー",
		'zh-tw': "勇基拉",
		th: "ยุนเกเรอร์",
		id: "Kadabra"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [64],
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "念力の 威力は 絶大。 進化に 備えて 額の 星に サイコパワーを 蓄えている。",
		'zh-tw': "念力的威力大得驚人。會把精神力量儲存在額頭 的星星裡，以備進化所需。",
		th: "มีพลังจิตตานุภาพอันทรงพลังอยู่ จะเก็บสะสมพลังจิตไว้ที่ดาวบนหัวไว้เพื่อเตรียมวิวัฒนาการ",
		id: "Kekuatan telekinesis Kadabra sangat kuat. Pokémon ini bersiap untuk berevolusi dengan menghimpun kekuatan psikokinesis pada bintang di dahinya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "テレポートアタック",
			'zh-tw': "瞬間移動攻擊",
			th: "เทเลพอร์ทแอทแทก",
			id: "Teleport Attack"
		},

		damage: 30,

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
			th: "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์",
			id: "Tukar Pokémon ini dengan Pokémon Cadangan."
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

	retreat: 1,
	regulationMark: "G"
}

export default card