import { Card } from "../../../interfaces";
import Set from "../MF";

const card: Card = {
	set: Set,
	name: {
		ja: "キュワワー",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "花を つけていると 嬉しくなって 癒しの 効果を 発揮する。 花が 多い 土地を 好む。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "やすらぎアロマ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のベンチポケモン1匹のHPを「80」回復する。",
			},
		},
		{
			name: { ja: "マジカルショット" },
			damage: 30,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908378,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [764],
};

export default card;
