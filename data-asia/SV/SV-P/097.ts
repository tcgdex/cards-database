import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "モトトカゲ",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "大昔から 人を 背中に 乗せていたらしい。 １万年前の 壁画に 様子が 描かれている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ガンガンダッシュ" },
			cost: ["Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数ぶん、自分の山札を引く。",
			},
		},
		{
			name: { ja: "パワータックル" },
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 723911,
				tcgplayer: 587855,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [967],
};

export default card;
