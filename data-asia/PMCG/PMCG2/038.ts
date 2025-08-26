import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "恐れて",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [22],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "敏ility性",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドが、相手の次のターン中に、Fearowに行われた損害を含む攻撃のすべての影響を防ぎます。",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ドリルペック",
			},
			damage: 40,
		},
	],


	variants : [
		{
			type: "normal",
		},
	],
};

export default card
