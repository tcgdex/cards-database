import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "シロデスナ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Uta",
	dexId: [770],
	hp: 150,
	types: ["Psychic"],

	description: {
		ja: "生命エネルギーを 吸い取り 干からびた ものたちの 骨を 腕の へこみから 発射する。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "すなかけ"
		},

		damage: 60,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "サンドホロウ"
		},

		damage: 150
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 4
}

export default card
