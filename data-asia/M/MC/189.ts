import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "トドグラー",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "流氷の 上で 生活。 泳ぎながら 獲物の 匂いを 嗅ぎわけて 見つけだし 捕まえる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "つきたおし" },
			damage: 30,
			cost: ["Water"],
		},
		{
			name: { ja: "アイスボール" },
			damage: 60,
			cost: ["Water", "Water"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863485,
			},
		},
	],

	evolveFrom: {
		ja: "タマザラシ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [364],
};

export default card;
