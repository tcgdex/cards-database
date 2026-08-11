import { Card } from "models/database/card"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナツメのフーディン",
	},
	illustrator: "Ken Sugimori",

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
				'ja-jp': "psylink",
			},
			effect: {
				'ja-jp': "SabrinaのAlakazamには、PlayのPsychic Pokmonが持っているすべての攻撃のコピーが常にあります（エネルギーコストなど、エネルギーカードの廃棄などの攻撃を使用するために必要なものを含む）。サブリナのアラカザムが眠っている、混乱し、麻痺している場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "メガ・バーン",
			},
			effect: {
				'ja-jp': "次のターン中にこの攻撃を使用することはできません。",
			},
			damage: 60,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 575342
			},
		},
	],
};

export default card
