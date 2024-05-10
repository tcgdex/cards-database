import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "アメモース",
		'zh-tw': "雨翅蛾"
	},

	illustrator: "Haru Akasaka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [284],
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "４枚の 羽で 浮かび上がり 前後 左右 自由自在に 飛びまわることが できる。",
		'zh-tw': "能用４片翅膀浮在空中，並前後左右自在地飛來飛去。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "パニックもよう",
			'zh-tw': "恐慌花紋"
		},

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数ぶん、相手の手札からオモテを見ないで選び、トラッシュする。",
			'zh-tw': "擲硬幣直到出現反面，在不看手牌正面的情況下，選擇與正面出現的次數相同數量的對手的手牌，將其丟棄。"
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "むしのさざめき",
			'zh-tw': "蟲鳴"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card