import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		ja: "エアームド"
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	dexId: [227],
	hp: 110,
	types: ["Metal"],

	description: {
		ja: "抜け落ちた 羽根は 薄く 鋭いので 刀として 使われていたことも あったらしい。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			ja: "はがねのつばさ"
		},

		damage: 50,

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。"
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

	retreat: 1,
	rarity: "None",

	thirdParty: {
		cardmarket: 787594
	}
}

export default card