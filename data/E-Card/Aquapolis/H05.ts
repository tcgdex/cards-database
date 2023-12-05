import { Card } from "../../../interfaces"
import Set from "../Aquapolis"

const card: Card = {
	set: Set,

	name: {
		de: "Blubella"
	},

	abilities: [{
		type: 'Poke-POWER',
		name: {
			de: "Blumenschlepper"
		},

		effect: {
			de: "Einmal während deines Zuges (vor deinem Angriff) kannst du eine Münze werfen. Lege bei 'Kopf' 1 Basis-Energiekarte aus deiner Hand an 1 deiner Pokémon auf deiner Bank an. Diese Fähigkeit kann nicht verwendet werden, falls Blubella von einem Speziellen Zustand betroffen ist."
		}
	}],

	attacks: [{
		name: {
			de: "Messerblatt"
		},

		damage: "30x",

		effect: {
			de: "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl 'Kopf' zu."
		},

		cost: ["Grass", "Grass", "Colorless"]
	}]
}

export default card
