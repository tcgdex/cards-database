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
		en: "Tentacruel",
		fr: "Tentacruel",
		es: "Tentacruel",
		it: "Tentacruel",
		pt: "Tentacruel",
		de: "Tentoxa"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",
	illustrator: "Mina Nakai",

	attacks: [{
		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
			es: "Chapoteo Ondulante",
			it: "Schizzi d’Onda",
			pt: "Wave Splash",
			de: "Wellenplatscher"
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			en: "Poisonous Prison",
			fr: "Prison Empoisonnée",
			es: "Prisión Venenosa",
			it: "Prigione Velenosa",
			pt: "Poisonous Prison",
			de: "Giftiges Gefängnis"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Poisoned. During your opponent’s next turn, that Pokémon can’t retreat.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
			pt: "Your opponent’s Active Pokémon is now Poisoned. During your opponent’s next turn, that Pokémon can’t retreat.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Während des nächsten Zuges deines Gegners kann sich jenes Pokémon nicht zurückziehen."
		},

		damage: 100,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,

	evolveFrom: {
		en: "Tentacool",
		fr: "Tentacool",
		es: "Tentacool",
		it: "Tentacool",
		pt: "Tentacool",
		de: "Tentacha"
	},

	description: {
		en: "It communicates with others of its kind by lighting up the red orbs on its head. When the orbs are blinking, it’s a warning sign."
	},

	dexId: [73]
}

export default card