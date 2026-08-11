import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ヘルガー",
	},

	illustrator: "burari",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "不気味な 遠吠えを 聞いた ポケモンは 震え 一目散に 自分の 巣に 戻る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "バークアウト" },
			damage: 100,
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-100」される。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863392,
			},
		},
	],

	evolveFrom: {
		ja: "デルビル",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [229],
};

export default card;
