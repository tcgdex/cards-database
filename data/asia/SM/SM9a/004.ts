import { Card } from "models/database/card";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウツドン",
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'ja-jp': "葉っぱの 部分は カッターになって 相手を 切り裂く。 口からは なんでも 溶かす 液体を 吐く。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "やけつくどく" },
			cost: ["Grass"],
			effect: {
				'ja-jp': "相手のバトルポケモンをどくとやけどにする。",
			},
		},
		{
			name: { ja: "ぶつかる" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558191,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "マダツボミ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [70],
};

export default card;
