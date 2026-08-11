import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "イイネイヌ",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "すぐ 頭に 血が 上ってしまう 荒くれもの。 首の 鎖を 振り回し なんでも 叩き潰す。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "アドレナパワー" },
			effect: {
				ja: "このポケモンに[D]エネルギーがついているなら、このポケモンの最大HPは「＋100」され、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+100」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "グッドパンチ" },
			damage: 70,
			cost: ["Fighting", "Fighting"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863728,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [1014],
};

export default card;
