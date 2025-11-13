import { Card } from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "Scizor Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [212],
	hp: 120,
	types: ["Metal"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "危険の認識",
			},
			effect: {
				ja: "Scizor Exの残りのHPが60以下である限り、Scizor Exは防御するPokã©Monに40個のダメージを与えます（脱力感と抵抗を適用する前）。",
			},
		}],

	attacks: [
		{
			cost: ["Metal", "Colorless"],
			name: {
				ja: "スチール翼",
			},
			effect: {
				ja: "対戦相手の次のターン中に、攻撃によってScizor Exに与えられた損害は20増加します（脱力と抵抗を適用した後）。",
			},
			damage: 40,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "クロスカット",
			},
			effect: {
				ja: "防御ポケモンが進化したポケモンである場合、この攻撃は50のダメージと30のダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
