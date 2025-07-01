import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Skarmory",
		fr: "Airmure",
		de: "Panzaeron",
		it: "Skarmory",
		es: "Skarmory",
		pt: "Skarmory",
		'es-mx': "Skarmory"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Roost",
			fr: "Atterrissage",
			de: "Ruheort",
			it: "Trespolo",
			es: "Respiro",
			pt: "Poleiro",
			'es-mx': "Respiro"
		},

		effect: {
			en: "Heal 50 damage from this Pokémon. During your next turn, this Pokémon can't retreat.",
			fr: "Soignez 50 dégâts de ce Pokémon. Pendant votre prochain tour, ce Pokémon ne peut pas battre en retraite.",
			de: "Heile 50 Schadenspunkte bei diesem Pokémon. Während deines nächsten Zuges kann sich dieses Pokémon nicht zurückziehen.",
			it: "Cura questo Pokémon da 50 danni. Durante il tuo prossimo turno, questo Pokémon non può ritirarsi.",
			es: "Cura 50 puntos de daño a este Pokémon. Durante tu próximo turno, este Pokémon no puede retirarse.",
			pt: "Cure 50 pontos de dano deste Pokémon. Durante o seu próximo turno, este Pokémon não poderá recuar.",
			'es-mx': "Cura 50 puntos de daño a este Pokémon. Durante tu próximo turno, este Pokémon no puede retirarse."
		}
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			en: "Metal Claw",
			fr: "Griffe Acier",
			de: "Metallklaue",
			it: "Ferrartigli",
			es: "Garra Metal",
			pt: "Garra de Metal",
			'es-mx': "Garra de Metal"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		holo: false
	},

	variants_detailed: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
