import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "ダダリン",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "でかい 錨を ブンブン 振り回し ホエルオーさえ 一撃で ＫＯ。 緑の モズクが 本体だ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はがねつかい" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の[鋼]ポケモンが使うワザの、相手のバトルポケモンへのダメージは「+10」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "アンカーショット" },
			damage: 70,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561425,
			},
		},
	],

	retreat: 2,
	rarity: "Rare",
	dexId: [781],
};

export default card;
