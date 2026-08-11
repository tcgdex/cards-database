import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "Mareep",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [179],
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				ja: "静電気",
			},
			effect: {
				ja: "プレイ中の各Mareepについては、デッキを検索してLightning Energyカードを検索し、Mareepに取り付けることができます。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Lightning", "Lightning"],
			name: {
				ja: "サンダーショック",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
