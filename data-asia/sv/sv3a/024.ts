import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴマゾウ",
		'zh-tw': "小小象"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [231],
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "川辺に 巣穴を 作り 暮らす。 泥遊びをしたあとは 体を 洗わないと 落ち着かないのだ。",
		'zh-tw': "會在河邊做出巢穴棲息。玩完泥巴後如果不把身體 洗乾淨，就會渾身不自在。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かいりき",
			'zh-tw': "怪力"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "ころがりタックル",
			'zh-tw': "滾動衝撞"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card