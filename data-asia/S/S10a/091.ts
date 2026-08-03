import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ ヌメルゴンVSTAR",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Dragon"],

	stage: "VSTAR",

	abilities: [
		{
			type: "Ability",
			name: { ja: "モイストスター" },
			effect: {
				ja: "自分の番に使える。このポケモンのHPを、すべて回復する。［対戦中、自分はVSTARパワーを1回しか使えない。］",
			},
		},
	],

	attacks: [
		{
			name: { ja: "アイアンローリング" },
			damage: 200,
			cost: ["Water", "Metal", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-80」される。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 657070,
				tcgplayer: 570754,
			},
		},
	],

	evolveFrom: {
		ja: "ヒスイ ヌメルゴンV",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Holo Rare",
	dexId: [706],
};

export default card;
