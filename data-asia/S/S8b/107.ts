import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ミカルゲ",
		'zh-tw': "花岩怪",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "５００年前に 悪さをしたため 要石の ひび割れに 体を つなぎとめられてしまった。",
		'zh-tw': "因為５００年前作惡多端，導致身體被綁縛在楔石的裂縫裡。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "もうじゃのさけび",
				'zh-tw': "亡者呐喊",
			},
			cost: ["Colorless"],
			effect: {
				ja: "相手のトラッシュにあるポケモンの枚数ぶんのダメカンを、相手のポケモンに好きなようにのせる。その後、相手のトラッシュにあるポケモンをすべて、相手の山札にもどして切る。",
				'zh-tw': "將與對手棄牌區的寶可夢卡張數相同數量的傷害指示物，以任意方式放置在對手的寶可夢身上。然後，將對手棄牌區的寶可夢卡全部放回對手的牌庫並重洗。",
			},
		},
		{
			name: {
				ja: "おにび",
				'zh-tw': "鬼火",
			},
			damage: 20,
			cost: ["Darkness"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586623,
				tcgplayer: 571360,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578405,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [442],
};

export default card;
