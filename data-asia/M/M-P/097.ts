import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "パウワウ",
	},

	illustrator: "cochi8i",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "寒くなるほど 元気になって 氷の 浮かぶ 冷たい 海を うれしそうに 泳ぎまわる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みずかけ" },
			damage: 10,
			cost: ["Water"],
		},
		{
			name: { ja: "スプラッシュ" },
			damage: 30,
			cost: ["Water", "Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888189,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Promo",
	dexId: [86],
};

export default card;
