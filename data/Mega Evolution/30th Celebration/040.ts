import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		'es-mx': "Pikachu"
	},

	illustrator: "Shinji Kanda",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Overwriting Bolt",
			fr: "Éclair Altéragène",
			de: "Wechselblitz",
			es: "Rayo Reemplazo",
			it: "Fulmine Alterante",
			'es-mx': "Rayo Reescritor"
		},

		effect: {
			en: "The Defending Pokémon's Weakness is now <span class=\"energy-symbol Lightning\" title=\"Lightning\">Lightning</span> until the end of your next turn. <em>(Apply Weakness as ×2.)</em>",
			fr: "La Faiblesse du Pokémon Défenseur est maintenant de type <span class=\"energy-symbol Lightning\" title=\"Électrique\">Lightning</span> jusqu'à la fin de votre prochain tour. <em>(Appliquez une Faiblesse de ×2.)</em>",
			de: "Die Schwäche des Verteidigenden Pokémon ist bis zum Ende deines nächsten Zuges jetzt <span class=\"energy-symbol Lightning\" title=\"Elektro\">Lightning</span>. <em>(Verrechne Schwäche als ×2.)</em>",
			es: "La Debilidad del Pokémon Defensor pasa a ser <span class=\"energy-symbol Lightning\" title=\"Rayo\">Lightning</span> hasta el final de tu próximo turno. <em>(Aplica una Debilidad de × 2)</em>.",
			it: "La debolezza del Pokémon difensore diventa <span class=\"energy-symbol Lightning\" title=\"Lampo\">Lightning</span> fino alla fine del tuo prossimo turno. <em>La debolezza è</em><em> ×2</em>.",
			'es-mx': "La Debilidad del Pokémon Defensor ahora es <span class=\"energy-symbol Lightning\" title=\"Rayo\">Lightning</span> hasta el final de tu próximo turno. <em>(Aplica</em> <em>Debilidad de × 2).</em>"
		},

		damage: 10,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card