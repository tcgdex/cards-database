import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャノビー",
	},

	illustrator: "Susumu Maeya",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "地面を 滑るように 走る。 素早い 動きで 敵を まどわせ つるのムチで しとめるのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "まきつく" },
			damage: 20,
			cost: ["Grass"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "つるのムチ" },
			damage: 60,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863332,
			},
		},
	],

	evolveFrom: {
		ja: "ツタージャ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [496],
};

export default card;
