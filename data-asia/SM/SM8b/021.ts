import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "マフォクシー",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	description: {
		ja: "摂氏３０００度の 炎の 渦を 超能力で 操る。 敵を 渦で 包み 焼きつくす。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "マジカルトーチ" },
			effect: {
				ja: "自分の番に1回使える。相手のバトルポケモンをやけどにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ほのおのうず" },
			damage: 150,
			cost: ["Fire", "Fire", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、2個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 550591,
			},
		},
	],

	evolveFrom: {
		ja: "テールナー",
	},

	retreat: 2,
	rarity: "None",
	dexId: [655],
};

export default card;
