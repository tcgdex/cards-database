import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ブレインのポニータ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [77],
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "ハインドキック",
			},
			effect: {
				ja: "ベンチ付きポケモンがある場合は、コインをひっくり返します。頭の場合は、1匹のベンチポケモンでブレインのポニータを切り替えます。",
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
