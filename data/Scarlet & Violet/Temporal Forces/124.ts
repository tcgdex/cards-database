import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Lickitung",
		fr: "Excelangue",
		es: "Lickitung",
		it: "Lickitung",
		pt: "Lickitung"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tongue Pull",
			fr: "Langue Tireuse",
			es: "Tiro de Lengua",
			it: "Tiralingua",
			pt: "Puxão de Língua"
		},

		effect: {
			en: "Your opponent reveals their hand. Put up to 2 Basic Pokémon you find there onto your opponent's Bench.",
			fr: "Votre adversaire montre sa main. Placez jusqu'à 2 Pokémon de base que vous y trouvez sur le Banc de votre adversaire.",
			es: "Tu rival enseña las cartas de su mano. Pon hasta 2 Pokémon Básicos que encuentres entre ellas en la Banca de tu rival.",
			it: "Il tuo avversario mostra le carte che ha in mano. Prendi fino a due Pokémon Base presenti tra esse e mettili nella sua panchina.",
			pt: "Seu oponente revela a mão dele. Coloque até 2 Pokémon Básicos que encontrar lá no Banco do seu oponente."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Strength",
			fr: "Force",
			es: "Fuerza",
			it: "Forza",
			pt: "Força"
		},

		damage: 50
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card