import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル フリーザーV",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "さいこうちく" },
			effect: {
				ja: "自分の番に、自分の手札を2枚トラッシュするなら、1回使える。自分の山札を1枚引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "サイコビーム" },
			damage: 110,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587028,
				tcgplayer: 571482,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Character Super Rare",
	dexId: [144],
};

export default card;
