import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "マスカーニャ",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],

	description: {
		ja: "浮いているように 見える 花は マント裏の 毛の 反射で 茎を カモフラージュしているのだ。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ショータイム" },
			effect: {
				ja: "このポケモンがベンチにいるなら、自分の番に1回使える。このポケモンをバトルポケモンと入れ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ライジングブルーム" },
			damage: "90+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが「ポケモンex」なら、90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863358,
			},
		},
	],

	evolveFrom: {
		ja: "ニャローテ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [908],
};

export default card;
