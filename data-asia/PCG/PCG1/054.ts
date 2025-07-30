import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "Mr. Mime Ex -054/082",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [122],
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "魔法のイベン",
			},
			effect: {
				ja: "Mime Exが攻撃によって損傷を受けた場合、そのダメージが20、40、60、80、100、140、160、160、または180の場合、Mime Ex氏に対する攻撃の損傷を防ぎます。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "壊す",
			},
			effect: {
				ja: "相手の手にカードの数を数えます。  その多くのダメージカウンターを防御ポケモンに置きます。",
			},
		},
	],

	retreat: 1,

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
