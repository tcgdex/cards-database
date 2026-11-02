import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "メガオーダイルex",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 370,
	types: ["Water"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "キラークランチ" },
			damage: "200+",
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンにダメカンがのっているなら、200ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864065,
			},
		},
	],

	evolveFrom: {
		ja: "アリゲイツ",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "None",
	dexId: [160],

	suffix: "EX",
};

export default card;
