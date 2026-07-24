import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュペッタ",
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "強い おん念が ぬいぐるみを ポケモンに 変えた。 口を 開けると のろいの エネルギーが 逃げていく。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "あかいまなこ" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のトラッシュにあるたねポケモンを1枚、相手のベンチに出す。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "エネミーショー" },
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手の場のポケモンの数ぶんのダメカンを、相手のポケモンに好きなようにのせる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559002,
			},
		},
	],

	evolveFrom: {
		ja: "カゲボウズ",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [354],
};

export default card;
