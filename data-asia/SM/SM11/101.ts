import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "メガヤミラミ&バンギラスGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "グリードクラッシュ" },
			damage: 210,
			cost: ["Darkness", "Darkness", "Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "このワザのダメージで、相手の「ポケモンGX・EX」がきぜつしたなら、サイドを1枚多くとる。",
			},
		},
		{
			name: { ja: "ギガフォールGX" },
			damage: 250,
			cost: ["Darkness", "Darkness", "Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "追加でエネルギーが5個ついているなら、相手の山札を上から15枚トラッシュする。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557063,
			},
		},
	],

	retreat: 4,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [302, 248],

	suffix: "TAG TEAM-GX",
};

export default card;
