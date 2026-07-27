import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル バリコオル",
		'zh-tw': "眷戀雲",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "タップダンスの 達人。 氷で できた ステッキを 振り 軽やかな ステップを 披露する。",
		'zh-tw': "當牠越過大海飛來，便代表嚴寒的 冬季即將終結。傳說中其慈愛將使 新的生命在洗翠大地上萌芽。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "シャッフルダンス" },
			effect: {
				ja: "自分の番に1回使える。ウラになっている相手のサイドを1枚選び、相手の山札の一番上のカードと、ウラのまま入れ替える。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "マッドパーティ",
				'zh-tw': "吸取之吻",
			},
			damage: "20×",
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "自分のトラッシュにある、ワザ「マッドパーティ」を持つポケモンの数×20ダメージ。",
				'zh-tw': "將這隻寶可夢恢復「20」HP。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561786,
				tcgplayer: 597389,
			},
		},
	],

	evolveFrom: {
		ja: "ガラル バリヤード",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [866],
};

export default card;
