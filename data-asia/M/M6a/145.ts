import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ハッサムex",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: { ja: "きけんしょく" },
			effect: {
				ja: "このポケモンの残りHPが｢60｣以下なら、このポケモンが使うワザの、バトルポケモンに与えるダメージは、｢+40｣される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "はがねのつばさ" },
			damage: 40,
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "次の相手の番、自分が受けるワザによるダメージは、｢-20｣される。",
			},
		},
		{
			name: { ja: "ふりおろす" },
			damage: "50+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手が｢進化ポケモン｣なら、30ダメージを追加する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908323,
			},
		},
	],

	retreat: 1,
	rarity: "Classic Collection",
	dexId: [212],

	suffix: "EX",
};

export default card;
