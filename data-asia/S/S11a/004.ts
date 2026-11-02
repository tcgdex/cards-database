import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "マスキッパ",
		'zh-tw': "尖牙籠",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "湿地帯に 生える 木に巻きつき 甘い香りの だえきで 獲物を 誘き寄せては ひとくちで 食べる。",
		'zh-tw': "會纏繞在生長於潮濕地帶的樹木上，以散發甜甜香氣的唾液吸引獵物靠近，再一口吃掉。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ただれるだえき",
				'zh-tw': "潰爛唾液",
			},
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンをどくとやけどにする。",
				'zh-tw': "將對手的戰鬥寶可夢【中毒】與【灼傷】。",
			},
		},
		{
			name: {
				ja: "しばりつける",
				'zh-tw': "束縛",
			},
			damage: 40,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673001,
				tcgplayer: 570767,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570861,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [455],
};

export default card;
