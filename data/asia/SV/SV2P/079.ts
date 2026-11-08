import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ベラカス"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	dexId: [954],
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "玉を 支える 体は ほとんど 動かないため 本体は 玉の中にいると 考えられている。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "さいきのいのり"
		},

		effect: {
			'ja-jp': "自分のトラッシュからポケモンを1枚選び、ベンチに出す。"
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			'ja-jp': "サイケこうせん"
		},

		damage: 50,

		effect: {
			'ja-jp': "相手のバトルポケモンをこんらんにする。"
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

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 707646,
				tcgplayer: 567836,
			},
		},
	],

	retreat: 1
}

export default card