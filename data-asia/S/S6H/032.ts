import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "スリーパー",
		'zh-tw': "引夢貘人",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "夜に 眠れない 人の ために 病院で お医者さんの 手伝いをする スリーパーも いる。",
		'zh-tw': "為了幫助那些晚上失眠的人，也有些引夢貘人會到醫院去協助醫生。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "さいみんじゅつ",
				'zh-tw': "咬",
			},
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
		{
			name: { ja: "めざましビンタ" },
			damage: "30+",
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンが特殊状態なら、90ダメージ追加。その後、相手のバトルポケモンの特殊状態をすべて回復する。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560448,
				tcgplayer: 569164,
			},
		},
	],

	evolveFrom: {
		ja: "スリープ",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [97],
};

export default card;
