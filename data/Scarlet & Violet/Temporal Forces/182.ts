import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Minccino",
		fr: "Chinchidou",
		es: "Minccino",
		it: "Minccino",
		pt: "Minccino"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Beat",
			fr: "Bataille",
			es: "Toque",
			it: "Battuta",
			pt: "Pulso"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Cleaning Up",
			fr: "Ménage",
			es: "Purgar",
			it: "Pulitura",
			pt: "Limpar"
		},

		effect: {
			en: "Discard up to 2 Pokémon Tools from your opponent's Pokémon.",
			fr: "Défaussez jusqu'à 2 Outils Pokémon des Pokémon de votre adversaire.",
			es: "Descarta hasta 2 Herramientas Pokémon de los Pokémon de tu rival.",
			it: "Scarta fino a due carte Oggetto Pokémon dai Pokémon del tuo avversario.",
			pt: "Descarte até 2 Ferramentas Pokémon dos Pokémon do seu oponente."
		}
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card