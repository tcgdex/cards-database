import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨノワール",
		'zh-tw': "黑夜魔靈",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	description: {
		ja: "意思が あるのか わかっていない。 霊界からの 電波に 従い 人や ポケモンを 連れ去るのだ。",
		'zh-tw': "沒人知道牠是否擁有意識。會從來自靈界的電波中接受指示，將人和寶可夢帶走。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ゴーストブリーチ",
				'zh-tw': "幽靈漂白",
			},
			effect: {
				ja: "このポケモンがいるかぎり、おたがいの場のポケモンについている特殊エネルギーの効果はすべてなくなり、【無】エネルギー1個ぶんとしてはたらく。",
				'zh-tw': "只要這隻寶可夢在場上，雙方的場上寶可夢身上附加的特殊能量的效果全部消除，視為提供1個【無】能量。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ホロウショット",
				'zh-tw': "陰森射擊",
			},
			damage: 120,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586584,
				tcgplayer: 571321,
			},
		},
	],

	evolveFrom: {
		ja: "サマヨール",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "None",
	dexId: [477],
};

export default card;
