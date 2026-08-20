import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "サボネア",
	},

	illustrator: "Minato",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "雨が 少ない 乾燥した 地域に 生息。 １年に １回 黄色の 花を 咲かせる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はねとばす" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、10ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 899794,
				tcgplayer: 709160,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [331],
};

export default card;
