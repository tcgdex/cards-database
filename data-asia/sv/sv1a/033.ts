import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "タイカイデン",
		'zh-tw': "大電海燕"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [941],
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "のど袋を ふくらませて 電気を 増幅させる。 風に 乗って １日で ７００キロを 飛行する。",
		'zh-tw': "會膨脹喉囊來增強電力。可以乘著風在１天內 就飛上７００公里。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "つつく",
			'zh-tw': "啄"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ジェットウイング",
			'zh-tw': "噴射之翼"
		},

		damage: 150,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
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

	retreat: 0,
	regulationMark: "G"
}

export default card