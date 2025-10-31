import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "ミーガニウム",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [154],
	hp: 100,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "なだめるような香り",
			},
			effect: {
				ja: "ターン中に（攻撃の前に）、コインをひっくり返すことができます。頭の場合は、Pokmonのそれぞれから1つのダメージカウンターを1つのダメージカウンターを取り外します。メガニウムが特別な状態の影響を受けている場合、この電力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Grass", "Colorless", "Colorless"],
			name: {
				ja: "毒パウダー",
			},
			effect: {
				ja: "防御ポケモンは現在中毒になっています。",
			},
			damage: 40,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
