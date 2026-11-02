import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "イッカネズミ",
	},

	illustrator: "osare",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

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
			type: "holo",
			thirdParty: {
				cardmarket: 908301,
			},
		},
	],

	evolveFrom: {
		ja: "ワッカネズミ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [925],
};

export default card;
