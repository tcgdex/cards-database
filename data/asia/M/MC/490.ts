import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "モモワロウ",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'ja-jp': "モモ型の 殻は 猛毒の 貯蔵庫。 毒の 餅を 作り 人や ポケモンに ふるまう。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "もうどくしはい" },
			effect: {
				'ja-jp': "このポケモンがバトル場にいるかぎり、相手のどくのポケモンは、どくでのせるダメカンの数が5個多くなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ポイズンチェーン" },
			damage: 10,
			cost: ["Darkness", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをどくにする。次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863792,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [1025],
};

export default card;
