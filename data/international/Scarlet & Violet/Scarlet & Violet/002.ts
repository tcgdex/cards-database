import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [214],
	set: Set,

	name: {
		'en-us': "Heracross",
		'fr-fr': "Scarhino",
		'es-es': "Heracross",
		'it-it': "Heracross",
		'pt-br': "Heracross",
		'de-de': "Skaraborn"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Superpowered Throw",
			'fr-fr': "Lancer Surpuissant",
			'es-es': "Lanzamiento Superpoderoso",
			'it-it': "Lancio Superpotenziato",
			'pt-br': "Jogada Superpoderosa",
			'de-de': "Superstarker Wurf"
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
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Horn Attack",
			'fr-fr': "Koud'Korne",
			'es-es': "Cornada",
			'it-it': "Incornata",
			'pt-br': "Ataque de Chifre",
			'de-de': "Hornattacke"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Taira Akitsu",

	description: {
		'en-us': "With its herculean powers, it can easily throw around an object that is 100 times its own weight.",
	},

	thirdParty: {
        cardmarket: 702299,
        tcgplayer: 487831
    }
}

export default card