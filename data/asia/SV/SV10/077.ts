import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のラッタ",
		'zh-tw': "<火箭隊的>拉達",
		'zh-cn': "<火箭隊的>拉達",
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "ヒゲは バランスを とる 大切な 器官。 どんなに 仲良くなっても 触られると 怒って 噛みつく。",
		'zh-tw': "鬍鬚是用來保持平衡的重要器官。 就算感情再好，如果摸了牠的鬍鬚， 牠都會生氣地咬過來。",
		'zh-cn': "鬍鬚是用來保持平衡的重要器官。 就算感情再好，如果摸了牠的鬍鬚， 牠都會生氣地咬過來。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "むこうみず",
				'zh-tw': "顧前不顧後",
				'zh-cn': "顧前不顧後",
			},
			damage: 90,
			cost: ["Colorless"],
			effect: {
				ja: "コインを2回投げ、すべてウラなら、このポケモンにも90ダメージ。",
				'zh-tw': "擲2次硬幣，若全部為反面，則這隻寶可夢也受到90點傷害。",
				'zh-cn': "擲2次硬幣，若全部為反面，則這隻寶可夢也受到90點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821909,
				tcgplayer: 628718,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のコラッタ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [20],
};

export default card;
