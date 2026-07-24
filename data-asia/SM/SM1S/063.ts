import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "ソルガレオGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Metal"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ウルトラロード" },
			effect: {
				ja: "自分の番に1回使える。自分のバトルポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "メテオドライブ" },
			damage: 230,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、すべてトラッシュする。",
			},
		},
		{
			name: { ja: "ソルバーストGX" },
			cost: ["Metal"],
			effect: {
				ja: "自分の山札にあるエネルギーを5枚まで、自分のポケモンに好きなようにつける。そして山札を切る。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561740,
			},
		},
	],

	evolveFrom: {
		ja: "コスモウム",
	},

	retreat: 3,
	rarity: "Ultra Rare",
	dexId: [791],

	suffix: "GX",
};

export default card;
