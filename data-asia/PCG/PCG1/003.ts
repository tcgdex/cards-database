import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "蝶",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [12],
	hp: 100,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "ほこりをなだめる",
			},
			effect: {
				ja: "バタフリーがアクティブなポカモンである限り、ターン間の各ポカモンから1つのダメージカウンターを1つのダメージカウンターを削除します。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "旋風",
			},
			effect: {
				ja: "対戦相手は、ディフェンディングポケモンを1匹のベンチポケモンで切り替えます。",
			},
			damage: 30,
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				ja: "突風",
			},
			damage: 50,
		},
	],


	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
