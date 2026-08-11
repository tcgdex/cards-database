import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ドンカラス",
		'zh-tw': "烏鴉頭頭",
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "敵と 戦うのは ほぼ 子分。 自分の 手を 汚すのは 相手に 最後の 止めを 刺すときだけ。",
		'zh-tw': "與敵人的戰鬥幾乎全由手下來應付。只有在最後給對手致命一擊的時候， 才會弄髒自己的手。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "トリプルドロー",
				'zh-tw': "三重抽出",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を3枚引く。",
				'zh-tw': "從自己的牌庫抽出3張卡。",
			},
		},
		{
			name: {
				ja: "ひじょうのつばさ",
				'zh-tw': "無情之翼",
			},
			damage: 120,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、このポケモンをベンチの「ヤミカラス」と入れ替える。",
				'zh-tw': "若希望，將這隻寶可夢與備戰區的「黑暗鴉」互換。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656359,
				tcgplayer: 570708,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577121,
			},
		},
	],

	evolveFrom: {
		ja: "ヤミカラス",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [430],
};

export default card;
