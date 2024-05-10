import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ウツボット",
		'zh-tw': "大食花"
	},

	illustrator: "Jerky",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [71],
	hp: 150,
	types: ["Grass"],

	description: {
		ja: "体内に 取りこまれた ものは どんなに 硬くても 溶解液で 跡形なく 溶かされてしまう。",
		'zh-tw': "被牠吞進體內的東西不管有多硬， 都會被溶解液不留痕跡地融化掉。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "はきだす",
			'zh-tw': "噴出"
		},

		damage: 50
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "ディレイドアシッド",
			'zh-tw': "遲延酸液"
		},

		damage: 120,

		effect: {
			ja: "次の相手の番の終わりに、このワザを受けたポケモンにダメカンを12個のせる。",
			'zh-tw': "在下個對手的回合結束時，在受到這個招式的寶可夢身上放置12個傷害指示物。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card