import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "ギャラドス",
	},

	illustrator: "so-taro",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		ja: "ギャラドスを 怒らせた ある街は 一晩の うちに 焼き尽くされ 跡形も なくなったと いわれる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "あたりちらす" },
			damage: "50×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のトラッシュにある「コイキング」の枚数x50ダメージ。",
			},
		},
		{
			name: { ja: "スプラッシュバーン" },
			damage: 160,
			cost: ["Water", "Water", "Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチポケモン全員にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561009,
			},
		},
	],

	evolveFrom: {
		ja: "コイキング",
	},

	retreat: 4,
	rarity: "Rare",
	dexId: [130],
};

export default card;
