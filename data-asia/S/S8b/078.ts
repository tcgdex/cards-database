import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "レドームシ",
		'zh-tw': "天罩蟲",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "殻の 中で 成長中。 サイコパワーで 外の 様子を うかがい 進化に 備えている。",
		'zh-tw': "正在殼裡成長著。用精神力量掌握外界的狀況，做好進化的準備。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "レーダー",
				'zh-tw': "雷達",
			},
			cost: ["Psychic"],
			effect: {
				ja: "自分の山札を上から4枚見て、好きな順番に入れ替えて、山札の上にもどす。",
				'zh-tw': "查看自己的牌庫上方4張卡，以任意順序排列，放回牌庫上方。",
			},
		},
		{
			name: {
				ja: "ぶつかる",
				'zh-tw': "衝撞",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586594,
				tcgplayer: 571331,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578392,
			},
		},
	],

	evolveFrom: {
		ja: "サッチムシ",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "None",
	dexId: [825],
};

export default card;
