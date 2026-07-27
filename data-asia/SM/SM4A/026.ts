import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌイコグマ",
	},

	illustrator: "Kanako Eo",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "愛くるしい 見た目だが 怒って ジタバタする 手足に ぶつかると プロレスラーでも 吹っ飛ばされる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はねまわる" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560272,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [759],
};

export default card;
