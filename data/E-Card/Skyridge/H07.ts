import { Card } from "../../../interfaces"
import Set from "../Skyridge"

const card: Card = {
	set: Set,

	name: {
		de: "Flamara"
	},

	abilities: [{
		type: 'Poke-BODY',
		name: {
			de: "Selbstheilung"
		},

		effect: {
			de: "Immer wenn du eine -Energiekarte aus deiner Hand an Flamara anlegst, entferne alle speziellen Zustände, die Flamara betreffen."
		}
	}],

	attacks: [{
		name: {
			de: "Versengung"
		},

		effect: {
			de: "Das verteidigende Pokémon ist jetzt verbrannt."
		},

		cost: ["Fire"]
	}, {
		name: {
			de: "Brennverstärker"
		},

		damage: "40+",

		effect: {
			de: "Lege eine an Flamara angelegte Energiekarte auf deinen Ablagestapel, um diesen Angriff zu verwenden. Ist die abgelegte Karte eine -Energiekarte, fügt dieser Angriff 40 Schadenspunkte plus 10 weiter Schadenspunkte zu."
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}]
}

export default card
