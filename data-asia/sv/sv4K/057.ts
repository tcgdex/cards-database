import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "バクオング"
	},

	illustrator: "LINNE",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [295],
	hp: 160,
	types: ["Colorless"],

	description: {
		ja: "大声だけじゃない。 体の 穴から いろいろな 音色を 出し 仲間と 意思疎通を するのだ。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "サドンシャウト"
		},

		effect: {
			ja: "相手のバトルポケモンと、ついているすべてのカードを、トラッシュする。この番、このポケモンが「ドゴーム」から進化していないなら、このワザは失敗。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ヘッドバング"
		},

		damage: 140
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3
}

export default card