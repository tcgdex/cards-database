import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ゼクロム'
	},

	illustrator: 'nagimiso',
	rarity: 'Rare',
	category: 'Pokemon',
	dexId: [644],
	hp: 130,
	types: ['Lightning'],

	description: {
		ja: '稲妻で 世界を 焼きつくせる 伝説の ポケモン。 理想の 世界を つくる 人を 補佐する。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'げきりん' },
			effect: {
				ja: "このポケモンにのっているダメカンの数×10ダメージ追加。"
			},
			damage: '20+',
			cost: ['Colorless', 'Colorless']
		},
		{
			name: { ja: 'いかずちのやいば' },
			effect: {
				ja: 'このポケモンについているエネルギーを、2個トラッシュする。'
			},
			damage: 130,
			cost: ['Lightning', 'Lightning', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Fighting', value: "×2" }],
	resistances: [{ type: 'Metal', value: '-20' }],

	retreat: 3,

	regulationMark: "A",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 560194,
				tcgplayer: 573950,
				cardtrader: 142437
			}
		}
	]
}

export default card
