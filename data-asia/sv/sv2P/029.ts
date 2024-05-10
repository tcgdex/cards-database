import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤドン",
		'zh-tw': "呆呆獸"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	dexId: [79],
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "動きが のろく 間抜け。 叩かれても ５秒 たってから 痛さを 感じるほどだ。",
		'zh-tw': "動作遲鈍且呆頭呆腦。就算挨打也得花上５秒 才會感受到疼痛。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "しっぽづり",
			'zh-tw': "尾釣"
		},

		effect: {
			ja: "コインを1回投げオモテなら、自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。ウラなら、自分の手札を1枚選び、トラッシュする。",
			'zh-tw': "擲1次硬幣若為正面，則從自己的牌庫任意選擇1張卡加入手牌。並且重洗牌庫。若為反面，則選擇1張自己的手牌，將其丟棄。"
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "しねんのずつき",
			'zh-tw': "意念頭錘"
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