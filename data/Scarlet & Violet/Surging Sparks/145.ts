import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Slakoth",
		fr: "Parecool",
		es: "Slakoth",
		it: "Slakoth",
		pt: "Slakoth",
		de: "Bummelz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Take It Easy",
			fr: "Relax",
			es: "Tranqui",
			it: "Prenditela Comoda",
			pt: "De Boaça",
			de: "Eile mit Weile"
		},

		effect: {
			en: "Heal 60 damage from this Pokémon. During your next turn, this Pokémon can't retreat.",
			fr: "Soignez 60 dégâts de ce Pokémon. Pendant votre prochain tour, ce Pokémon ne peut pas battre en retraite.",
			es: "Cura 60 puntos de daño a este Pokémon. Durante tu próximo turno, este Pokémon no puede retirarse.",
			it: "Cura questo Pokémon da 60 danni. Durante il tuo prossimo turno, questo Pokémon non può ritirarsi.",
			pt: "Cure 60 pontos de dano deste Pokémon. Durante o seu próximo turno, este Pokémon não poderá recuar.",
			de: "Heile 60 Schadenspunkte bei diesem Pokémon. Während deines nächsten Zuges kann sich dieses Pokémon nicht zurückziehen."
		}
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card