import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "シャワーズ",
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "シャワーズの 全身の ひれが 小刻みに 震えはじめるのは 数時間後に 雨が降る しるし。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "げきりゅうのめざめ" },
			effect: {
				ja: "このポケモンに「メモリーカプセル」がついているなら、おたがいの場の[炎]ポケモンの特性は、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "オーロラビーム" },
			damage: 70,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586928,
				tcgplayer: 571441,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "Character Rare",
	dexId: [134],
};

export default card;
