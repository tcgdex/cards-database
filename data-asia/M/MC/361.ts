import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "テツノカシラex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "コバルトコマンド" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の「未来」のポケモン（「テツノカシラex」をのぞく）が使うワザの、相手のバトルポケモンへのダメージは「+20」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ツインショーテル" },
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン2匹に、それぞれ50ダメージ。このワザのダメージは、弱点・抵抗力と、ダメージを受けるポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863663,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [1023],

	suffix: "EX",
};

export default card;
