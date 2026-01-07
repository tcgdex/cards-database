import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "コマタナ",
	},

	illustrator: "Oku",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "全身が 刃物の ポケモン。 戦いで 刃こぼれすると 河原の 石で 刃を とぐ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おいつめる" },
			damage: 10,
			cost: ["Metal"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],

	resistances: [{ type: "Grass", value: "-30" }],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [624],
};

export default card;
