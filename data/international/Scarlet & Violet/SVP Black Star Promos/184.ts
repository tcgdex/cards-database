import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [143],
	set: Set,

	name: {
		'en-us': "Hop's Snorlax",
		'fr-fr': "Ronflex de Nabil",
		'de-de': "Hops Relaxo",
		'es-es': "Snorlax de Paul",
		'it-it': "Snorlax di Hop",
		'pt-br': "Snorlax do Lupo"
	},

	illustrator: "OKACHEKE",
	rarity: "Promo",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Extra Helpings",
			'fr-fr': "Portions Supplémentaires",
			'de-de': "Extraportion",
			'es-es': "Raciones Extras",
			'it-it': "Porzioni Aggiuntive",
			'pt-br': "Boca-livre"
		},

		effect: {
			'en-us': "Attacks used by your Hop's Pokémon do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). The effect of Extra Helpings doesn't stack.",
			'fr-fr': "Les attaques utilisées par vos Pokémon de Nabil infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance). L'effet de Portions Supplémentaires n'est pas cumulable.",
			'de-de': "Die von deinen Hops Pokémon eingesetzten Attacken fügen dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden). Der Effekt von Extraportion stapelt sich nicht.",
			'es-es': "Los ataques usados por tus Pokémon de Paul hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia). El efecto de Raciones Extras no se acumula.",
			'it-it': "Gli attacchi usati dai tuoi Pokémon di Hop infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza. L'effetto di Porzioni Aggiuntive non è cumulabile.",
			'pt-br': "Os ataques usados pelos seus Pokémon do Lupo causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência). O efeito de Boca-livre não acumula."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Dynamic Press",
			'fr-fr': "Pression Dynamique",
			'de-de': "Dynamische Presse",
			'es-es': "Presión Dinámica",
			'it-it': "Pressa Dinamica",
			'pt-br': "Compressão Dinâmica"
		},

		effect: {
			'en-us': "This Pokémon also does 80 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 80 dégâts.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 80 Schadenspunkte zu.",
			'es-es': "Este Pokémon también se hace 80 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 80 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 80 pontos de dano a si mesmo."
		},

		damage: 140
	}],

	retreat: 4,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 816617,
				tcgplayer: 623238
			},
		},
		{
			type: "holo",
			stamp: ["set-logo", "staff"],
			thirdParty: {
				cardmarket: 817775,
				tcgplayer: 624485
			},
		}
	],
}

export default card
