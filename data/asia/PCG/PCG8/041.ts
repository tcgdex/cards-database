import { Card } from "models/database/card"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジラチEx",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [385],
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "星光",
			},
			effect: {
				'ja-jp': "対戦相手がPokã©Mon-ExまたはStage 2 EvolvedPokã©Mon in Playを持っている限り、Jirachi Exは{{e}}シールドビームまたはスーパーPSYボルトを使用するエネルギーを少なくします。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'ja-jp': "シールドビーム",
			},
			effect: {
				'ja-jp': "対戦相手の次のターン中、対戦相手はポケモンにポケパワーを使用できません。",
			},
			damage: 30,
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: {
				'ja-jp': "スーパーPSYボルト",
			},
			damage: 50,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
