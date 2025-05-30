import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Drowzee",
		fr: "Soporifik de la Team Rocket",
		de: "Team Rockets Traumato",
		it: "Drowzee del Team Rocket",
		es: "Drowzee del Team Rocket",
		pt: "Drowzee da Equipe Rocket",
		'es-mx': "Drowzee del Equipo Rocket"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Hypnotic Ray",
			fr: "Onde Hypnotique",
			de: "Hypnotischer Strahl",
			it: "Ipnoraggio",
			es: "Rayo Hipnótico",
			pt: "Raio Hipnótico",
			'es-mx': "Rayo Hipnótico"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Dormido."
		},

		damage: 10
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card