import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "カクレオン",
		'zh-tw': "變隱龍",
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "隠れるとき 以外にも 気分や 調子で 身体の色が 変わる。 色が 濃いときほど 元気だぞ。",
		'zh-tw': "就算是在不需要隱身的時候，體色也會隨心情和身體狀態而改變。顏色越濃代表牠越有活力。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "いろいろへんげ",
				'zh-tw': "五顏六色變化",
			},
			effect: {
				ja: "このポケモンは、このポケモンについている基本エネルギーと同じタイプになる。（2種類以上のタイプの基本エネルギーがついているなら、それぞれのタイプになる。）",
				'zh-tw': "這隻寶可夢的屬性改為與這隻寶可夢身上附加的基本能量相同。（若身上附加的基本能量屬性有2種以上，則改為各自屬性。）",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "かいてんアタック",
				'zh-tw': "迴轉攻擊",
			},
			damage: 90,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560842,
				tcgplayer: 569282,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [352],
};

export default card;
