import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ユンゲラー"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Uninori",
	dexId: [64],
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "サイコパワーで 宙に 浮いたまま 眠る。 弾力に 優れた しっぽを 枕がわりに するぞ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "サイコキネシス"
		},

		damage: "10＋",

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。"
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
