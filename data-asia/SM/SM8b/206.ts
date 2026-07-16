import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "リーフィアGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 200,
	types: ["Grass"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "あおばのいぶき" },
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。エネルギーがついている自分のポケモン1匹のHPを「50」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ソーラービーム" },
			damage: 110,
			cost: ["Grass", "Colorless", "Colorless"],
		},
		{
			name: { ja: "グランブルームGX" },
			cost: ["Grass"],
			effect: {
				ja: "自分のベンチのたねポケモン全員からそれぞれ進化するカードを、自分の山札から1枚ずつ選び、それぞれにのせて進化させる。そして山札を切る。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551526,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [470],

	suffix: "GX",
};

export default card;
