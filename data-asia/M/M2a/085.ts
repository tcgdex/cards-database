import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "チャーレム",
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "ヨガの 修行で 鍛えられた サイコパワーで 相手の 動きを 予測することが できるのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "セブンスキック" },
			damage: 150,
			cost: ["Fighting"],
			effect: {
				ja: "自分の手札が7枚でないなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861328,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861666,
			},
		},
		{
			type: "reverse",
			foil: "quickball",
			thirdParty: {
				cardmarket: 861667,
			},
		},
	],

	evolveFrom: {
		ja: "アサナン",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [308],
};

export default card;
