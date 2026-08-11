import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [1023],
	set: Set,

	name: {
		'en-us': "Iron Crown ex",
		'fr-fr': "Chef-de-Fer-ex",
		'es-es': "Ferrotesta ex",
		'it-it': "Capoferreo-ex",
		'pt-br': "Chifres Férreos ex",
		'de-de': "Eisenhaupt-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Cobalt Command",
			'fr-fr': "Ordre Cobalt",
			'es-es': "Orden Cobalto",
			'it-it': "Cobalcomando",
			'pt-br': "Comando de Cobalto",
			'de-de': "Kobaltbefehl"
		},

		effect: {
			'en-us': "Attacks used by your Future Pokémon, except any Iron Crown ex, do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'fr-fr': "Les attaques utilisées par vos Pokémon Temps futur, à l'exception de Chef-de-Fer-ex, infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques usados por tus Pokémon del futuro, excepto los de Ferrotesta ex, hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Gli attacchi usati dai tuoi Pokémon Tempo Futuro, a eccezione di qualsiasi Capoferreo-ex, infliggono 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Os ataques usados pelos seus Pokémon Futuristas, exceto por quaisquer Chifres Férreos ex, causam 20 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Attacken, die von deinen Pokémon aus der Zukunft, außer Eisenhaupt-ex, eingesetzt werden, fügen dem Aktiven Pokémon deines Gegners 20 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Twin Shotels",
			'fr-fr': "Shotel Double",
			'es-es': "Shotel Gemelas",
			'it-it': "Doppio Shotel",
			'pt-br': "Espadas Gêmeas",
			'de-de': "Zwillings-Shotel"
		},

		effect: {
			'en-us': "This attack does 50 damage to 2 of your opponent's Pokémon. This attack's damage isn't affected by Weakness or Resistance, or by any effects on those Pokémon.",
			'fr-fr': "Cette attaque inflige 50 dégâts à 2 des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse, la Résistance ou tout effet en action sur ces Pokémon.",
			'es-es': "Este ataque hace 50 puntos de daño a 2 de los Pokémon de tu rival. El daño de este ataque no se ve afectado por Debilidad o Resistencia, ni por ningún efecto en esos Pokémon.",
			'it-it': "Questo attacco infligge 50 danni a due dei Pokémon del tuo avversario. I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza, o da alcun effetto presente su quei Pokémon.",
			'pt-br': "Este ataque causa 50 pontos de dano a 2 dos Pokémon do seu oponente. O dano deste ataque não é afetado por Fraqueza, Resistência ou por quaisquer efeitos naqueles Pokémon.",
			'de-de': "Diese Attacke fügt 2 Pokémon deines Gegners 50 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder Effekte auf jenen Pokémon nicht verändert."
		}
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 760821,
				tcgplayer: 542912
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

}

export default card