import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "エルレイドV",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ライジングソード" },
			damage: "20+",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "自分がすでにとったサイドの枚数×50ダメージ追加。",
			},
		},
		{
			name: { ja: "バスタースイング" },
			damage: 130,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 657068,
				tcgplayer: 570752,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Character Super Rare",
	dexId: [475],
};

export default card;
