import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ドロンチ",
		'zh-tw': "多龍奇",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "世話をする ドラメシヤを 頭に 乗せていないと 落ち着かないので ほかの ポケモンを 乗せようとする。",
		'zh-tw': "要是沒讓自己在照顧的多龍梅西亞乘在頭上就靜不下心來，甚至會因此試圖把別的寶可夢放到頭上。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ホロウショット",
				'zh-tw': "陰森射擊",
			},
			damage: 20,
			cost: ["Psychic"],
		},
		{
			name: {
				ja: "とんぼがえり",
				'zh-tw': "急速折返",
			},
			damage: 30,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。",
				'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575605,
				tcgplayer: 569551,
			},
		},
	],

	evolveFrom: {
		ja: "ドラメシヤ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [886],
};

export default card;
