import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ピカチュウ",
		'zh-tw': "皮卡丘"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	dexId: [25],
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "両頬には 電気を 溜めこむ 袋がある。 怒ると 溜めこんだ 電気を 一気に 放ってくる。",
		'zh-tw': "雙頰上有儲存電力的囊袋。一旦生氣就會把儲存的電力 一口氣釋放出來。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "なきごえ",
			'zh-tw': "叫聲"
		},

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-20」される。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式的傷害「-20」點。"
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "ピカボルト",
			'zh-tw': "皮卡伏特"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card