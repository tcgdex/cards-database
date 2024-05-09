import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "エルフーン"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [547],
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "綿を まき散らし イタズラする。 水を かけると 重くなって 動けなくなり 観念するぞ。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "かるがるヒール"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のバトル場のポケモンのHPを、すべて回復する。その後、回復したポケモンについているエネルギーを、すべてトラッシュする。"
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "タネばくだん"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card