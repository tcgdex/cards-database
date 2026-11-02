import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "グレイシアGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 200,
	types: ["Water"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "いてつくひとみ" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手の場・手札・トラッシュにある「ポケモンGX・EX」の特性（「いてつくひとみ」をのぞく）は、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "フロストバレット" },
			damage: 90,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ポーラースピアGX" },
			damage: "50×",
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンにのっているダメカンの数x50ダメージ。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 550621,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 2,
	rarity: "Double rare",
	dexId: [471],

	suffix: "GX",
};

export default card;
