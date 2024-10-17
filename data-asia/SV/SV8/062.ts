import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "コノヨザル"
	},

	illustrator: "SIE NANAHARA",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [979],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "心に 秘めた 怒りのパワーを こぶしに 込めて 叩きつけると 相手を 骨の髄から 砕く。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "あばれまわる"
		},

		damage: 130,

		effect: {
			ja: "このポケモンをこんらんにする。"
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "みちづれファイト"
		},

		effect: {
			ja: "おたがいのバトルポケモンをきぜつさせる。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card