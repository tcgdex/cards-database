import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Flabébé",
		fr: "Flabébé",
		es: "Flabébé",
		it: "Flabébé",
		pt: "Flabébé",
		de: "Flabébé"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "OKACHEKE",

	attacks: [{
		name: {
			en: "Hypnotic Gaze",
			fr: "Regard Hypnotique",
			es: "Mirada Hipnótica",
			it: "Ipnosguardo",
			pt: "Hypnotic Gaze",
			de: "Hypnotischer Blick"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "Your opponent’s Active Pokémon is now Asleep.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,

	description: {
		en: "Flabébé wears a crown made from pollen it’s collected from its flower. The crown has hidden healing properties."
	},

	dexId: [669]
}

export default card