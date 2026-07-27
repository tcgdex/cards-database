import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤレユータン",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "森の 隅々まで 知り尽くし 傷ついた ポケモンが いると 薬草を 探して 治療する。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "さるぢえ" },
			effect: {
				ja: "自分の番に1回使える。自分の手札を1枚選び、山札の上のカードと入れ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "はりたおす" },
			damage: 70,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587010,
				tcgplayer: 571464,
			},
		},
	],

	retreat: 2,
	regulationMark: "D",
	rarity: "Character Rare",
	dexId: [765],
};

export default card;
