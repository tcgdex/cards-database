import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いweezing",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [110],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "大量爆発",
			},
			effect: {
				ja: "20回のダメージ時間、コッフィング、ウィージング、およびプレイ中の暗いweezingsの総数が発生します（脱力感と抵抗を適用します。）。その後、この攻撃は、各コッフィング、ウィージング、そして暗いweezing（あなた自身でさえ）に20のダメージを与えます。衰弱と抵抗を適用しないでください。",
			},
		},
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				ja: "スタンガス",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御するポケモンは現在毒されています。尾の場合、防御するポケモンは麻痺しています。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
