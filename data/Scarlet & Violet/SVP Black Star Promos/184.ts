import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Hop's Snorlax",
		fr: "Ronflex de Nabil",
		de: "Hops Relaxo",
		es: "Snorlax de Paul",
		it: "Snorlax di Hop",
		pt: "Snorlax do Lupo"
	},

	illustrator: "OKACHEKE",
	rarity: "None",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Extra Helpings",
			fr: "Portions Supplémentaires",
			de: "Extraportion",
			es: "Raciones Extras",
			it: "Porzioni Aggiuntive",
			pt: "Boca-livre"
		},

		effect: {
			en: "Attacks used by your Hop's Pokémon do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). The effect of Extra Helpings doesn't stack.",
			fr: "Les attaques utilisées par vos Pokémon de Nabil infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance). L'effet de Portions Supplémentaires n'est pas cumulable.",
			de: "Die von deinen Hops Pokémon eingesetzten Attacken fügen dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden). Der Effekt von Extraportion stapelt sich nicht.",
			es: "Los ataques usados por tus Pokémon de Paul hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia). El efecto de Raciones Extras no se acumula.",
			it: "Gli attacchi usati dai tuoi Pokémon di Hop infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza. L'effetto di Porzioni Aggiuntive non è cumulabile.",
			pt: "Os ataques usados pelos seus Pokémon do Lupo causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência). O efeito de Boca-livre não acumula."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Dynamic Press",
			fr: "Pression Dynamique",
			de: "Dynamische Presse",
			es: "Presión Dinámica",
			it: "Pressa Dinamica",
			pt: "Compressão Dinâmica"
		},

		effect: {
			en: "This Pokémon also does 80 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 80 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 80 Schadenspunkte zu.",
			es: "Este Pokémon también se hace 80 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 80 danni a se stesso.",
			pt: "Este Pokémon também causa 80 pontos de dano a si mesmo."
		},

		damage: 140
	}],

	retreat: 4,
	regulationMark: "I"
}

export default card