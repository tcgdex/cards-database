import { Card } from "../../../interfaces";
import Set from "../S6H";

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
		'zh-tw': "會引發暴風雪的寶可夢。只要牠搖動巨大的身體，周圍立刻會變得一片雪白。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "タフネスアップ" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の場の「いちげき」のポケモン（「ユキノオー」をのぞく）全員の最大HPは、それぞれ「50」大きくなる。この効果は、この特性を持つポケモンが何匹いても、重ならない。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "メガトンパンチ",
				'zh-tw': "新月生長",
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
				cardmarket: 560418,
				tcgplayer: 569134,
			},
		},
	],

	evolveFrom: {
		ja: "ユキカブリ",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [460],
};

export default card;
