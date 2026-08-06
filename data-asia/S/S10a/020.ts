import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ピクシー",
		'zh-tw': "皮可西",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "妖精の 仲間で めったに 人前に 出てこない。 気配を 感じて すぐに 逃げてしまうようだ。",
		'zh-tw': "妖精的一種。極少出現在人類面前。一感覺到有人 就會立刻逃走。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "せいれいのまもり",
				'zh-tw': "妖精守護",
			},
			effect: {
				ja: "このポケモンがいるかぎり、自分のポケモン全員が、相手の[N]ポケモンから受けるワザのダメージは「-30」される。この効果は、この特性を持つポケモンが何匹いても、重ならない。",
				'zh-tw': "只要這隻寶可夢在場上，自己的所有寶可夢受到對手的【龍】寶可夢招式的傷害「-30」點。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ムーンインパクト",
				'zh-tw': "月亮衝擊",
			},
			damage: 90,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656290,
				tcgplayer: 570683,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577104,
			},
		},
	],

	evolveFrom: {
		ja: "ピッピ",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [36],
};

export default card;
