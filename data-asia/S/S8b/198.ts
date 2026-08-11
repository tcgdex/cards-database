import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨノワール",
	},

	illustrator: "Megumi Higuchi",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	description: {
		ja: "意思が あるのか わかっていない。 霊界からの 電波に 従い 人や ポケモンを 連れ去るのだ。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ゴーストブリーチ" },
			effect: {
				ja: "このポケモンがいるかぎり、おたがいの場のポケモンについている特殊エネルギーの効果はすべてなくなり、【無】エネルギー1個ぶんとしてはたらく。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ホロウショット" },
			damage: 120,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 586937,
				tcgplayer: 571450,
			},
		},
	],

	evolveFrom: {
		ja: "サマヨール",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "Character Rare",
	dexId: [477],
};

export default card;
