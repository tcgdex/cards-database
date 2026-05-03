import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大狼犬",
		ja: "グラエナ"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		'zh-tw': "會組成約１０隻規模的群體， 靠著有條不紊的團隊合作 追擊並解決獵物。",
		ja: "１０匹 程度の 群れを 作って 一糸乱れぬ チームワークで 獲物を 追いつめて しとめるのだ。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "喧鬧咆哮",
			ja: "ハッスルバーク"
		},

		effect: {
			'zh-tw': "若對手的場上有「寶可夢【VMAX】」，則這隻寶可夢使用招式所需的能量，減少3個【無】能量。",
			ja: "相手の場に「ポケモンVMAX」がいるなら、このポケモンがワザを使うためのエネルギーは、エネルギー3個ぶん少なくなる。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "狂野衝撞",
			ja: "ワイルドタックル"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到50點傷害。",
			ja: "このポケモンにも50ダメージ。"
		},

		damage: 160,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [262],

	thirdParty: {
		cardmarket: 609818
	}
}

export default card