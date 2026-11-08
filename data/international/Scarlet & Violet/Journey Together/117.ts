import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [143],
	set: Set,

	name: {
		'en-us': "Hop's Snorlax",
		'fr-fr': "Ronflex de Nabil",
		'es-es': "Snorlax de Paul",
		'de-de': "Hops Relaxo",
		'it-it': "Snorlax di Hop",
		'pt-br': "Snorlax do Lupo",
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
			'en-us': "Extra Helpings",
			'fr-fr': "Portions Supplémentaires",
			'es-es': "Raciones Extras",
			'de-de': "Extraportion",
			'it-it': "Porzioni Aggiuntive",
			'pt-br': "Boca-livre",
			'es-mx': "Raciones Extras"
		},

		effect: {
			'en-us': "Attacks used by your Hop's Pokémon do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). The effect of Extra Helpings doesn't stack.",
			'fr-fr': "Les attaques utilisées par vos Pokémon de Nabil infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance). L'effet de Portions Supplémentaires n'est pas cumulable.",
			'es-es': "Los ataques usados por tus Pokémon de Paul hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia). El efecto de Raciones Extras no se acumula.",
			'de-de': "Die von deinen Hops Pokémon eingesetzten Attacken fügen dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden). Der Effekt von Extraportion stapelt sich nicht.",
			'it-it': "Gli attacchi usati dai tuoi Pokémon di Hop infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza. L'effetto di Porzioni Aggiuntive non è cumulabile.",
			'pt-br': "Os ataques usados pelos seus Pokémon do Lupo causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência). O efeito de Boca-livre não acumula.",
			'es-mx': "Los ataques usados por tus Pokémon de Paul hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia). El efecto de Raciones Extras no se acumula."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Dynamic Press",
			'fr-fr': "Pression Dynamique",
			'es-es': "Presión Dinámica",
			'de-de': "Dynamische Presse",
			'it-it': "Pressa Dinamica",
			'pt-br': "Compressão Dinâmica",
			'es-mx': "Plancha Dinámica"
		},

		effect: {
			'en-us': "This Pokémon also does 80 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 80 dégâts.",
			'es-es': "Este Pokémon también se hace 80 puntos de daño a sí mismo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 80 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 80 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 80 pontos de dano a si mesmo.",
			'es-mx': "Este Pokémon también se hace 80 puntos de daño a sí mismo."
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "I",
	illustrator: "GOSSAN",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817269,
				tcgplayer: 623544
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817269,
				tcgplayer: 623544
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 817769,
			}
		},
		{
			type: "holo",
			stamp: ["gamestop"],
			thirdParty: {
				cardmarket: 817770,
			}
		},
		{
			type: "holo",
			stamp: ["eb-games"],
			thirdParty: {
				cardmarket: 828859,
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			stamp: ['player-rewards-program']
		},
		{
			type: 'normal',
			stamp: ['player-rewards-program']
		}
	],
}

export default card
