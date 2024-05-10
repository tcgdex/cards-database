import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "タマンチュラ",
		'zh-tw': "團珠蛛"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	dexId: [917],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "体を 包みこむ 糸玉は 天敵の ストライクの カマを はね返す 弾力性を 持つ。",
		'zh-tw': "包裹著身體的線球擁有足以把天敵飛天螳螂 的鐮刀反彈回去的彈力。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "しばりつける",
			'zh-tw': "束縛"
		},

		damage: 10,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card