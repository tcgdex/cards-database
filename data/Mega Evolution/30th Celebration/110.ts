import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "They communicate with their allies using the sounds their scales make when struck. A group of these Pokémon causes quite a racket."
	},

	name: {
		en: "Jangmo-o",
		fr: "Bébécaille",
		de: "Miniras",
		es: "Jangmo-o",
		it: "Jangmo-o",
		'es-mx': "Jangmo-o"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [782],
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Screech",
			fr: "Grincement",
			de: "Kreideschrei",
			es: "Chirrido",
			it: "Stridio",
			'es-mx': "Chillido"
		},

		effect: {
			en: "During your next turn, the Defending Pokémon takes 30 more damage from attacks <em>(after applying Weakness and Resistance)</em>.",
			fr: "Pendant votre prochain tour, le Pokémon Défenseur subit 30 dégâts supplémentaires provenant des attaques <em>(après application de la Faiblesse et de la Résistance)</em>.",
			de: "Während deines nächsten Zuges werden dem Verteidigenden Pokémon durch Attacken 30 Schadenspunkte mehr zugefügt <em>(nachdem Schwäche und Resistenz verrechnet wurden)</em>.",
			es: "Durante tu próximo turno, los ataques hacen 30 puntos de daño más al Pokémon Defensor <em>(después de aplicar Debilidad y Resistencia)</em>.",
			it: "Durante il tuo prossimo turno, il Pokémon difensore subisce 30 danni in più dagli attacchi, <em>dopo aver applicato debolezza e resistenza</em>.",
			'es-mx': "Durante tu próximo turno, el Pokémon Defensor recibe 30 puntos de daño más de ataques <em>(después de aplicar Debilidad y Resistencia)</em>."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Dragon Claw",
			fr: "Draco-Griffe",
			de: "Drachenklaue",
			es: "Garra Dragón",
			it: "Dragartigli",
			'es-mx': "Garra Dragón"
		},

		damage: 40,
		cost: ["Lightning", "Fighting"]
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907717,
				tcgplayer: 716503
			}
		}
	],
}

export default card
