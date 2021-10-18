import { Card } from '../../../interfaces'
import Set from '../XY trainer Kit (Sylveon)'

const card: Card = {
	set: Set,

	name: {
		en: "Sylveon",
		fr: "Nymphali",
		es: "Sylveon",
		it: "Sylveon",
		pt: "Sylveon",
		de: "Feelinara"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",

	description: {
		en: "It sends a soothing aura from its ribbonlike feelers to calm fights."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Disarming Voice"
		},

		damage: 20,

		effect: {
			en: "Your opponent’s Active Pokémon is now Confused."
		}
	}, {
		name: {
			en: "Fairy Wind"
		},

		damage: 60
	}],

	hp: 90,
	types: ["Fairy"],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	retreat: 1,

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	resistances: [{
		type: "Darkness",
		value: "-20"
	}]
}

export default card