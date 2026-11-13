import { Card } from "../../../interfaces"
import Set from "../MBG"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤミラミ"
	},

	illustrator: "osare",
	rarity: "None",
	category: "Pokemon",
	dexId: [302],
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "暗い 洞窟に 棲み処を 作り 鋭い ツメを 使って 宝石を 掘り出しては 食べる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "いきりクロー"
		},

		effect: {
			ja: "自分のベンチに{D}タイプの2進化ポケモンがいるなら、70ダメージ追加。"
		},

		damage: "20+",
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 846823,
				tcgplayer: 660123,
				cardtrader: 345814,
			},
		},
	]
}

export default card
