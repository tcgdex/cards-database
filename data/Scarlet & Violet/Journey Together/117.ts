import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Hop's Snorlax",
		fr: "Ronflex de Nabil",
		es: "Snorlax de Paul",
		de: "Hops Relaxo",
		it: "Snorlax di Hop",
		pt: "Snorlax do Lupo",
		'es-mx': "Snorlax de Paul"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Extra Helpings",
			fr: "Portions Supplémentaires",
			es: "Raciones Extras",
			de: "Extraportion",
			it: "Porzioni Aggiuntive",
			pt: "Boca-livre",
			'es-mx': "Raciones Extras"
		},

		effect: {
			en: "Attacks used by your Hop's Pokémon do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). The effect of Extra Helpings doesn't stack.",
			fr: "Les attaques utilisées par vos Pokémon de Nabil infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance). L'effet de Portions Supplémentaires n'est pas cumulable.",
			es: "Los ataques usados por tus Pokémon de Paul hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia). El efecto de Raciones Extras no se acumula.",
			de: "Die von deinen Hops Pokémon eingesetzten Attacken fügen dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden). Der Effekt von Extraportion stapelt sich nicht.",
			it: "Gli attacchi usati dai tuoi Pokémon di Hop infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza. L'effetto di Porzioni Aggiuntive non è cumulabile.",
			pt: "Os ataques usados pelos seus Pokémon do Lupo causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência). O efeito de Boca-livre não acumula.",
			'es-mx': "Los ataques usados por tus Pokémon de Paul hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia). El efecto de Raciones Extras no se acumula."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Dynamic Press",
			fr: "Pression Dynamique",
			es: "Presión Dinámica",
			de: "Dynamische Presse",
			it: "Pressa Dinamica",
			pt: "Compressão Dinâmica",
			'es-mx': "Plancha Dinámica"
		},

		effect: {
			en: "This Pokémon also does 80 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 80 dégâts.",
			es: "Este Pokémon también se hace 80 puntos de daño a sí mismo.",
			de: "Dieses Pokémon fügt auch sich selbst 80 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 80 danni a se stesso.",
			pt: "Este Pokémon também causa 80 pontos de dano a si mesmo.",
			'es-mx': "Este Pokémon también se hace 80 puntos de daño a sí mismo."
		},

		damage: 140
	}],

	retreat: 4,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": true,
		"wPromo": false,
		}
}

export default card
