import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "ドククラゲ",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "毒の触手は 普通 ８０本。 長く 生きているもの ほど その 本数は 減っていく。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "どくばり" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
		{
			name: { ja: "あばれしょくしゅ" },
			damage: "40+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、40ダメージ追加。ウラなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561413,
			},
		},
	],

	evolveFrom: {
		ja: "メノクラゲ",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [73],
};

export default card;
