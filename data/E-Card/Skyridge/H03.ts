import { Card } from "../../../interfaces"
import Set from "../Skyridge"

const card: Card = {
	set: Set,

	name: {
		de: "Arktos"
	},

	abilities: [{
		type: 'Poke-BODY',
		name: {
			de: "Wasser-Immunität"
		},

		effect: {
			de: "Du kannst keine  Energiekarten aus deiner Hand an Arktos anlegen."
		}
	}],

	attacks: [{
		name: {
			de: "Einfrieren"
		},

		damage: 10,

		effect: {
			de: "Wenn mindestens eine  -Energiekarte in deinem Ablegestapel ist, wirf eine Münze. Lege bei \"Kopf\" eine davon an Arktos an."
		},

		cost: ["Colorless"]
	}, {
		name: {
			de: "Eis-Zyklon"
		},

		damage: 50,

		effect: {
			de: "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff jedem Pokémon auf der gegnerischen Bank 10 Schadenspunkte zu. Bei 'Zahl' fügt dieser Angriff jedem deiner Pokémon im Spiel 10 Schadenspunkte zu. (Wende keine Schwäche oder Resistenz bei Pokémon auf der Bank an.)"
		},

		cost: ["Water", "Water", "Colorless", "Colorless"]
	}]
}

export default card
