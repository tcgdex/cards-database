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
		en: "Pinsir",
		fr: "Scarabrute",
		es: "Pinsir",
		it: "Pinsir",
		pt: "Pinsir",
		de: "Pinsir"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",
	illustrator: "Shin Nagasawa",

	abilities: [{
		type: "Ability",

		name: {
			en: "Vise Coach",
			fr: "Étau Entraîné",
			es: "Entrenador Pinza",
			it: "Stretta Magistrale",
			pt: "Vise Coach",
			de: "Klammertrainer"
		},

		effect: {
			en: "Damage from your Single Strike Pokémon’s attacks isn’t affected by your opponent’s Active Pokémon’s Resistance.",
			fr: "Les dégâts des attaques de vos Pokémon Poing Final ne sont pas affectés par la Résistance du Pokémon Actif de votre adversaire.",
			es: "El daño de los ataques de tus Pokémon Golpe Brusco no se ve afectado por la Resistencia del Pokémon Activo de tu rival.",
			it: "I danni degli attacchi dei tuoi Pokémon Colpo Singolo non sono influenzati dalla resistenza del Pokémon attivo del tuo avversario.",
			pt: "Damage from your Single Strike Pokémon’s attacks isn’t affected by your opponent’s Active Pokémon’s Resistance.",
			de: "Schaden durch Attacken deiner Fokussierter-Angriff-Pokémon wird durch Resistenz auf dem Aktiven Pokémon deines Gegners nicht verändert."
		}
	}],

	attacks: [{
		name: {
			en: "Seismic Toss",
			fr: "Frappe Atlas",
			es: "Sísmico",
			it: "Movimento Sismico",
			pt: "Seismic Toss",
			de: "Geowurf"
		},

		damage: 110,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,

	description: {
		en: "Although it’s tough, it can’t handle cold well. When night falls, it buries itself in leafage and sleeps."
	},

	dexId: [127]
}

export default card