import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		// Ninetales
		ja: "キュウコン",
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [38],
	hp: 80,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "ルアー",
			},
			effect: {
				ja: "対戦相手がベンチポケモンを持っている場合は、それらの1つを選択し、防御ポケモンで切り替えます。",
			},

		},
		{
			cost: ["Fire", "Fire", "Fire", "Fire"],
			name: {
				ja: "火の爆発",
			},
			effect: {
				ja: "Ninetalesに取り付けられた1つの消防エネルギーカードを廃棄するか、この攻撃は何もしません。",
			},
			damage: 80,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 575612
			},
		},
		{
			type: "holo",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577039
			},
		}
	],
};

export default card
