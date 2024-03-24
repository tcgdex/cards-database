import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Unfezant",
		fr: "Déflaisan",
		es: "Unfezant",
		it: "Unfezant",
		pt: "Unfezant"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Opposing Winds",
			fr: "Vents Contraires",
			es: "Vientos Adversos",
			it: "Venti Avversi",
			pt: "Ventos Opostos"
		},

		effect: {
			en: "You may put 2 Energy attached to your opponent's Active Pokémon into their hand.",
			fr: "Vous pouvez ajouter à la main de votre adversaire 2 Énergies attachées à son Pokémon Actif.",
			es: "Puedes poner 2 Energías unidas al Pokémon Activo de tu rival en su mano.",
			it: "Puoi prendere due Energie assegnate al Pokémon attivo del tuo avversario e aggiungerle alle carte che ha in mano.",
			pt: "Você pode colocar 2 Energias ligadas ao Pokémon Ativo do seu oponente na mão dele."
		},

		damage: 70
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Boundless Power",
			fr: "Puissance Illimitée",
			es: "Poder Ilimitado",
			it: "Potere Incontenibile",
			pt: "Poder Ilimitado"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar."
		},

		damage: 180
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card