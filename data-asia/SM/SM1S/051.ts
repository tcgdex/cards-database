import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌイコグマ",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "愛くるしい 見た目だが 怒って ジタバタする 手足に ぶつかると プロレスラーでも 吹っ飛ばされる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561728,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [759],
};

export default card;
