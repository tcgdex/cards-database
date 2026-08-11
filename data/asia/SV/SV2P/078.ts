import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ゴチミル"
	},

	illustrator: "SIE NANAHARA",
	category: "Pokemon",
	dexId: [575],
	hp: 90,
	types: ["Psychic"],

	description: {
		'ja-jp': "催眠術で 子どもを 眠らせ 連れ去ってしまう。 星明りが きらめく 夜には 注意しろ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "サイコトリップ"
		},

		damage: 20,

		effect: {
			'ja-jp': "相手のバトルポケモンをこんらんにする。"
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'ja-jp': "ちょうねんりき"
		},

		damage: 40
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
				cardmarket: 707645,
				tcgplayer: 567835,
			},
		},
	],

	retreat: 1,
}

export default card