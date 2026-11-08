import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナッシー",
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		'ja-jp': "ごくまれに 頭の どれか ひとつが 地面に 落ちると タマタマになって 動きだすという。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "メガドレイン" },
			damage: 50,
			cost: ["Grass", "Colorless"],
			effect: {
				'ja-jp': "このポケモンのHPを「30」回復する。",
			},
		},
		{
			name: { ja: "ソーラービーム" },
			damage: 130,
			cost: ["Grass", "Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863298,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "タマタマ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [103],
};

export default card;
