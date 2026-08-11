import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "サザンドラex",
		'zh-tw': "三首惡龍ex",
		'zh-cn': "三首惡龍ex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "クラッシュヘッズ",
				'zh-tw': "粉碎頭",
				'zh-cn': "粉碎頭",
			},
			damage: 200,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手の山札を上から3枚トラッシュする。",
				'zh-tw': "將對手的牌庫上方3張卡丟棄。",
				'zh-cn': "將對手的牌庫上方3張卡丟棄。",
			},
		},
		{
			name: {
				ja: "オブシディアン",
				'zh-tw': "黑曜石",
				'zh-cn': "黑曜石",
			},
			damage: 130,
			cost: ["Psychic", "Darkness", "Metal", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン2匹にも、それぞれ130ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的2隻備戰寶可夢也各受到130點傷害。[在備戰區不計算弱點・抵抗力。]",
				'zh-cn': "對手的2隻備戰寶可夢也各受到130點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 793506,
				tcgplayer: 587652,
			},
		},
	],

	evolveFrom: {
		ja: "ジヘッド",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [635],

	suffix: "EX",
};

export default card;
