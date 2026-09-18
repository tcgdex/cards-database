import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "Its ability to deflect any attack led to it being known as the Fighting Master's Shield. It was feared and respected by all."
	},

	name: {
		en: "Zamazenta",
		fr: "Zamazenta",
		de: "Zamazenta",
		es: "Zamazenta",
		it: "Zamazenta",
		'es-mx': "Zamazenta"
	},

	illustrator: "Tsuyoshi Nagano",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [889],
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Fend Off",
			fr: "Dérobade",
			de: "Abwehren",
			es: "Apartar",
			it: "Tenere a Bada",
			'es-mx': "Repeler"
		},

		effect: {
			en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
			fr: "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			de: "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			es: "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
			it: "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario.",
			'es-mx': "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival."
		},

		damage: 20,
		cost: ["Metal"]
	}, {
		name: {
			en: "Shield Press",
			fr: "Pression Bouclier",
			de: "Schildstoß",
			es: "Presión Escudo",
			it: "Scudopressa",
			'es-mx': "Prensa Escudo"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 50 less damage from attacks <em>(after applying Weakness and Resistance)</em>.",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 50 dégâts de moins provenant des attaques <em>(après application de la Faiblesse et de la Résistance)</em>.",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 50 Schadenspunkte weniger zugefügt <em>(nachdem Schwäche und Resistenz verrechnet wurden)</em>.",
			es: "Durante el próximo turno de tu rival, los ataques hacen 50 puntos de daño menos a este Pokémon <em>(después de aplicar Debilidad y Resistencia)</em>.",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 50 danni in meno dagli attacchi, <em>dopo aver applicato debolezza e resistenza</em>.",
			'es-mx': "Durante el próximo turno de tu rival, este Pokémon recibe 50 puntos de daño menos de ataques <em>(después de aplicar Debilidad y Resistencia)</em>."
		},

		damage: 100,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907714,
				tcgplayer: 716500
			}
		}
	],
}

export default card