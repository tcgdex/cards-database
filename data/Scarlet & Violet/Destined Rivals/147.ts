import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Team Rocket's Rattata",
		fr: "Rattata de la Team Rocket",
		de: "Team Rockets Rattfratz",
		it: "Rattata del Team Rocket",
		es: "Rattata del Team Rocket",
		pt: "Rattata da Equipe Rocket",
		'es-mx': "Rattata del Equipo Rocket"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Dangerous Incisors",
			fr: "Incisives Dangereuses",
			de: "Gefährliche Nagerei",
			it: "Incisivi Pericolosi",
			es: "Incisivos Peligrosos",
			pt: "Incisivos Perigosos",
			'es-mx': "Incisivos Peligrosos"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card