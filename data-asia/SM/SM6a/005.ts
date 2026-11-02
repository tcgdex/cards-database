import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ダルマッカ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "寝るときは 手足を ひっこめ 体内で 燃えている ６００度の 炎も 小さくなり 落ち着くよ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ダメージラッシュ" },
			damage: "10+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数x30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559241,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [554],
};

export default card;
