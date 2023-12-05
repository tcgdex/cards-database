import { Card } from "../../../interfaces"
import Set from "../Skyridge"

const card: Card = {
	set: Set,

	name: {
		de: "Iksbat"
	},

	abilities: [{
		type: 'Poke-POWER',
		name: {
			de: "Wegtragen"
		},

		effect: {
			de: "Einmal während deines Zuges (vor deinem Angriff) kannst du eine Münze werfen. Schau dir bei 'Kopf' die Karten auf der Hand deines Gegners an. Falls dein Gegner ein Baby-Pokémon, ein Basis-Pokémon oder eine Entwicklungskarte auf der Hand hat, wähle eine davon. Dein Gegner mischt die Karte in sein Deck. Diese Fähigkeit kann nicht verwendet werden, falls Iksbat von einem speziellen ustand betroffen ist."
		}
	}],

	attacks: [{
		name: {
			de: "Doppelspiel"
		},

		damage: "40x",

		effect: {
			de: "Wirf 2 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl 'Kopf' zu. Wenn beide 'Zahl' zeigen, ist das verteidigende Pokémon jetzt verwirrt und vergiftet."
		},

		cost: ["Grass", "Colorless", "Colorless"]
	}]
}

export default card
