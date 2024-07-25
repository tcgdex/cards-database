import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "吉雉雞"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "會拍動豔麗的翅膀散佈 費洛蒙，使人類和寶可夢 神魂顛倒，為牠著迷。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "腎上腺費洛蒙"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有【惡】能量卡，則這隻寶可夢受到招式的傷害時，自己擲1次硬幣。若為正面，則這隻寶可夢不會受到那個傷害。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "能量羽毛"
		},

		effect: {
			'zh-tw': "造成這隻寶可夢身上附加的能量的數量×30點傷害。"
		},

		damage: "30×",
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card