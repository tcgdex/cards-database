import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャローテ",
	},

	illustrator: "Felicia Chen",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "長い 体毛の下に 隠した ツタを 器用に 操り 硬い つぼみを 敵に 叩きつける。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "マジカルリーフ" },
			damage: "30+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、30ダメージ追加し、このポケモンのHPを「30」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863357,
			},
		},
	],

	evolveFrom: {
		ja: "ニャオハ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [907],
};

export default card;
