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
		en: "Carvanha",
		fr: "Carvanha",
		es: "Carvanha",
		it: "Carvanha",
		pt: "Carvanha",
		de: "Kanivanha"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",
	illustrator: "Kyoko Umemoto",

	attacks: [{
		name: {
			en: "Ram",
			fr: "Collision",
			es: "Apisonar",
			it: "Carica",
			pt: "Ram",
			de: "Ramme"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Razor Fin",
			fr: "Aileron-Rasoir",
			es: "Aleta Afilada",
			it: "Pinnalama",
			pt: "Razor Fin",
			de: "Rasierflosse"
		},

		damage: 20,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,

	description: {
		en: "With its sturdy jaws and fangs, it can easily chomp wooden boats to splinters. It fights with Basculin over food."
	},

	dexId: [318],
	regulationMark: "E"
}

export default card