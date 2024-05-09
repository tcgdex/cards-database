import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ビークイン"
	},

	illustrator: "Megumi Higuchi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [416],
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "胴体は 子どもたちの 巣穴。 いろんな フェロモンを 出して 子どもたちを 自由に 操る。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "にどづき"
		},

		damage: "30×",

		effect: {
			ja: "コインを2回投げ、オモテの数×30ダメージ。"
		}
	}, {
		cost: ["Grass"],

		name: {
			ja: "しゅうげきしれい"
		},

		damage: 120,

		effect: {
			ja: "自分のベンチの「ミツハニー」を1匹選び、そのポケモンと、ついているすべてのカードを、山札にもどして切る。山札にもどせないなら、このワザは失敗。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card