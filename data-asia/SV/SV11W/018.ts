import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,

	name: {
		ja: "ミジュマル",
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "お腹の ホタチで 戦う。 攻撃を 受け止めてから すかさず 切りつけて 反撃するのだ。",
	},

	stage: "Basic",

	attacks: [
		{ name: { ja: "たいあたり" }, damage: 10, cost: ["Water"] },
		{ name: { ja: "みずでっぽう" }, damage: 30, cost: ["Water", "Water"] },
	],

	weaknesses: [{ type: "Lightning", value: "×2" }],

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
			foil: "pokeball",
		},
		{
			type: "reverse",
			foil: "masterball",
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [501],

	thirdParty: {
		cardmarket: 829020,
		tcgplayer: 636571,
	},
};

export default card;
