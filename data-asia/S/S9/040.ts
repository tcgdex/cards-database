import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "帕奇利茲",
		ja: "パチリス"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'zh-tw': "有時候可以見到為了將儲存的電力分給同伴 而互相摩擦頰囊的帕奇利茲。",
		ja: "たまった 電気を 分け与えようと ほほ袋を こすり合わせる パチリスを 見かけることも ある。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "機關閃電",
			ja: "からくりサンダー"
		},

		effect: {
			'zh-tw': "造成自己的場上寶可夢身上附加的「寶可夢道具」的數量×30點傷害。",
			ja: "自分の場のポケモンについている「ポケモンのどうぐ」の数×30ダメージ。"
		},

		damage: "30×",
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [417]
}

export default card