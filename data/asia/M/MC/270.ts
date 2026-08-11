import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "モルペコ",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "胃袋が 小さいので ポケットに 入れた タネを いつも 食べてないと すぐに お腹が 空いてしまうのだ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "おやつさがし" },
			effect: {
				ja: "自分の番に1回使える。自分の山札を上から1枚見て、もとにもどす。のぞむなら、そのカードをトラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ひろってつける" },
			cost: ["Lightning"],
			effect: {
				ja: "自分のトラッシュから基本エネルギーを2枚まで選び、自分のポケモンに好きなようにつける。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863566,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [877],
};

export default card;
