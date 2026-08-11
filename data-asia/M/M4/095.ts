import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ミルホッグ",
	},

	illustrator: "MARINA Chikazawa",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "体内の 発光物質で 目玉や 体を 光らせ 襲ってきた 敵を ひるませる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ぬきうちチェック" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを3回投げる。オモテが出たなら、相手の手札を見て、その中からカードをオモテの数ぶん選び、相手の山札にもどして切る。",
			},
		},
		{
			name: { ja: "けたぐり" },
			damage: 50,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 877324,
			},
		},
	],

	evolveFrom: {
		ja: "ミネズミ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [505],
};

export default card;
