import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "ドテッコツ",
		'zh-tw': "鐵骨土人"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Aya Kusube",
	dexId: [533],
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "鍛え上げられた 筋肉の 体は プロレスラーが 束になって 攻撃しても びくともしない。",
		'zh-tw': "身體的肌肉經過完美鍛鍊。 即使是職業摔角手一擁而上 進行攻擊，也能毫髮無傷。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "げんこつ",
			'zh-tw': "拳骨"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "ばかぢから",
			'zh-tw': "蠻力"
		},

		damage: "50+",

		effect: {
			ja: "のぞむなら、30ダメージ追加。その場合、このポケモンにも30ダメージ。",
			'zh-tw': "若希望，增加30點傷害。這個情況下，這隻寶可夢也受到30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card
