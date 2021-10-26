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
		en: "Slakoth",
		fr: "Parecool",
		es: "Slakoth",
		it: "Slakoth",
		pt: "Slakoth",
		de: "Bummelz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	illustrator: "OKACHEKE",

	attacks: [{
		name: {
			en: "Smack 'n' Slack",
			fr: "Raclée Dodo",
			es: "Manotazo y Relajo",
			it: "Schiaffopisolo",
			pt: "Smack 'n' Slack",
			de: "Raufen und Ratzen"
		},

		effect: {
			en: "This Pokémon is now Asleep.",
			fr: "Ce Pokémon est maintenant Endormi.",
			es: "Este Pokémon pasa a estar Dormido.",
			it: "Questo Pokémon viene addormentato.",
			pt: "This Pokémon is now Asleep.",
			de: "Dieses Pokémon schläft jetzt."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	dexId: [287],

	description: {
		en: "If it eats just three leaves in a day, it is satisfied. Other than that, it sleeps for 20 hours a day."
	},

	regulationMark: "E"
}

export default card
