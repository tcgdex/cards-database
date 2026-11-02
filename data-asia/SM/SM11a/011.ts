import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "エンテイ",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "新しい 火山が できるたび 生まれてくると 伝えられる 大地を 駆け巡る ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "まきかえす" },
			damage: "30+",
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、90ダメージ追加。",
			},
		},
		{
			name: { ja: "ほのおのたてがみ" },
			damage: 100,
			cost: ["Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556583,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [244],
};

export default card;
