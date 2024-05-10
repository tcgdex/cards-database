import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ブロスター",
		'zh-tw': "鋼炮臂蝦"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	dexId: [693],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "ハサミから 撃ちだす 海水の 砲弾の 威力は タンカーの 船体を 貫くほどだ。",
		'zh-tw': "從牠的鉗子發射出的海水砲彈，威力大到 足以貫穿油輪的船體。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "みずでっぽう",
			'zh-tw': "水槍"
		},

		damage: 50
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "アクアキャノン",
			'zh-tw': "水流加農炮"
		},

		damage: 160,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card