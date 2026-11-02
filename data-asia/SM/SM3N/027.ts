import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "サイホーン",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "頭は 悪いが 力が 強く 高層ビルも 体当たりで コナゴナに 粉砕する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つきたおし" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "つのドリル" },
			damage: 60,
			cost: ["Fighting", "Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561027,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [111],
};

export default card;
