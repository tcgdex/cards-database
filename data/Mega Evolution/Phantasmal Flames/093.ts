import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Sacred Charm",
		fr: "Amulette Sacrée",
		es: "Amuleto Sagrado",
		'es-mx': "Amuleto Sagrado",
		de: "Geweihtes Amulett",
		it: "Amuleto Magico",
		pt: "Pingente Sagrado"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "The Pokémon this card is attached to takes 30 less damage from attacks from your opponent's Pokémon that have an Ability (after applying Weakness and Resistance).",
		fr: "Le Pokémon auquel cette carte est attachée subit 30 dégâts de moins provenant des attaques des Pokémon de votre adversaire ayant un talent (après application de la Faiblesse et de la Résistance).",
		es: "Los ataques de los Pokémon de tu rival que tengan una habilidad hacen 30 puntos de daño menos al Pokémon al que esté unida esta carta (después de aplicar Debilidad y Resistencia).",
		'es-mx': "El Pokémon al que esté unida esta carta recibe 30 puntos de daño menos de los ataques de los Pokémon de tu rival que tengan alguna Habilidad (después de aplicar Debilidad y Resistencia).",
		de: "Dem Pokémon, an das diese Karte angelegt ist, werden durch Attacken von Pokémon deines Gegners, die eine Fähigkeit haben, 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden).",
		it: "Il Pokémon a cui è assegnata questa carta subisce 30 danni in meno dagli attacchi dei Pokémon del tuo avversario che hanno un'abilità, dopo aver applicato debolezza e resistenza.",
		pt: "O Pokémon ao qual esta carta está ligada recebe 30 pontos de dano a menos de ataques dos Pokémon do seu oponente que têm uma Habilidade (depois de aplicar Fraqueza e Resistência)."
	},

	trainerType: "Tool",
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		cardmarket: 857668
	}
}

export default card