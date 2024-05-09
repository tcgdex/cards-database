import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒラヒナ"
	},

	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [955],
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "荒れ地を 走りまわって 暮らす。 大好きな 木の実を 取られると 追いかけまわして 復讐する。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "サイコキネシス"
		},

		damage: "10＋",

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×10ダメージ追加。"
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