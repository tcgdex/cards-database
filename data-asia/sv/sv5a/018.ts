import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "イーユイ"
	},

	illustrator: "Oku",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [1004],
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "多くの 争いの 火種となった 勾玉に 集まった 妬みが 炎を まとい ポケモンとなった。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ひきつける"
		},

		effect: {
			ja: "自分の山札を2枚引く。"
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			ja: "グラウンドメルト"
		},

		damage: "60＋",

		effect: {
			ja: "場にスタジアムが出ているなら、60ダメージ追加。その後、そのスタジアムをトラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card