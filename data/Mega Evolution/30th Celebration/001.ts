import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
		de: "Owei",
		es: "Exeggcute",
		it: "Exeggcute",
		pt: "Exeggcute",
		'es-mx': "Exeggcute"
	},

	illustrator: "Nelnal",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Hypnosis",
			fr: "Hypnose",
			de: "Hypnose",
			es: "Hipnosis",
			it: "Ipnosi",
			pt: "Hipnose",
			'es-mx': "Hipnosis"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Dormido."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card