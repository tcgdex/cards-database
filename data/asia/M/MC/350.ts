import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ハカドッグ",
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "普段は 墓場で 眠っている。 数いる 犬ポケモンの中でも もっとも 主に 忠実だ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ホラーバイト" },
			damage: 30,
			cost: ["Psychic"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数ぶん、相手の手札からオモテを見ないで選び、そのカードのオモテを見て、相手の山札にもどして切る。",
			},
		},
		{
			name: { ja: "ぶちかます" },
			damage: 130,
			cost: ["Psychic", "Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863652,
			},
		},
	],

	evolveFrom: {
		ja: "ボチ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [972],
};

export default card;
