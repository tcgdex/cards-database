import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ひかるアルセウス'
	},

	illustrator: 'Kouki Saitou',
	rarity: "Rare Shining",
	category: 'Pokemon',
	dexId: [493],
	hp: 130,
	types: ['Colorless'],

	description: {
		ja: 'タマゴから 姿を 現して 世界の すべてを 生み出したと シンオウ神話に 語られている。'
	},

	stage: 'Basic',

	abilities: [
		{
			type: 'Ability',
			name: { ja: 'しんわのまもり' },
			effect: {
				ja: 'このポケモンがバトル場にいるかぎり、自分のベンチポケモン全員は、相手のワザのダメージを受けない。'
			}
		}
	],

	attacks: [
		{
			name: { ja: 'アルティメットアロー' },
			effect: {
				ja: '相手のポケモン全員に、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］'
			},
			cost: ['Colorless', 'Colorless', 'Colorless', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Fighting', value: "×2" }],
	resistances: [],

	retreat: 2,

	regulationMark: "A",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 560217,
				tcgplayer: 573973,
				cardtrader: 142460
			}
		}
	]
}

export default card
