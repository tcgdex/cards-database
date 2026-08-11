import { Card } from "models/database/card";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ベイリーフ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'ja-jp': "首回りの つぼみから におう スパイシーな 香りは かいだ 人を 元気に させる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "アロマスリープ" },
			damage: 20,
			cost: ["Grass"],
			effect: {
				'ja-jp': "相手のバトルポケモンをねむりにする。",
			},
		},
		{
			name: { ja: "はっぱカッター" },
			damage: 50,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558643,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "チコリータ",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [153],
};

export default card;
