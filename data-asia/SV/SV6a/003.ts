import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "モクロー"
	},

	illustrator: "Yoshimi Miyoshi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [722],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "飛行しながら 切れ味 鋭い 羽根を 飛ばし 近距離では 強烈な キックを 叩きこむ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "くわえる"
		},

		effect: {
			ja: "自分の山札を1枚引く。"
		}
	}, {
		cost: ["Grass"],

		name: {
			ja: "このは"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card