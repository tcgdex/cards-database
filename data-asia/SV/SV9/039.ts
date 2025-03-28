import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "メタグロス",
		'zh-tw': "巨金怪",
		'zh-cn': "巨金怪"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [376],
	hp: 170,
	types: ["Psychic"],

	description: {
		ja: "４本脚を 折りたたんで 飛ぶ。 ４つの 脳は スーパーコンピュータ よりも 優れていると いわれる。",
		'zh-tw': "會收起４隻腳飛行。 據說４個大腦比 超級電腦更優秀。",
		'zh-cn': "會收起４隻腳飛行。 據說４個大腦比 超級電腦更優秀。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "たたきつぶす",
			'zh-tw': "砸碎",
			'zh-cn': "砸碎"
		},

		damage: 60
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "ジョイントビーム",
			'zh-tw': "結合光束",
			'zh-cn': "結合光束"
		},

		damage: "130+",

		effect: {
			ja: "自分のベンチに「ダンバル」「メタング」がいるなら、150ダメージ追加。",
			'zh-tw': "若自己的備戰區有「鐵啞鈴」「金屬怪」，則增加150點傷害。",
			'zh-cn': "若自己的備戰區有「鐵啞鈴」「金屬怪」，則增加150點傷害。"
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

	retreat: 3,
	regulationMark: "I"
}

export default card