import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "Rhyhorn",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [111],
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "Leer",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防衛ポケモンは相手の次のターン中に攻撃することはできません。 （いずれかのポケモンがこの効果を終了するかのいずれかのベンチを作成します。）",
			},

		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				ja: "ホーン攻撃",
			},
			damage: 30,
		},
	],

	retreat: 3,

	variants : [
		{
			type: "normal",
		},
	],
};

export default card
