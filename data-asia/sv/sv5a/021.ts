import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "グレイシア",
		'zh-tw': "冰伊布"
	},

	illustrator: "rika",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [471],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "体温を 下げることで 全身の 体毛を 凍らせて 鋭く 尖った 針のようにして 飛ばす。",
		'zh-tw': "透過使體溫下降， 讓全身的體毛結凍， 並像尖銳的針一般發射。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "しみいるれいき",
			'zh-tw': "滲透寒氣"
		},

		damage: 30,

		effect: {
			ja: "次の相手の番の終わりに、このワザを受けたポケモンにダメカンを9個のせる。",
			'zh-tw': "在下個對手的回合結束時，在受到這個招式的寶可夢身上放置9個傷害指示物。"
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "つららミサイル",
			'zh-tw': "冰柱飛彈"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card