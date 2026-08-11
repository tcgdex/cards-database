import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ランクルス",
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'ja-jp': "超能力を 使うよりも 自慢の 腕を ぶん回して 殴り倒すのを 好んでいる。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "サモンゲート" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札を上から8枚見て、その中からポケモンを好きなだけ選び、ベンチに出す。残りのカードは山札にもどして切る。",
			},
		},
		{
			name: { ja: "ブレインシェイク" },
			damage: 100,
			cost: ["Psychic", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752797,
				tcgplayer: 568366,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ダブラン",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [579],
};

export default card;
