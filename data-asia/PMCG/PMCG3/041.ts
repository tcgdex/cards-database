import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "アエロダクチル",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [142],
	hp: 60,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "先史時代の力",
			},
			effect: {
				ja: "これ以上進化カードを再生できません。このパワーは、アエロダクチルが眠っている、混乱し、麻痺している間に機能しなくなります。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "翼攻撃",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
