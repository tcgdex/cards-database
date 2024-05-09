import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ペンドラー"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Shiburingaru",
	dexId: [545],
	hp: 170,
	types: ["Darkness"],

	description: {
		ja: "首のツメで 獲物を つかむと そのまま 地面に 叩きつけ 毒のトゲを 突きたてるぞ。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "ひどうなひとさし"
		},

		effect: {
			ja: "相手のバトルポケモンの残りHPが「10」になるように、ダメカンをのせる。"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "ヘドロばくだん"
		},

		damage: 160
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3
}

export default card
