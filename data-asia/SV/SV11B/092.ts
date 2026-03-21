import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ドレディア",
	},

	illustrator: "En Morikura",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "美しい 花を 咲かせるのは ベテラントレーナーでも 難しい。 セレブに 人気の ポケモン。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "げんわくアロマ" },
			damage: 30,
			cost: ["Grass"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをどくとマヒにする。ウラなら、相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "いあいぎり" },
			damage: 70,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	evolveFrom: {
		ja: "チュリネ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [549],

	thirdParty: {
		cardmarket: 829334,
		tcgplayer: 636446,
	},
};

export default card;
