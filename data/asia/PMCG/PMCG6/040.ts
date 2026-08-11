import { Card } from "models/database/card"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サカキのギャラドス",
	},
	illustrator: "Ken Sugimori",

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [130],
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				'ja-jp': "嵐を召喚します",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。両方がヘッドである場合、この攻撃はお互いのポケモン（あなた自身でさえ）に20のダメージを与えます。この攻撃に衰弱と抵抗を適用しないでください。",
			},
		},
		{
			cost: ["Water", "Water", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ドラゴン・トルネード",
			},
			effect: {
				'ja-jp': "この攻撃が防御ポケモンをノックアウトしない限り、対戦相手のベンチ付きポケモンを1つ選択し、防御ポケモンに切り替えます。",
			},
			damage: 40,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 575334
			},
		},
	],
};

export default card
