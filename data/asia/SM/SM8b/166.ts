import { Card } from "models/database/card";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒトカゲ",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'ja-jp': "生まれたときから 尻尾に 炎が 点っている。 炎が 消えたとき その 命は 終わってしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ほのおのキバ" },
			damage: 20,
			cost: ["Fire", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551326,
			},
		},
	],

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [4],
};

export default card;
