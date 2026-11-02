import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤヤコマ",
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "人懐っこいので 扱いやすい ポケモンだが 一度 戦いに なると とても 荒々しいぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "なきごえ" },
			cost: ["Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-20」される。",
			},
		},
		{
			name: { ja: "はばたく" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561448,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [661],
};

export default card;
