import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "ベイリーフ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "首回りの つぼみから におう スパイシーな 香りは かいだ 人を 元気に させる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "アロマスリープ" },
			damage: 20,
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
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
		ja: "チコリータ",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [153],
};

export default card;
