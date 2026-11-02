import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "マルマインGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "エネエネボンバー" },
			effect: {
				ja: "自分の番に1回使えて、使ったなら、このポケモンをきぜつさせる。自分のトラッシュにあるエネルギーを5枚、自分のポケモン（「ポケモンGX・EX」をのぞく）に好きなようにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "エレキボール" },
			damage: 50,
			cost: ["Lightning", "Colorless"],
		},
		{
			name: { ja: "クラッシュバーンGX" },
			damage: "30+",
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについているエネルギーを好きなだけトラッシュし、その枚数x50ダメージ追加。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551581,
			},
		},
	],

	evolveFrom: {
		ja: "ビリリダマ",
	},

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [101],

	suffix: "GX",
};

export default card;
