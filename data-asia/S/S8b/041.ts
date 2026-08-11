import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "コオリッポ",
		'zh-tw': "冰砌鵝",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "頭の 毛は 脳の 表面に つながっている。 考えごとを すると 冷気が 発生する。",
		'zh-tw': "頭上的毛連接著大腦的表層，一旦開始動腦思考就會產生冷氣。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ブロックスライダー",
				'zh-tw': "冰塊滑梯",
			},
			cost: ["Water", "Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、自分の場のポケモンについている「フュージョンエネルギー」の数×40ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的1隻寶可夢受到自己的場上寶可夢身上附加的「匯流能量」的數量×40點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
		{
			name: {
				ja: "つららミサイル",
				'zh-tw': "冰柱飛彈",
			},
			damage: 100,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586557,
				tcgplayer: 571294,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578377,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [875],
};

export default card;
