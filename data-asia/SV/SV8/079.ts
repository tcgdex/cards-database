import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ドータクン"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [437],
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "別世界への 穴を 開けて そこから 雨を 降らしていた。 そのため 豊作の神 とされる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			ja: "かいてんアタック"
		},

		damage: 50
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "ダブルインパクト"
		},

		damage: "100×",

		effect: {
			ja: "コインを2回投げ、オモテの数×100ダメージ。"
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

	retreat: 3
}

export default card