import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "タイカイデン",
		'zh-tw': "大電海燕",
		'zh-cn': "大電海燕",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "のど袋に 翼で 作った 電気を 溜める。 羽の 油分が とても 少なく 泳ぎは 苦手。",
		'zh-tw': "會把翅膀製造的電儲存到喉囊裡。 由於羽毛含的油脂少之又少， 導致牠不是很擅長游泳。",
		'zh-cn': "會把翅膀製造的電儲存到喉囊裡。 由於羽毛含的油脂少之又少， 導致牠不是很擅長游泳。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "かっくう",
				'zh-tw': "滑翔",
				'zh-cn': "滑翔",
			},
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				ja: "ストームボルト",
				'zh-tw': "風暴伏特",
				'zh-cn': "風暴伏特",
			},
			damage: 160,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーをすべて、ベンチポケモンに好きなようにつけ替える。",
				'zh-tw': "將這隻寶可夢身上附加的所有能量卡，以任意方式改附於備戰寶可夢身上。",
				'zh-cn': "將這隻寶可夢身上附加的所有能量卡，以任意方式改附於備戰寶可夢身上。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793477,
				tcgplayer: 587623,
			},
		},
	],

	evolveFrom: {
		ja: "カイデン",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [941],
};

export default card;
