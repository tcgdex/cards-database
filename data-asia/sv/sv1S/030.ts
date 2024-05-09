import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "フワライド"
	},

	illustrator: "Yuu Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [426],
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "体の 中で ガスを 作ったり 吐き出したり することで 空を 飛ぶ 高さを 調節する。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かぜおこし"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic", "Psychic"],

		name: {
			ja: "のろいをばらまく"
		},

		effect: {
			ja: "ダメカン8個を、相手のポケモンに好きなようにのせる。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card