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
		fr: "Grillepattes",
		de: "Thermopod",
		es: "Sizzlipede",
		pt: "Sizzlipede",
		it: "Sizzlipede"
	},

	attacks: [{
		name: {
			en: "Hundred Foot Flames",
			fr: "Flammes Mille-Pattes",
			es: "Llamas de Cien Pies",
			it: "Fiamme Centopiedi",
			pt: "Chamas de Cem Pés",
			de: "Hundertfußflammen"
		},

		effect: {
			en: "For each {R} Energy attached to this Pokémon, discard the top card of your opponent's deck.",
			fr: "Pour chaque Énergie {R} attachée à ce Pokémon, défaussez la carte du dessus du deck de votre adversaire.",
			es: "Por cada Energía {R} unida a este Pokémon, descarta la primera carta de la baraja de tu rival.",
			it: "Per ogni Energia {R} assegnata a questo Pokémon, scarta la prima carta del mazzo del tuo avversario.",
			pt: "Para cada Energia {R} ligada a este Pokémon, descarte a carta de cima do baralho do seu oponente.",
			de: "Lege für jede an dieses Pokémon angelegte {R}-Energie die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		},

		cost: ["Fire"]
	}, {
		name: {
			en: "Searing Flame",
			fr: "Flammes Calcinantes",
			es: "Llama Abrasadora",
			it: "Fiamme Ustionanti",
			pt: "Chama Cauterizante",
			de: "Sengende Flammen"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			pt: "O Pokémon Ativo do seu oponente agora está Queimado.",
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
	},

	regulationMark: "D"
}

export default card
