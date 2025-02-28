import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Eevee",
		pt: "Eevee",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Boosted Evolution",
			pt: "Impulso da Evolução",
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, it can evolve during your first turn or the turn you play it.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, ele poderá evoluir durante o seu primeiro turno ou durante o turno em que for colocado em jogo."
		}
	}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],

			name: {
				en: "Reckless Charge",
				pt: "Carga Indomável",
			},

			effect: {
				en: "This Pokémon also does 10 damage to itself.",
				pt: "Este Pokémon também causará 10 pontos de dano a si mesmo."
			},
		}
	],

	retreat: 1,
	regulationMark: "H"
}

export default card