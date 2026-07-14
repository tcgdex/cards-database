import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ツツケラ",
	},

	illustrator: "Koji Nakata",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "頭を 激しく 揺さぶっても 首の 筋肉が 強いおかげで ダメージは まったく ない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "にどづき" },
			damage: "10×",
			cost: ["Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数×10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [{ type: "normal" }],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [731],

	thirdParty: {
		cardmarket: 888328,
	},
};

export default card;
