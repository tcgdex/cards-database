import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラサンド",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "氷の 上で サンドを 滑らせ その距離を 競う。 古来から 続く アローラの祭りの ひとつ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みだれひっかき" },
			damage: "10×",
			cost: [],
			effect: {
				ja: "コインを3回投げ、オモテの数x10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559814,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [27],
};

export default card;
