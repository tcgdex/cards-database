import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ワナイダー"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [918],
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "木の枝や 天井に 糸で 張りつき 音もなく 行動する。 獲物に 気づかれる前に 倒す。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			ja: "まきこみトラップ"
		},

		effect: {
			ja: "おたがいのバトルポケモンと、ついているすべてのカードを、それぞれの山札にもどして切る。［バトル場に次のポケモンを出すのは自分から。］"
		}
	}, {
		cost: ["Grass", "Grass", "Grass"],

		name: {
			ja: "ぶちかます"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card