import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Frosmoth",
		fr: "Beldeneige",
		es: "Frosmoth",
		it: "Frosmoth",
		pt: "Frosmoth"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			en: "Freezing Chill",
			fr: "Frisson Glaçant",
			es: "Frío Helador",
			it: "Freddo Glaciale",
			pt: "Frio de Arrepiar"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't attack.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá atacar."
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card