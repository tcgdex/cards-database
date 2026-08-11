import { Card } from "models/database/card";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヤドラン",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'ja-jp': "海を 眺め ぼーっと している。 シェルダーの毒が 身体に 回り より ぼんやりするように なった。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ドわすれ" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンが持っているワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザを使えない。",
			},
		},
		{
			name: { ja: "からげんき" },
			damage: "50+",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンがどくまたはやけどなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561490,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヤドン",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [80],
};

export default card;
