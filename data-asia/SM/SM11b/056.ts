import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "ドガース",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "薄い バルーン状の 体に 猛毒の ガスが つまっている。 近くに 来ると くさい。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ぶっとびボム" },
			effect: {
				ja: "自分の番に、このカードが「ホミカ」の効果でトラッシュされたとき、1回使える。相手のポケモン全員に、それぞれダメカンを1個のせる。（ダメカンをのせるのは「ホミカ」の効果のあと。）",
			},
		},
	],

	attacks: [
		{
			name: { ja: "どくガス" },
			damage: 10,
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555274,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Character Rare",
	dexId: [109],
};

export default card;
