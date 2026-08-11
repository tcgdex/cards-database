import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "電気を ため込む 性質。 ピカチュウが 群れて 暮らす 森は 落雷が 絶えず 危険だ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ピカボール" },
			damage: 30,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558201,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [25],
};

export default card;
