import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "グラエナ"
	},

	illustrator: "akagi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [262],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "優れた トレーナーの 命令には 絶対に 服従。大昔に 群れで 行動していた 名残り。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "けりとばす"
		},

		damage: 50,

		effect: {
			ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］"
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "するどいキバ"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card