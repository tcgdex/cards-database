import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴリランダー",
		'zh-tw': "轟擂金剛猩",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],

	description: {
		ja: "ドラムテクニックに 優れた ものが ボスになる。 穏やかな 気性で グループの 調和を 重んじる。",
		'zh-tw': "打鼓技巧最高超的那一隻會成為首領。性情溫和，重視族群的和諧相處。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "ウッドドレイン",
				'zh-tw': "木之吸取",
			},
			damage: 60,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「30」回復する。",
				'zh-tw': "將這隻寶可夢恢復「30」HP。",
			},
		},
		{
			name: {
				ja: "どとうのれんだ",
				'zh-tw': "怒濤連打",
			},
			damage: "120+",
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについているエネルギーを好きなだけトラッシュし、その枚数×30ダメージ追加。",
				'zh-tw': "將自己的場上寶可夢身上附加的任意數量的能量丟棄，增加其張數×30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560734,
				tcgplayer: 569236,
			},
		},
	],

	evolveFrom: {
		ja: "バチンキー",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [812],
};

export default card;
