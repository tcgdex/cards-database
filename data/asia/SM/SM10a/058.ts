import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "クチートGX",
	},

	illustrator: "ConceptLab",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "みわくのウインク" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。相手の手札を見て、その中にあるたねポケモンを、好きなだけ相手のベンチに出す。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ハッスルバイト" },
			damage: "10+",
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "相手のベンチポケモンの数×30ダメージ追加。",
			},
		},
		{
			name: { ja: "ビッグイーターGX" },
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "相手の手札を見て、その中にあるサポートを、すべてトラッシュする。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557337,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [303],

	suffix: "GX",
};

export default card;
