import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ブーバー"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [126],
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "全身が つねに 燃えている。 火事を 起こす 原因の ひとつとして 恐れられる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ひだね"
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "フレアコンボ"
		},

		damage: "80＋",

		effect: {
			ja: "自分のベンチに「エレブー」がいるなら、80ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card