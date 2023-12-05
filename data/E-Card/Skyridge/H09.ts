import { Card } from "../../../interfaces"
import Set from "../Skyridge"

const card: Card = {
	set: Set,

	name: {
		de: "Gengar"
	},

	abilities: [{
		type: 'Poke-POWER',
		name: {
			de: "Manipulieren"
		},

		effect: {
			de: "Wenn du Gengar aus deiner Hand spielst, um dein aktives Pokémon zu entwickeln, kannst du ein Basis-Pokémon (aber kein Baby-Pokémon) aus deinem Ablagestapel nehmen und auf deine Bank legen. Wirf dann 3 Münzen. Wähle für jeden geworfenen 'Kopf' eine Basis-Energiekarte aus deinem Ablagestapel und lege sie an dieses Pokémon an."
		}
	}],

	attacks: [{
		name: {
			de: "Hydrokinese"
		},

		damage: 40,

		effect: {
			de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt verbrannt. Bei 'Zahl' ist das verteidigende Pokémon jetzt verwirrt."
		},

		cost: ["Psychic", "Psychic", "Colorless", "Colorless"]
	}]
}

export default card
