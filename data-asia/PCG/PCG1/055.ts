import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "nidoqueen",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [31],
	hp: 120,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "家族の債券",
			},
			effect: {
				ja: "Nidoqueenがプレイしている限り、Nidoran F、Nidorina、Nidoran M、Nidorino、Nidokingのリトリートコストは0です。",
			},
		}],

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "有毒",
			},
			effect: {
				ja: "防御ポケモンは現在中毒になっています。ターンの間に防御ポケモンに1つではなく2つのダメージカウンターを置きます。",
			},
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				ja: "パワーラリアット",
			},
			effect: {
				ja: "40のダメージに加えて、プレイ中の進化したポケモンごとにさらに10ダメージを与えます。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
