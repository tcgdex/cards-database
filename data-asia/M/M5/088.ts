import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ダダリン",
	},

	illustrator: "Nakamura Ippan",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "むねんのイカリ" },
			damage: "30+",
			cost: ["Psychic"],
			effect: {
				ja: "自分のトラッシュに、特性「ばけがくれ」を持つポケモンが4枚以上あるなら、140ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [{ type: "holo" }],

	retreat: 3,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [781],

	thirdParty: {
		cardmarket: 888633,
	},
};

export default card;
