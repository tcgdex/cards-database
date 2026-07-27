import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "サイホーン",
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "頭は 悪いが 力が 強く 高層ビルも 体当たりで コナゴナに 粉砕する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つのでつく" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "ロックスマッシュ" },
			damage: 80,
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557406,
			},
		},
	],

	retreat: 4,
	regulationMark: "C",
	rarity: "Common",
	dexId: [111],
};

export default card;
