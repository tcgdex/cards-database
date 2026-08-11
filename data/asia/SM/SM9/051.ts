import { Card } from "models/database/card";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ルージュラ",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'ja-jp': "独特の リズムで 腰を 振る。 アローラに 棲む ルージュラは そのキレが 実に 素晴らしい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "げんわくダンス" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "なぞのダンス" },
			cost: ["Psychic", "Colorless"],
			effect: {
				'ja-jp': "相手のベンチポケモンの数ぶんのダメカンを、相手のポケモンに好きなようにのせる。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558360,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [124],
};

export default card;
