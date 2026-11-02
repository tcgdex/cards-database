import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "レジスチル",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		ja: "どんな 金属よりも 硬いと 言われる 体。 調査の 結果 体の 中は 空洞だった。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かたいからだ" },
			effect: {
				ja: "このポケモンが受けるワザのダメージは「-20」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "シルバーフィスト" },
			damage: "60+",
			cost: ["Metal", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが特性を持っているなら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559017,
			},
		},
	],

	retreat: 3,
	rarity: "Uncommon",
	dexId: [379],
};

export default card;
