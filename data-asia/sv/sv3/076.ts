import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "カラマネロ"
	},

	illustrator: "Nelnal",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [687],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "歴史を 変えるほどの 大事件は カラマネロの 催眠能力が かかわっていたと いわれている。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "サイコビジョン"
		},

		effect: {
			ja: "自分の番に1回使える。相手の山札を上から1枚見て、もとにもどす。その後、自分の山札を上から1枚見て、もとにもどす。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "さいみんこうせん"
		},

		damage: 90,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card