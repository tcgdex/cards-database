import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Popplio",
		fr: "Otaquin",
		de: "Robball",
		it: "Popplio",
		es: "Popplio",
		pt: "Popplio",
		'es-mx': "Popplio"
	},

	illustrator: "Saboteri",
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	dexId: [728],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			en: "Disarming Voice",
			fr: "Voix Enjôleuse",
			de: "Säuselstimme",
			it: "Incantavoce",
			es: "Voz Cautivadora",
			pt: "Voz Desarmante",
			'es-mx': "Voz Cautivadora"
		},

		damage: 20,

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido."
		}
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		cardmarket: 875194
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
