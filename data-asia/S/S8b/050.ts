import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "サンダー",
		'zh-tw': "閃電鳥",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "雷雲の 中に いると 言われる 伝説の ポケモン。 雷を 自在に 操る。",
		'zh-tw': "據說藏身在雷雲中的傳說的寶可夢。能夠隨心所欲地操縱雷電。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ドリルくちばし",
				'zh-tw': "啄鑽",
			},
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "スナイプサンダー",
				'zh-tw': "狙擊雷電",
			},
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーをすべてトラッシュし、相手の「ポケモンV・GX」1匹に、160ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "將這隻寶可夢身上附加的能量全部丟棄，對手的1隻「寶可夢【V】・【GX】」受到160點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586566,
				tcgplayer: 571303,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "None",
	dexId: [145],
};

export default card;
