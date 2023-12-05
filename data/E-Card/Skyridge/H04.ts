import { Card } from "../../../interfaces"
import Set from "../Skyridge"

const card: Card = {
	set: Set,

	name: {
		de: "Bibor"
	},

	abilities: [{
		type: 'Poke-POWER',
		name: {
			de: "Vergiftungsspray"
		},

		effect: {
			de: "Wenn du Bibor aus deiner Hand spielst, um dein aktives Pokémon zu entwickeln, ist das verteidigende Pokémon jetzt gelähmt und vergiftet."
		}
	}],

	attacks: [{
		name: {
			de: "Nadelrakete"
		},

		damage: "10+",

		effect: {
			de: "Wirf 4 Münzen. Zeigt 1 Münze 'Kopf', fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu. Zeigen 2 Münzen 'Kopf', fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu. Zeigen 3 Münzen 'Kopf', fügt dieser Angriff 10 Schadenspunkte plus 50 weitere Schadenspunkte zu. Zeigen 4 Münzen 'Kopf', fügt dieser Angriff 10 Schadenspunkte plus 90 weitere Schadenspunkte zu."
		},

		cost: ["Colorless", "Colorless"]
	}]
}

export default card
