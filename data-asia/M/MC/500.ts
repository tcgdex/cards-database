import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ドーミラー",
	},

	illustrator: "Nabatame Kazutaka",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "古い お墓から みつかる。 背中の 模様には 神秘的な 力が 宿っていると いわれる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "シールドアタック" },
			damage: "20+",
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863802,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [436],
};

export default card;
