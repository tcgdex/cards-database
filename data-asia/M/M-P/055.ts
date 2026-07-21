import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ミカルゲ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "いつも 悪さばかり していたら 不思議な 術で 本体を 要石に 縛りつけられた。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ふういんのさけび" },
			effect: {
				ja: "このポケモンがいるかぎり、おたがいのプレイヤーは、手札から「ACE SPEC」のカードを出して使えない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "オカルトミラー" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札をすべて山札にもどし、山札を切る。その後、相手の手札の枚数ぶん、自分の山札を引く。",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864267,
			},
		},
	],

	retreat: 1,
	rarity: "Promo",
	dexId: [442],
};

export default card;
