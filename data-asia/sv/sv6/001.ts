import { Card } from '../../../interfaces'
import set from '../sv6'
const card: Card = {
	name: {

		ja: "ヒマナッツ"
	},

	category: 'Pokemon',
	rarity: 'Common',
	set: set,
	illustrator: "Naoyo Kimura",
	dexId: [191],
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "とても ひ弱。 襲われても 葉っぱを 必死に 振りまわして 追い払うのが やっとだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "タネマシンガン"
		},

		damage: "10×",

		effect: {
			ja: "コインを4回投げ、オモテの数×10ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card
