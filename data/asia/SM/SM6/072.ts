import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ホルード",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "ショベルカー並みの パワーの 耳で 硬い 岩盤も コナゴナ。 穴を 掘り終えると ダラダラと 過ごす。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "やまおこし" },
			damage: "60+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "のぞむなら、40ダメージ追加。その場合、自分の山札を上から2枚トラッシュする。",
			},
		},
		{
			name: { ja: "れんぞくいわなげ" },
			damage: "80×",
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数x80ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559617,
			},
		},
	],

	evolveFrom: {
		ja: "ホルビー",
	},

	retreat: 3,
	rarity: "Common",
	dexId: [660],
};

export default card;
