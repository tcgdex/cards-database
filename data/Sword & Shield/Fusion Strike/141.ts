import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [472],
	set: Set,

	name: {
		en: "Gliscor",
		fr: "Scorvol",
		es: "Gliscor",
		it: "Gliscor",
		pt: "Gliscor",
		de: "Skorgro"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	evolveFrom: {
		en: "Gligar",
		fr: "Scorplane",
		es: "Gligar",
		it: "Gligar",
		pt: "Gligar",
		de: "Skorgla"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "SATOSHI NAKAI",

	description: {
		en: "Its flight is soundless. It uses its lengthy tail to carry off its prey... Then its elongated fangs do the rest."
	},

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Cut Down",
			fr: "Retranchement",
			de: "Umsägen",
			es: "Recorte",
			pt: "Corte",
			it: "Falciare"
		},

		damage: 30,

		effect: {
			en: "Discard an Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
			pt: "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
			it: "Scarta un'Energia dal Pokémon attivo del tuo avversario."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Venomous Hit",
			fr: "Frappe Venimeuse",
			de: "Giftiger Schlag",
			es: "Golpe Venenoso",
			pt: "Golpe Venenoso",
			it: "Colpo Velenoso"
		},

		damage: 100,

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card