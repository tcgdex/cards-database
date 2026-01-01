import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ドレディア",
	},

	illustrator: "mele",
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "チュリネ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [549],
};

export default card;
