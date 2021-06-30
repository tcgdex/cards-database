import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Regigigas",
		fr: "Regigigas",
		es: "Regigigas",
		it: "Regigigas",
		pt: "Regigigas",
		de: "Regigigas"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			it: "Martello",
			pt: "Martelada",
			de: "Einhämmern"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Regiblast",
			fr: "Regi-Explosion",
			es: "Regiexplosión",
			it: "Bomba Regi",
			pt: "Regexplosão",
			de: "Registoß"
		},

		damage: 180,

		effect: {
			en: "Discard the top card of your opponent’s deck.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			es: "Descarta la primera carta de la baraja de tu rival.",
			it: "Scarta la prima carta del mazzo del tuo avversario.",
			pt: "Descarte a primeira carta do baralho do seu oponente.",
			de: "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		},

		cost: ["Fighting", "Metal", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4
}

export default card