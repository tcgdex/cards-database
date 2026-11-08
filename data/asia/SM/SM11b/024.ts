import { Card } from "models/database/card";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ネイティオ",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'ja-jp': "未来を 予知する 力が あるが 未来を 変えるほどの 力は 持っていないと いわれる ポケモン。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ぶきみなかぜ" },
			cost: ["Psychic"],
			effect: {
				'ja-jp': "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "ライフダウン" },
			cost: ["Psychic", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンの残りHPが「10」になるように、ダメカンをのせる。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555179,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ネイティ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [178],
};

export default card;
