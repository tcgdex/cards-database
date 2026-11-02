import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のレドームシ",
		'zh-tw': "<火箭隊的>天罩蟲",
		'zh-cn': "<火箭隊的>天罩蟲",
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "殻の 中で 成長中。 サイコパワーで 外の 様子を うかがい 進化に 備えている。",
		'zh-tw': "正在殼裡成長著。 用精神力量掌握外界的 狀況，做好進化的準備。",
		'zh-cn': "正在殼裡成長著。 用精神力量掌握外界的 狀況，做好進化的準備。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "かくらんレーダー",
				'zh-tw': "攪亂雷達",
				'zh-cn': "攪亂雷達",
			},
			cost: ["Colorless"],
			effect: {
				ja: "相手の山札を上から5枚見て、好きな順番に入れ替えて、山札の上にもどす。",
				'zh-tw': "查看對手的牌庫上方5張卡，以任意順序排列，放回牌庫上方。",
				'zh-cn': "查看對手的牌庫上方5張卡，以任意順序排列，放回牌庫上方。",
			},
		},
		{
			name: {
				ja: "ちょうねんりき",
				'zh-tw': "超念力",
				'zh-cn': "超念力",
			},
			damage: 30,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821875,
				tcgplayer: 628684,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のサッチムシ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [825],
};

export default card;
