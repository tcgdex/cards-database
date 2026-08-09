import { Card } from "../../../interfaces";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		ja: "ランクルス",
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "超能力を 使うよりも 自慢の 腕を ぶん回して 殴り倒すのを 好んでいる。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "サモンゲート" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を上から8枚見て、その中からポケモンを好きなだけ選び、ベンチに出す。残りのカードは山札にもどして切る。",
			},
		},
		{
			name: { ja: "ブレインシェイク" },
			damage: 100,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
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
		ja: "ダブラン",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [579],
};

export default card;
