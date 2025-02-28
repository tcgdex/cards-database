import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "Nのシンボラー",
		'zh-tw': "N的象徵鳥",
		'zh-cn': "N的象徵鳥"
	},

	illustrator: "Shiburingaru",
	rarity: "Common",
	category: "Pokemon",
	dexId: [561],
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "シンボラーが 飛ぶ 砂漠の下を 調査すると 古代の 都市と 思われる 名残りが 見つかった。",
		'zh-tw': "人們在象徵鳥飛過的沙漠 地下進行調查，結果在那裡 發現了疑似古代都市的遺跡。",
		'zh-cn': "人們在象徵鳥飛過的沙漠 地下進行調查，結果在那裡 發現了疑似古代都市的遺跡。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ねんどうだん",
			'zh-tw': "‌念動彈",
			'zh-cn': "‌念動彈"
		},

		damage: 20
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "ビクトリーシンボル",
			'zh-tw': "勝利象徵",
			'zh-cn': "勝利象徵"
		},

		effect: {
			ja: "このワザを使ったとき、自分のサイドの残り枚数が1枚なら、この対戦は自分の勝ちになる。",
			'zh-tw': "使用這個招式時，若自己剩餘獎賞卡的張數為1張，則這場對戰己方獲勝。",
			'zh-cn': "使用這個招式時，若自己剩餘獎賞卡的張數為1張，則這場對戰己方獲勝。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card