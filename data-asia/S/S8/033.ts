import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "クワガノン",
		'zh-tw': "鍬農炮蟲",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	description: {
		ja: "予備バッテリーとして デンヂムシを 抱えて 飛べば 大電力の 電磁ビームを 連射できる。",
		'zh-tw': "如果牠在飛行時把蟲電寶抱住當作備用電池，就能連續發射電力超高的電磁光束。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "かみつく",
				'zh-tw': "咬住",
			},
			damage: 70,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
		{
			name: {
				ja: "エレキブラスター",
				'zh-tw': "電氣引爆",
			},
			cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[雷]エネルギーを2個トラッシュし、相手のポケモン1匹に、200ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "將這隻寶可夢身上附加的2個【雷】能量丟棄，對手的1隻寶可夢受到200點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575588,
				tcgplayer: 569534,
			},
		},
	],

	evolveFrom: {
		ja: "デンヂムシ",
	},

	retreat: 0,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [738],
};

export default card;
