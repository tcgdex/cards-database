import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "メタモン",
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "体の 細胞の 作りを 自分で 組み替えて ほかの 生命体に 変身する。",
	},

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
			type: "normal",
			thirdParty: {
				cardmarket: 908271,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [132],
};

export default card;
