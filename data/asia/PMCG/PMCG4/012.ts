import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒトカゲ",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [4],
	hp: 40,
	types: ["Fire"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'ja-jp': "火を集めます",
			},
			effect: {
				'ja-jp': "順番<em>（攻撃の前）</em> </em>、1つのFire Energyカードを他のPokmon 1つに取り付けて、Charmanderに添付することができます。 Charmanderが眠ったり、混乱したり、麻痺している場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Fire"],
			name: {
				'ja-jp': "火の尾",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575713
			},
		},
	],
};

export default card
