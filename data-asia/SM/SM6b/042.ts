import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "クチート",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "ツノが 変形して できた おおあごが 頭に ついている。 鉄骨を かみきってしまう。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "さいくつ" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札にあるグッズを1枚、相手に見せてから、手札に加える。そして山札を切る。そのカードが「ポケモンのどうぐ」の場合、のぞむなら、手札に加える前に、自分の場の「ポケモンのどうぐ」がついていないポケモンに、そのカードをつける。",
			},
		},
		{
			name: { ja: "かみちぎる" },
			damage: "20+",
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが「ポケモンGX・EX」なら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559192,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [303],
};

export default card;
