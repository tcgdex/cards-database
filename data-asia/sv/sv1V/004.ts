import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "コフーライ",
		'zh-tw': "粉蝶蛹"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [665],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "決まった 棲み処を 持たない。 気の向くまま 野山を 歩きまわり 進化の エネルギーを 蓄える。",
		'zh-tw': "沒有固定的住處。會隨心所欲地在山野走來走去， 蓄積進化時所需的能量。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "てきおうしんか",
			'zh-tw': "適應進化"
		},

		effect: {
			ja: "このポケモンは、最初の自分の番や、出したばかりの番でも進化できる。",
			'zh-tw': "這隻寶可夢就算在自己的最初回合或者剛使出的回合，也可進化。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "むしくい",
			'zh-tw': "蟲咬"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card