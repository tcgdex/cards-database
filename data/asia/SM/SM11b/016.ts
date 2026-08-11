import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "電気を ため込む 性質。 ピカチュウが 群れて 暮らす 森は 落雷が 絶えず 危険だ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ほっぺすりすり" },
			cost: ["Lightning"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "ボルテッカー" },
			damage: 70,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555154,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [25],
};

export default card;
