import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャノビー",
	},

	illustrator: "Jiro Sasumo",
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

	variants: [{ type: "holo" }],

	evolveFrom: {
		ja: "ツタージャ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [496],

	thirdParty: {
		cardmarket: 829328,
		tcgplayer: 636442,
	},
};

export default card;
