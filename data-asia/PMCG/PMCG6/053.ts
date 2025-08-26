import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "サブリナのアラカザム",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [65],
	hp: 80,
	types: ["Psychic"],
	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "psylink",
			},
			effect: {
				ja: "SabrinaのAlakazamには、PlayのPsychic Pokmonが持っているすべての攻撃のコピーが常にあります（エネルギーコストなど、エネルギーカードの廃棄などの攻撃を使用するために必要なものを含む）。サブリナのアラカザムが眠っている、混乱し、麻痺している場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "メガ・バーン",
			},
			effect: {
				ja: "次のターン中にこの攻撃を使用することはできません。",
			},
			damage: 60,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
