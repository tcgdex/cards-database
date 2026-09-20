import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "イッカネズミ",
	},

	illustrator: "Kariya",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "大きな ２匹が 子どもたちを 守りながら 戦う。 強い 相手には 全員で 立ち向かう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "みんなでかじる" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の場の「イッカネズミ」の数ぶんコインを投げ、オモテの数×2枚ぶん、相手の山札を上からトラッシュする。",
			},
		},
		{
			name: { ja: "はたく" },
			damage: 40,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908278,
			},
		},
	],

	evolveFrom: {
		ja: "ワッカネズミ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [925],
};

export default card;
