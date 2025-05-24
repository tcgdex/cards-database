import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Eevee ex",
		pt: "Eevee ex",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Rainbow DNA",
			pt: "DNA Arco-Íris",
		},

		effect: {
			en: "This Pokémon can evolve into any Pokémon EX that evolves from Eevee if you play it from your hand onto this Pokémon. (This Pokémon can't evolve during your first turn or the turn you play it.)",
			pt: "Este Pokémon poderá evoluir para qualquer Pokémon ex que evolua de Eevee se você jogar aquele Pokémon ex da sua mão sobre este Pokémon. (Este Pokémon não poderá evoluir durante o seu primeiro turno ou durante o turno em que for colocado em jogo.)",
		}
	}],

	attacks: [
		{
			cost: ["Fire", "Water", "Lightning"],

			name: {
				en: "Coruscating Quartz",
				pt: "Quartzo Cintilante",
			},
			
			damage: 200
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "H"
}

export default card