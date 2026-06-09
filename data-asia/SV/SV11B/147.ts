import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "コマタナ",
	},

	illustrator: "Dsuke",
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

	variants: [{ type: "holo" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [624],

	thirdParty: {
		cardmarket: 829406,
		tcgplayer: 636501,
	},
};

export default card;
