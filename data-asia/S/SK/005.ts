import { Card } from "../../../interfaces"
import Set from "../SK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "咩利羊",
		ja: "メリープ"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'zh-tw': "會累積絨毛摩擦時所產生的電力。如果因為牠可愛而直接用手去摸，就會被電得又麻又痛。",
		ja: "綿毛が こすれ 電気が たまる。 かわいいからと 素手で 触ると バチッと 痺れて 痛いのだ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "叫聲",
			ja: "なきごえ"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-20」點。",
			ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-20」される。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "劈哩啪啦",
			ja: "バチバチ"
		},

		damage: 20,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",
	dexId: [179]
}

export default card