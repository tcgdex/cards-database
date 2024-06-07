import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "刺龍王"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		'zh-tw': "暴風雨來襲時會在海面上現身。如果撞見了快龍， 就會展開激烈的爭鬥。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "翻騰海流"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。選擇自己或者對手任一方，被選擇的玩家將手牌全部翻回反面並重洗，放回牌庫下方。然後，被選擇的玩家從牌庫抽出4張卡。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "水炮濺射"
		},

		damage: 130,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card