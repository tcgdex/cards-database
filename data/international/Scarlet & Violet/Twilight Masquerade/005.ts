import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [168],
	set: Set,

	name: {
		'en-us': "Ariados",
		'fr-fr': "Migalos",
		'es-es': "Ariados",
		'it-it': "Ariados",
		'pt-br': "Ariados",
		'de-de': "Ariados"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Spinarak",
		'fr-fr': "Mimigal",
		'es-es': "Spinarak",
		'it-it': "Spinarak",
		'pt-br': "Spinarak",
		'de-de': "Webarak"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Big Net",
			'fr-fr': "Grand Filet",
			'es-es': "Gran Tela",
			'it-it': "Gran Tela",
			'pt-br': "Teia Grande",
			'de-de': "Großes Netz"
		},

		effect: {
			'en-us': "Your opponent's Active Evolution Pokémon's Retreat Cost is {C} more.",
			'fr-fr': "Le Coût de Retraite du Pokémon Évolutif Actif de votre adversaire est augmenté de {C}.",
			'es-es': "El Coste de Retirada del Pokémon Evolución Activo de tu rival es de {C} más.",
			'it-it': "Il costo di ritirata del Pokémon Evoluzione attivo del tuo avversario aumenta di {C}.",
			'pt-br': "O custo de Recuo do Pokémon de Evolução Ativo do seu oponente é {C} a mais.",
			'de-de': "Die Rückzugskosten des Aktiven Entwicklungs-Pokémon deines Gegners erhöhen sich um {C}."
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "String Bind",
			'fr-fr': "Ficelage",
			'es-es': "Hilo Atadura",
			'it-it': "Filo Legatutto",
			'pt-br': "Fio Aprisionante",
			'de-de': "Fadenfessel"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each {C} in your opponent's Active Pokémon's Retreat Cost.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque {C} dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada {C} en el Coste de Retirada del Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni {C} nel costo di ritirata del Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada {C} no custo de Recuo do Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jedes {C} in den Rückzugskosten des Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "It wanders in search of food after darkness falls, never nesting in a specific place.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769179,
				tcgplayer: 550049
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769179,
				tcgplayer: 550049
			}
		},
	],

	illustrator: "Anesaki Dynamic",

}

export default card