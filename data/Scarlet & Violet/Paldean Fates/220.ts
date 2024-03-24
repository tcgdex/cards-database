import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Noivern ex",
		fr: "Bruyverne-ex",
		es: "Noivern ex",
		it: "Noivern-ex",
		pt: "Noivern ex"
	},

	rarity: "Shiny Ultra Rare",
	category: "Pokemon",
	hp: 260,
	types: ["Dragon"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Covert Flight",
			fr: "Vol à Couvert",
			es: "Vuelo Encubierto",
			it: "Volo Segreto",
			pt: "Voo Discreto"
		},

		effect: {
			en: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base.",
			es: "Durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques de Pokémon Básicos.",
			it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Base.",
			pt: "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques de Pokémon Básicos."
		},

		damage: 70
	}, {
		cost: ["Psychic", "Darkness"],

		name: {
			en: "Dominating Echo",
			fr: "Écho Dominant",
			es: "Eco Dominante",
			it: "Eco Dominante",
			pt: "Eco Dominante"
		},

		effect: {
			en: "During your opponent's next turn, they can't play any Special Energy or Stadium cards from their hand.",
			fr: "Pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Énergie spéciale ou Stade de sa main.",
			es: "Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Energía Especial o de Estadio de su mano.",
			it: "Durante il suo prossimo turno, il tuo avversario non può giocare le carte Energia speciale o Stadio che ha in mano.",
			pt: "Durante o próximo turno do seu oponente, ele não poderá jogar nenhuma carta de Energia Especial ou de Estádio da mão dele."
		},

		damage: 140
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card