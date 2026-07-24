import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ダダリン",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "緑のモズクを 絡ませ 生気を 奪い すする。 ホエルオーみたいな 大物ばかりを 好んで 狙う。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "モズクでひろう" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュにあるトレーナーズを1枚、相手に見せてから、手札に加える。",
			},
		},
		{
			name: { ja: "バスタースイング" },
			damage: 100,
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556640,
			},
		},
	],

	retreat: 3,
	regulationMark: "C",
	rarity: "Common",
	dexId: [781],
};

export default card;
