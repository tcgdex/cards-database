import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Single Strike Urshifu V",
		fr: "Shifours Poing Final V",
		es: "Urshifu Golpe Brusco V",
		it: "Urshifu Singolcolpo V",
		pt: "Urshifu Golpe Decisivo V",
		de: "Fokussierter-Angriff-Wulaosu V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],

	attacks: [{
		name: {
			en: "Laser Focus",
			fr: "Affilage",
			es: "Aguzar",
			it: "Concentrazione",
			pt: "Aguçar",
			de: "Konzentration"
		},

		effect: {
			en: "Search your deck for up to 2 Fighting Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie Fighting, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía Fighting y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a due carte Energia Fighting e assegnale a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 2 cartas de Energia Fighting no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 2 Fighting-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		},

		cost: ["Fighting"]
	}, {
		name: {
			en: "Impact Blow",
			fr: "Coup à Impact",
			es: "Golpe Impactante",
			it: "Colpoimpatto",
			pt: "Golpe Impactante",
			de: "Einschlag"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Impact Blow.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup à Impact.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Golpe Impactante.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Colpoimpatto.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá usar Golpe Impactante.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Einschlag nicht einsetzen."
		},

		damage: 180,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card
