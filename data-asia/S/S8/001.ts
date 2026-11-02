import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "キャタピー",
		'zh-tw': "綠毛蟲",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "脚は 短いが 吸盤に なっているので 坂でも 壁でも くたびれることなく 進んでいく。",
		'zh-tw': "別看牠的腳很短，因為是吸盤，所以無論是斜坡還是牆壁都能輕鬆前進。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "むれる",
				'zh-tw': "群聚",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から「キャタピー」を1枚選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張「綠毛蟲」卡，放置於備戰區。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "むしくい",
				'zh-tw': "蟲咬",
			},
			damage: 10,
			cost: ["Grass"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575551,
				tcgplayer: 569502,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [10],
};

export default card;
