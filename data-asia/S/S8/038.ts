import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ルージュラ",
		'zh-tw': "迷唇姐",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "人間の 言葉のような 不思議な 鳴き声。 ルージュラに 歌わせる 曲を 作る 音楽家もいる。",
		'zh-tw': "奇異的叫聲聽起來就像是人類的語言。也有些音樂家會創作讓迷唇姐唱的曲子。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ダブルドロー",
				'zh-tw': "雙重抽出",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札を2枚引く。",
				'zh-tw': "從自己的牌庫抽出2張卡。",
			},
		},
		{
			name: {
				ja: "げんわくダンス",
				'zh-tw': "眩目舞",
			},
			damage: 30,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
				'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575593,
				tcgplayer: 569539,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [124],
};

export default card;
