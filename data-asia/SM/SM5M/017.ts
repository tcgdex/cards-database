import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "コリンク",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],

	description: {
		ja: "危険を 感じると 全身の 体毛が 光る。 相手が 目を くらませている あいだに 逃げる。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ぬけがけしんか" },
			effect: {
				ja: "このポケモンは、後攻プレイヤーの最初の番なら、出したばかりでも進化できる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "バチバチ" },
			damage: 10,
			cost: ["Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559830,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [403],
};

export default card;
