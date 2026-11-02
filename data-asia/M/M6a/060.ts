import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "アンノーン",
	},

	illustrator: "mingo",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "体自体は 薄っぺらく いつも 壁に 張りついている。 形に なにか 意味があるらしい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ミステリーシグナル" },
			damage: 40,
			cost: ["Psychic", "Psychic"],
			effect: {
				ja: "このワザのダメージで、相手のポケモンがきぜつしたなら、サイドを1枚多くとる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908238,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [201],
};

export default card;
