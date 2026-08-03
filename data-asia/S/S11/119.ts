import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ドラピオンVSTAR",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],

	stage: "VSTAR",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ハザードスター" },
			effect: {
				ja: "自分の番に使える。相手のバトルポケモンをどくとマヒにする。このどくでのせるダメカンの数は3個になる。［対戦中、自分はVSTARパワーを1回しか使えない。］",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ビッグバンアーム 250-" },
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数×10ダメージぶん、このワザのダメージは小さくなる。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 668237,
				tcgplayer: 570050,
			},
		},
	],

	evolveFrom: {
		ja: "ドラピオンV",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Holo Rare",
	dexId: [452],
};

export default card;
