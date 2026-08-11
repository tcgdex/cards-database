import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "バネブー",
	},

	illustrator: "toi8",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "飛び跳ねていないと 死んでしまう。 頭に 乗せている 真珠が サイコパワーを 増幅させるのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "トリプルスピン" },
			damage: "10×",
			cost: ["Psychic"],
			effect: {
				ja: "コインを3回投げ、オモテの数×10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863607,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [325],
};

export default card;
