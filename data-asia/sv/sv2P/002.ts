import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "アメモース"
	},

	illustrator: "Haru Akasaka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [284],
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "４枚の 羽で 浮かび上がり 前後 左右 自由自在に 飛びまわることが できる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "パニックもよう"
		},

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数ぶん、相手の手札からオモテを見ないで選び、トラッシュする。"
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "むしのさざめき"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card