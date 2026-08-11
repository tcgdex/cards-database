import { Card } from "models/database/card";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ホーホー",
	},

	illustrator: "Yukihiro Tada",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'ja-jp': "正確に 時を 告げることから 世界の ことわりを わきまえた 知恵の神様 とする 国もある。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "さんどづき" },
			damage: "10×",
			cost: ["Colorless"],
			effect: {
				'ja-jp': "コインを3回投げ、オモテの数×10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861380,
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 861746,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 861747,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [163],
};

export default card;
