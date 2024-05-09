import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ディンルー"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1003],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "とても 重たい 頭を ゆっくり 振り下ろし 深さ５０メートルの 長大な 地割れを 引き起こす。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "グラウンドクラック"
		},

		damage: 30,

		effect: {
			ja: "場にスタジアムが出ているなら、相手のベンチポケモン全員にも、それぞれ30ダメージを与え、そのスタジアムをトラッシュする。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "ぶちかます"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card