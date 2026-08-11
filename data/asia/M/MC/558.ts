import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オニドリル",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		'ja-jp': "オニドリルの 縄張りで 食べ物を 持って 歩くのは 危険だ。 あっという 間に かっさらわれるぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "マシンガンドリル" },
			damage: "30×",
			cost: ["Colorless"],
			effect: {
				'ja-jp': "コインを5回投げ、オモテの数×30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863860,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "オニスズメ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [22],
};

export default card;
