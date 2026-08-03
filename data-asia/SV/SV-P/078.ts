import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "メルタン",
		'zh-tw': "鐵頭殼ex",
	},

	illustrator: "Nobuhiro Imagawa",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "群れになって 生活するが 時が くると １匹の 強い メルタンが 仲間たちを 取りこみ 進化する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とかす" },
			damage: 20,
			cost: ["Metal"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 727987,
				tcgplayer: 587836,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [808],
};

export default card;
