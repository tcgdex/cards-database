import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "ミジュマル",
	},

	illustrator: "OKACHEKE",
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

	weaknesses: [{ type: "Lightning", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [501],
	thirdParty: {
		cardmarket: 829458,
		tcgplayer: 636655,
	},
};

export default card;
