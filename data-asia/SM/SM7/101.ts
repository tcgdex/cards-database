import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "レックウザGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 180,
	types: ["Dragon"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "しっぷうどとう" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の山札を上から3枚トラッシュする。その後、トラッシュにある基本エネルギーを1枚、このポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ドラゴンブレイク" },
			damage: "30×",
			cost: ["Grass", "Lightning", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについている[草]と[雷]タイプの基本エネルギーの数x30ダメージ。",
			},
		},
		{
			name: { ja: "テンペストGX" },
			cost: ["Grass"],
			effect: {
				ja: "自分の手札をすべてトラッシュし、山札を10枚引く。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559062,
			},
		},
	],

	retreat: 3,
	rarity: "Ultra Rare",
	dexId: [384],

	suffix: "GX",
};

export default card;
