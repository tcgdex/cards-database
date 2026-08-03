import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "オドリドリ",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "むらさきのミツを 吸った オドリドリ。 しなやかで 艶やかな 踊りを 参考にする ダンサーも いる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ミックスコール" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からポケモンとサポートを1枚ずつ選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "するどいはね" },
			damage: 80,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 576797,
				tcgplayer: 597424,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [741],
};

export default card;
