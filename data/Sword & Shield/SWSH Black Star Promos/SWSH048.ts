import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Centiskorch",
		fr: "Scolocendre",
		es: "Centiskorch",
		it: "Centiskorch",
		pt: "Centiskorch",
		de: "Infernopod"
	},

	illustrator: "nagimiso",
	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		en: "Sizzlipede",
		fr: "Grillepattes"
	},

	attacks: [{
		name: {
			en: "Hundred Foot Flames",
			fr: "Flammes Mille-Pattes",
			es: "Llamas de Cien Pies",
			it: "Fiamme Centopiedi",
			pt: "Hundred Foot Flames",
			de: "Hundertfußflammen"
		},

		effect: {
			en: "For each Fire Energy attached to this Pokémon, discard the top card of your opponent’s deck.",
			fr: "Pour chaque Énergie Fire attachée à ce Pokémon, défaussez la carte du dessus du deck de votre adversaire.",
			es: "Por cada Energía Fire unida a este Pokémon, descarta la primera carta de la baraja de tu rival.",
			it: "Per ogni Energia Fire assegnata a questo Pokémon, scarta la prima carta del mazzo del tuo avversario.",
			pt: "For each Fire Energy attached to this Pokémon, discard the top card of your opponent’s deck.",
			de: "Lege für jede an dieses Pokémon angelegte Fire-Energie die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		},

		cost: ["Fire"]
	}, {
		name: {
			en: "Searing Flame",
			fr: "Flammes Calcinantes",
			es: "Llama Abrasadora",
			it: "Fiamme Ustionanti",
			pt: "Searing Flame",
			de: "Sengende Flammen"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "Your opponent’s Active Pokémon is now Burned.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
		},

		damage: 110,
		cost: ["Fire", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,

	description: {
		en: "When it heats up, its body temperature reaches about 1,500 degrees Fahrenheit. It lashes its body like a whip and launches itself at enemies."
	},

	stage: "Stage1",
	dexId: [851],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	}
}

export default card