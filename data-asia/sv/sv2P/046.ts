import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ドンカラス"
	},

	illustrator: "Nisota Niso",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [430],
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "情け容赦ない 性格。 子分の ヤミカラスの 失敗は 絶対に 許さないと 言われる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "はばたく"
		},

		damage: 30
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "ダーティスロー"
		},

		damage: 140,

		effect: {
			ja: "自分の手札を1枚トラッシュする。トラッシュできないなら、このワザは失敗。"
		}
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