import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "アオガラス"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [822],
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "高い 知能を 有するのは 脳みそが ほかの 鳥ポケモンに 比べて 大きいためと 言われる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かっくう"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "わしづかみ"
		},

		damage: 70,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
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