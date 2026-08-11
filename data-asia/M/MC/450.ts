import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ヘルガー",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "不気味な 遠吠えを 聞いた ポケモンは 震え 一目散に 自分の 巣に 戻る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "げきをとばす" },
			cost: ["Darkness"],
			effect: {
				ja: "自分の山札から基本エネルギーを2枚まで選び、自分のポケモンに好きなようにつける。そして山札を切る。",
			},
		},
		{
			name: { ja: "しっこくのキバ" },
			damage: 100,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863752,
			},
		},
	],

	evolveFrom: {
		ja: "デルビル",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [229],
};

export default card;
