import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ミブリム",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "頭の 突起で 生物の 気持ちを 感じとる。 穏やかな ものにしか 心を 開かない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ともだちをさがす" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "サイコショット" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 463119,
				tcgplayer: 597261,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [856],
};

export default card;
