import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "エンブオー",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 180,
	types: ["Fire"],

	description: {
		ja: "アゴの 炎で こぶしを 燃やして 炎の パンチを 繰り出す。 とても 仲間思いの ポケモン。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "れっからんぶ" },
			effect: {
				ja: "自分の番に何回でも使える。自分の手札から「基本[R]エネルギー」を1枚選び、自分のポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ヒートスタンプ" },
			damage: 120,
			cost: ["Fire", "Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861269,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861570,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 861571,
			},
		},
	],

	evolveFrom: {
		ja: "チャオブー",
	},

	retreat: 4,
	regulationMark: "I",
	rarity: "None",
	dexId: [500],
};

export default card;
