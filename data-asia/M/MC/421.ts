import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ガケガニ",
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "逆さまになって 崖の 上から 獲物を 狙うが 頭に 血が上るので 長くは 待てない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちょっきんバサミ" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数ぶん、相手のバトルポケモンについているエネルギーを選び、トラッシュする。",
			},
		},
		{
			name: { ja: "ぶちかます" },
			damage: 100,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863723,
			},
		},
	],

	retreat: 3,
	regulationMark: "I",
	rarity: "None",
	dexId: [950],
};

export default card;
