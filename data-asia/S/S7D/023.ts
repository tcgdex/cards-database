import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ハリテヤマ",
		'zh-tw': "鐵掌力士",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "太って 大きな ハリテヤマが 強いとは 限らない。 小柄でも 身軽で 技に 長けたものもいる。",
		'zh-tw': "體型壯碩的鐵掌力士未必就很強。也有體型雖小，但身輕如燕且技巧高超的鐵掌力士存在。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "こんじょう",
				'zh-tw': "毅力",
			},
			effect: {
				ja: "このポケモンが、ワザのダメージを受けてきぜつするとき、自分はコインを1回投げる。オモテなら、このポケモンはきぜつせず、残りHPが「10」の状態で場に残る。",
				'zh-tw': "這隻寶可夢受到招式的傷害而【氣絕】時，擲1次硬幣。若為正面，則這隻寶可夢不會【氣絕】，而是以剩餘HP為「10」的狀態留在場上。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ぶちかます",
				'zh-tw': "頭突",
			},
			damage: 100,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571605,
				tcgplayer: 569346,
			},
		},
	],

	evolveFrom: {
		ja: "マクノシタ",
	},

	retreat: 4,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [297],
};

export default card;
