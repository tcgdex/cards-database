import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		// doduo
		ja: "ドードー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [84],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "怒り攻撃",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},

		},
	],


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575575
			}
		},
		{
			type: "normal",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577002
			}
		}
	],
};

export default card
