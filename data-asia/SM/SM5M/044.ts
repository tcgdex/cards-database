import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "ガブリアス",
	},

	illustrator: "Megumi Mizutani",
	category: "Pokemon",
	hp: 150,
	types: ["Dragon"],

	description: {
		ja: "頭に ついた ２つの 突起は センサーの 役目。 遥か 先の 獲物の 様子も わかる。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "クイックダイブ" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "おうじゃのやいば" },
			damage: "100+",
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "この番、手札から「シロナ」を出して使っていたなら、100ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559857,
			},
		},
	],

	evolveFrom: {
		ja: "ガバイト",
	},

	retreat: 0,
	rarity: "Rare",
	dexId: [445],
};

export default card;
