import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Scolocendre",
		en: "Centiskorch",
		es: "Centiskorch",
		it: "Centiskorch",
		pt: "Centiskorch",
		de: "Infernopod"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		fr: "Grillepattes",
		en: "Sizzlipede"
	},

	attacks: [{
		name: {
			fr: "Flammes Mille-Pattes",
			en: "Hundred Foot Flames",
			es: "Llamas de Cien Pies",
			it: "Fiamme Centopiedi",
			pt: "Chamas de Cem Pés",
			de: "Hundertfußflammen"
		},

		effect: {
			fr: "Pour chaque Énergie Fire attachée à ce Pokémon, défaussez la carte du dessus du deck de votre adversaire.",
			en: "For each Fire Energy attached to this Pokémon, discard the top card of your opponent’s deck.",
			es: "Por cada Energía Fire unida a este Pokémon, descarta la primera carta de la baraja de tu rival.",
			it: "Per ogni Energia Fire assegnata a questo Pokémon, scarta la prima carta del mazzo del tuo avversario.",
			pt: "Para cada Energia Fire ligada a este Pokémon, descarte a carta de cima do baralho do seu oponente.",
			de: "Lege für jede an dieses Pokémon angelegte Fire-Energie die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
		},

		cost: ["Fire"]
	}, {
		name: {
			fr: "Flammes Calcinantes",
			en: "Searing Flame",
			es: "Llama Abrasadora",
			it: "Fiamme Ustionanti",
			pt: "Chama Cauterizante",
			de: "Sengende Flammen"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			en: "Your opponent’s Active Pokémon is now Burned.",
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
	regulationMark: "D"
}

export default card