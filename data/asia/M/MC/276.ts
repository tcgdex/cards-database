import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "タイカイデン",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "のど袋に 翼で 作った 電気を 溜める。 羽の 油分が とても 少なく 泳ぎは 苦手。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ふうりょくチャージ" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+120」される。",
			},
		},
		{
			name: { ja: "ストロングボルト" },
			damage: 100,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863572,
			},
		},
	],

	evolveFrom: {
		ja: "カイデン",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [941],
};

export default card;
