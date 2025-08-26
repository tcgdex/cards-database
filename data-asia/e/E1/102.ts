import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "Meganium -102/128",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [154],
	hp: 100,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "なだめるような香り",
			},
			effect: {
				ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、Pokmonのそれぞれから1つのダメージカウンターを1つのダメージカウンターを取り外します。メガニウムが特別な状態の影響を受けている場合、この電力は使用できません。",
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
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
