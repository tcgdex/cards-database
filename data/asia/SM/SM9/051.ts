import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ルージュラ",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "独特の リズムで 腰を 振る。 アローラに 棲む ルージュラは そのキレが 実に 素晴らしい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "げんわくダンス" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "なぞのダンス" },
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手のベンチポケモンの数ぶんのダメカンを、相手のポケモンに好きなようにのせる。",
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
