import { Card } from "../../../interfaces";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		ja: "カプ・ブルルGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つのでつく" },
			damage: 30,
			cost: ["Grass"],
		},
		{
			name: { ja: "しぜんのさばき" },
			damage: "120+",
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "のぞむなら、このポケモンについているエネルギーを、すべてトラッシュする。その場合、60ダメージ追加。",
			},
		},
		{
			name: { ja: "カプワイルドGX" },
			damage: 150,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "このポケモンのHPを、すべて回復する。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561313,
			},
		},
	],

	retreat: 3,
	rarity: "Ultra Rare",
	dexId: [787],

	suffix: "GX",
};

export default card;
