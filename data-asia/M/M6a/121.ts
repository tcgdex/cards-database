import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "メタモン",
	},

	illustrator: "Ounishi",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "どっきりへんしん" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、自分の山札からポケモンを1枚選び、このポケモンと入れ替える（ついているカード・ダメカン・特殊状態・効果などは、すべて引きつぐ）。入れ替えたなら、このカードは山札にもどす。そして山札を切る。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908299,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [132],
};

export default card;
