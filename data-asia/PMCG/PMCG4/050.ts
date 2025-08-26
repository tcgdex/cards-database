import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "ポリゴン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [137],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "変換1",
			},
			effect: {
				ja: "防御するポケモンが弱点を持っている場合、それを無色の以外の選択の種類に変更することができます。 （いずれかのポケモンがこの効果を終了するかのいずれかのベンチを作成します。）",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "PSYBEAM",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},
			damage: 20,
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
