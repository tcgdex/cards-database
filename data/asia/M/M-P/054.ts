import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "デデンネGX",
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "デデチェンジ" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の手札をすべてトラッシュし、山札を6枚引く。この番、すでに別の「デデチェンジ」を使っていたなら、この特性は使えない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "バチバチ" },
			damage: 50,
			cost: ["Lightning", "Colorless"],
		},
		{
			name: { ja: "ビリリターンGX" },
			damage: 50,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをマヒにする。このポケモンと、ついているすべてのカードを、手札にもどす。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864266,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Promo",
	dexId: [702],

	suffix: "GX",
};

export default card;
