import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトカゲ",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "生まれたときから 尻尾に 炎が 点っている。 炎が 消えたとき その 命は 終わってしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ほのおのキバ" },
			damage: 20,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559237,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [4],
};

export default card;
