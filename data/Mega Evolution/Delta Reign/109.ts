import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Pincurchin",
		fr: "Wattapik",
		de: "Britzigel",
		es: "Pincurchin",
		it: "Pincurchin",
		pt: "Pincurchin",
		'es-mx': "Pincurchin"
	},

	illustrator: "Tetsu Kayama",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Energy Crush",
			fr: "Écras'Énergie",
			de: "Zermalmende Energie",
			es: "Comprimir Energía",
			it: "Sgretolenergia",
			pt: "Esmagamento de Energia",
			'es-mx': "Aplastamiento de Energía"
		},

		effect: {
			en: "This attack does 20 damage for each Energy attached to all of your opponent's Pokémon.",
			fr: "Cette attaque inflige 20 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
			de: "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Energie 20 Schadenspunkte zu.",
			es: "Este ataque hace 20 puntos de daño por cada Energía unida a cada uno de los Pokémon de tu rival.",
			it: "Questo attacco infligge 20 danni per ogni Energia assegnata ai Pokémon del tuo avversario.",
			pt: "Este ataque causa 20 pontos de dano para cada Energia ligada a todos os Pokémon do seu oponente.",
			'es-mx': "Este ataque hace 20 puntos de daño por cada Energía unida a cada uno de los Pokémon de tu rival."
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	thirdParty: {
		tcgplayer: 726561,
		cardmarket: 918853
	}
}

export default card