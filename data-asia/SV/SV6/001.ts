import { Card } from '../../../interfaces'
import set from '../SV6'
const card: Card = {
	name: {
		ja: "ヒマナッツ",
		'zh-tw': "向日種子"
	},

	category: 'Pokemon',
	rarity: 'Common',
	set: set,
	illustrator: "Naoyo Kimura",
	dexId: [191],
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "とても ひ弱。 襲われても 葉っぱを 必死に 振りまわして 追い払うのが やっとだ。",
		'zh-tw': "十分弱小。即使遭到攻擊， 也只能勉勉強強地靠著 拼命揮舞葉子來趕走敵人。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "タネマシンガン",
			'zh-tw': "種子機關槍"
		},

		damage: "10×",

		effect: {
			ja: "コインを4回投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲4次硬幣，造成正面出現的次數×10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card