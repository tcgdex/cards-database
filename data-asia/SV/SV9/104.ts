import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ナンジャモのタイカイデン"
	},

	illustrator: "Terada Tera",
	rarity: "None",
	category: "Pokemon",
	dexId: [941],
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "のど袋を ふくらませて 電気を 増幅させる。 風に 乗って １日で ７００キロを 飛行する。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "フラッシュドロー"
		},

		effect: {
			ja: "自分の番に、このポケモンについている「基本エネルギー」を1個トラッシュするなら、1回使える。自分の手札が6枚になるように、山札を引く。"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "マッハボルト"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card