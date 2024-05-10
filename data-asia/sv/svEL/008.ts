import { Card } from "../../../interfaces"
import Set from "../svEL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "骨紋巨聲鱷ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Metal"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "爆熱高歌"
		},

		effect: {
			'zh-tw': "在自己的回合，若從自己的手牌將1張「基本【火】能量」卡丟棄，則可使用1次。在這個回合，自己的寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+60」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "潔淨灼燒"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。"
		},

		damage: 160,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card