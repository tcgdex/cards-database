import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "メタグロスGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Metal"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ジオテックシステム" },
			effect: {
				ja: "自分の番に1回使える。自分のトラッシュにある[超]または[鋼]エネルギーを1枚、バトルポケモンにつける。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ギガハンマー" },
			damage: 150,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「ギガハンマー」が使えない。",
			},
		},
		{
			name: { ja: "アルゴリズムGX" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にある好きなカードを5枚まで、手札に加える。そして山札を切る。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561458,
			},
		},
	],

	evolveFrom: {
		ja: "メタング",
	},

	retreat: 3,
	rarity: "Ultra Rare",
	dexId: [376],

	suffix: "GX",
};

export default card;
