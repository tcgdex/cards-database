import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ユキノオー",
		'zh-tw': "暴雪王",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "ブリザードを 巻き起こす ポケモン。 大きな 体を 揺すれば あたり一面 すぐに 真っ白だ。",
		'zh-tw': "會引發暴風雪的寶可夢。只要牠搖動巨大的身體， 周圍立刻會變得一片雪白。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "タフネスアップ",
				'zh-tw': "堅韌提升",
			},
			effect: {
				ja: "このポケモンがいるかぎり、自分の場の「いちげき」のポケモン（「ユキノオー」をのぞく）全員の最大HPは、それぞれ「50」大きくなる。この効果は、この特性を持つポケモンが何匹いても、重ならない。",
				'zh-tw': "只要這隻寶可夢在場上，自己的場上的所有「一擊」寶可夢（「暴雪王」除外）的最大HP各增加「50」。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "メガトンパンチ",
				'zh-tw': "百萬噸重拳",
			},
			damage: 90,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586523,
				tcgplayer: 571261,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578358,
			},
		},
	],

	evolveFrom: {
		ja: "ユキカブリ",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "None",
	dexId: [460],
};

export default card;
