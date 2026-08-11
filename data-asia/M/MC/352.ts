import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "サケブシッポ",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "目撃例は 過去 １件のみ。 古い 探検記に 記された 謎の 生物に 似た ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "うたいはげます" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のベンチの「古代」のポケモン1匹のHPを「100」回復する。",
			},
		},
		{
			name: { ja: "ハイパーボイス" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863654,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [985],
};

export default card;
