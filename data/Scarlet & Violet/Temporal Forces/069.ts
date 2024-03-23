import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Bronzong",
		fr: "Archéodong",
		es: "Bronzong",
		it: "Bronzong",
		pt: "Bronzong"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Evolution Jammer",
			fr: "Bloqueur d'Évolution",
			es: "Interferente de Evolución",
			it: "Evolviblocco",
			pt: "Atolador de Evolução"
		},

		effect: {
			en: "During your opponent's next turn, they can't play any Pokémon from their hand to evolve their Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, il ne peut pas jouer de Pokémon de sa main pour faire évoluer ses Pokémon.",
			es: "Durante el próximo turno de tu rival, este no puede jugar ningún Pokémon de su mano para hacer evolucionar a sus Pokémon.",
			it: "Durante il suo prossimo turno, il tuo avversario non può giocare i Pokémon che ha in mano per far evolvere i suoi Pokémon.",
			pt: "Durante o próximo turno do seu oponente, ele não poderá jogar nenhum Pokémon da mão dele para evoluir os Pokémon dele."
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Super Psy Bolt",
			fr: "Super Psy",
			es: "Superrayo Psi",
			it: "Superpsico",
			pt: "Super-raio Psíquico"
		},

		damage: 100
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card