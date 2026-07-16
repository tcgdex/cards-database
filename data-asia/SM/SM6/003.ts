import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "コフキムシ",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 30,
	types: ["Grass"],

	description: {
		ja: "体を 覆う 粉が 体温を 調節するので どんな 気候や 風土の 地域でも 暮らせる。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "いじょうはっせい" },
			effect: {
				ja: "後攻プレイヤーの最初の自分の番にだけ1回使える。自分の山札にある「コフーライ」「ビビヨン」を1枚ずつ、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 10,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559548,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [664],
};

export default card;
