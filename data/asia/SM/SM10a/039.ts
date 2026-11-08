import { Card } from "models/database/card";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ビーダル",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'ja-jp': "鋭い 前歯で 削り取った 木の枝や 根っこを 積み上げて 水辺に せっせと 巣を 作る。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "てんねん" },
			effect: {
				'ja-jp': "このポケモンは、相手のポケモンが使うワザの効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ドわすれ" },
			damage: 60,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンが持っているワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザを使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557318,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ビッパ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [400],
};

export default card;
