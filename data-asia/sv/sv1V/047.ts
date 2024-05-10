import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ボチ",
		'zh-tw': "墓仔狗"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [971],
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "人懐っこくて 寂しがり。 ちょっと かまっただけでも いつまでも 後を ついてくるぞ。",
		'zh-tw': "愛親近人，害怕寂寞。就算只跟牠玩了一下下， 牠也會一直跟在後面。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "よみさんぽ",
			'zh-tw': "黃泉散步"
		},

		effect: {
			ja: "相手の手札を見て、その中からサポートを1枚選び、相手の山札の下にもどす。",
			'zh-tw': "查看對手的手牌，從其中選擇1張支援者卡，放回對手的牌庫下方。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "するどいキバ",
			'zh-tw': "銳利之牙"
		},

		damage: 30
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
	regulationMark: "G"
}

export default card