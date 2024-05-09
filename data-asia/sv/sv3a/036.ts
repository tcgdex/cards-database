import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "アブソル"
	},

	illustrator: "Shinji Kanda",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [359],
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "危険を 察知する 能力を 持つがゆえに 人からは 災いを もたらす ポケモンと 誤解された。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ドローセンス"
		},

		effect: {
			ja: "自分の手札が5枚になるように、山札を引く。のぞむなら、山札を引く前に、自分の手札を好きなだけトラッシュする。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "きょうかスラッシュ"
		},

		damage: "20＋",

		effect: {
			ja: "このポケモンに「ポケモンのどうぐ」がついているなら、60ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card