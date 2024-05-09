import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ブロロローム"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Hasuno",
	dexId: [966],
	hp: 140,
	types: ["Metal"],

	description: {
		ja: "排気音で 激しく 威嚇する。 円筒形の 口から べろを 出して 毒液を まき散らす。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "まきかえす"
		},

		damage: "30＋",

		effect: {
			ja: "前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、90ダメージ追加。"
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "つっぱしる"
		},

		damage: "100×",

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数×100ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 2
}

export default card
