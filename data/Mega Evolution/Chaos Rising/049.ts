import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		en: "It emits ultrasonic waves from its mouth to check its surroundings. Even in tight caves, Zubat flies around with skill.",
	},


	name: {
		en: "Zubat",
		fr: "Nosferapti",
		es: "Zubat",
		'es-mx': "Zubat",
		de: "Zubat",
		it: "Zubat",
		pt: "Zubat"
	},

	illustrator: "Mékayu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [41],
	hp: 40,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Supersonic",
			fr: "Ultrason",
			es: "Supersónico",
			'es-mx': "Supersónico",
			de: "Superschall",
			it: "Supersuono",
			pt: "Supersônico"
		},

		cost: ["Darkness"],

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886441,
				tcgplayer: 693565
			}
		},
	],
}

export default card
