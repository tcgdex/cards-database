import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ズルズキン",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "粗暴だが 自分の 家族や 群れの仲間や 縄張りを とっても 大切にしている ポケモンなのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "カチコミ" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のサイドの枚数×20ダメージ追加。",
			},
		},
		{
			name: { ja: "ヘッドバング" },
			damage: 70,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557022,
			},
		},
	],

	evolveFrom: {
		ja: "ズルッグ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [560],
};

export default card;
