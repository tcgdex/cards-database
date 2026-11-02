import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "カイリューEX",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 180,
	types: ["Colorless"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ひきあげる" },
			effect: {
				ja: "この特性は、このカードを手札からベンチに出したとき、1回使える。自分のトラッシュからたねポケモン（「カイリューEX」をのぞく）を2枚選び、相手に見せてから、手札に加える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "はかいこうせん" },
			damage: 130,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 749915,
				tcgplayer: 587883,
			},
		},
	],

	retreat: 3,
	rarity: "Promo",
	dexId: [149],

	suffix: "EX",
};

export default card;
