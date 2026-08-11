import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ヘルガー",
		'zh-tw': "黑魯加",
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "不気味な 遠吠えが 特徴。 昔の 人は 地獄 からの 使いと 考え 恐れていた。",
		'zh-tw': "特徵是令人不寒而慄的長嚎。過去人們認為牠是來自 地獄的使者，對牠十分畏懼。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "いちげきのほうこう",
				'zh-tw': "一擊咆哮",
			},
			effect: {
				ja: "自分の番に1回使える。自分の山札から「いちげきエネルギー」を1枚選び、自分の「いちげき」のポケモンにつける。そして山札を切る。その後、つけたポケモンにダメカンを2個のせる。",
				'zh-tw': "在自己的回合時，可使用1次。從自己的牌庫選擇1張「一擊能量」卡，附於自己的「一擊」寶可夢身上。並且重洗牌庫。然後，在附上那張卡的寶可夢身上放置2個傷害指示物。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "やみのキバ",
				'zh-tw': "暗之牙",
			},
			damage: 50,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586619,
				tcgplayer: 571356,
			},
		},
	],

	evolveFrom: {
		ja: "デルビル",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "None",
	dexId: [229],
};

export default card;
