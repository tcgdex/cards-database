import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ジメレオン",
		'zh-tw': "變澀蜥",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "頭が よく 面倒くさがり。 縄張りに 敵が 近づかないよう そこかしこに 罠を 仕掛けている。",
		'zh-tw': "頭腦聰明但是很怕麻煩。為了不讓敵人接近自己的地盤， 在各個地方都設下了陷阱。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "とびはねる",
				'zh-tw': "彈跳",
			},
			damage: 40,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。",
				'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586553,
				tcgplayer: 571290,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578375,
			},
		},
	],

	evolveFrom: {
		ja: "メッソン",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [817],
};

export default card;
