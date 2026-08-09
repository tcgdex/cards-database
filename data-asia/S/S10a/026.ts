import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ムウマージ",
		'zh-tw': "夢妖魔",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "呪いの 言葉を つぶやいて ひどい 頭痛や 恐ろしい 幻を 見せて 苦しめる。",
		'zh-tw': "會喃喃唸誦詛咒的話語，使對手激烈頭痛，或是看見 恐怖的幻覺，藉此折磨對手。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "うらみのまじない",
				'zh-tw': "怨恨咒語",
			},
			effect: {
				ja: "このポケモンのHPがまんたんの状態で、相手のポケモンからワザのダメージを受けてきぜつしたとき、ワザを使ったポケモンにダメカンを8個のせる。",
				'zh-tw': "這隻寶可夢的HP是全滿的狀態下，受到對手的寶可夢招式的傷害而【氣絕】時，在使用招式的寶可夢身上放置8個傷害指示物。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ぶきみなうたごえ",
				'zh-tw': "不祥歌聲",
			},
			cost: ["Psychic"],
			effect: {
				ja: "相手のポケモン全員に、それぞれダメカンを2個のせる。",
				'zh-tw': "在對手的所有寶可夢身上各放置2個傷害指示物。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656327,
				tcgplayer: 570689,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577109,
			},
		},
	],

	evolveFrom: {
		ja: "ムウマ",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [429],
};

export default card;
