import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "ツンベアー",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		ja: "吐く 息を 凍らせて 氷の キバや ツメを 作り 戦う。 北の 寒い 土地で 暮らす。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かくごのツメ" },
			damage: "60+",
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが「ポケモンGX・EX」なら、60ダメージ追加。",
			},
		},
		{
			name: { ja: "ブリザードバーン" },
			damage: 150,
			cost: ["Water", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558908,
			},
		},
	],

	evolveFrom: {
		ja: "クマシュン",
	},

	retreat: 3,
	rarity: "Uncommon",
	dexId: [614],
};

export default card;
