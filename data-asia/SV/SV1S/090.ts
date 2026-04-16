import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ムックル"
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	dexId: [396],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "虫ポケモンを 狙って 野山を 大勢の 群れで 飛びまわる。 鳴き声が とても やかましい。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "はばたく"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,

	thirdParty: {
		cardmarket: 693030
	}
}

export default card