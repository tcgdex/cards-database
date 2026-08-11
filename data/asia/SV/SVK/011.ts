import { Card } from "models/database/card"
import Set from "../SVK"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ビーダル"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	dexId: [400],
	hp: 120,
	types: ["Colorless"],

	description: {
		'ja-jp': "川を 木の幹や 泥の ダムで せき止めて 住処を 作る。 働き者として 知られている。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "はたらくまえば"
		},

		effect: {
			'ja-jp': "自分の番に1回使える。自分の手札が5枚になるように、山札を引く。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "テールスマッシュ"
		},

		damage: 100,

		effect: {
			'ja-jp': "コインを1回投げウラなら、このワザは失敗。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	rarity: "None"
}

export default card