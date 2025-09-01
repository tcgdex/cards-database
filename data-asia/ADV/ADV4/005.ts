import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "vileplume ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [45],
	hp: 140,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "ほこりをブロックします",
			},
			effect: {
				ja: "Vileplume Exがアクティブなポカモンである限り、相手は手からトレーナーカード（サポーターカードを除く）をプレイできません。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				ja: "特別なフォーミュラ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御するポケモンは今眠っていて中毒になっています。尾の場合、防御ポケモンは混乱しています。",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
