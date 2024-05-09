import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴチミル"
	},

	illustrator: "SIE NANAHARA",
	category: "Pokemon",
	dexId: [575],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "催眠術で 子どもを 眠らせ 連れ去ってしまう。 星明りが きらめく 夜には 注意しろ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "サイコトリップ"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。"
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ちょうねんりき"
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

	retreat: 1
}

export default card