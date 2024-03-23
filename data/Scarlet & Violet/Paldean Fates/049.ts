import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Donphan",
		fr: "Donphan",
		es: "Donphan",
		it: "Donphan",
		pt: "Donphan"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Cragalanche",
			fr: "Lapidalanche",
			es: "Rocalud",
			it: "Valanghiaia",
			pt: "Rochavalanche"
		},

		effect: {
			en: "Discard the top 2 cards of your opponent's deck.",
			fr: "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
			es: "Descarta las 2 primeras cartas de la baraja de tu rival.",
			it: "Scarta le prime due carte del mazzo del tuo avversario.",
			pt: "Descarte as 2 cartas de cima do baralho do seu oponente."
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Powerful Spin",
			fr: "Pirouette Puissante",
			es: "Supergiro",
			it: "Supergiro",
			pt: "Pirueta Potente"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar."
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card