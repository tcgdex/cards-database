import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [991],
	set: Set,

	name: {
		'en-us': "Iron Bundle",
		'fr-fr': "Hotte-de-Fer",
		'es-es': "Ferrosaco",
		'it-it': "Saccoferreo",
		'pt-br': "Pacote Férreo",
		'de-de': "Eisenbündel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Gusting Collision",
			'fr-fr': "Collision Rafale",
			'es-es': "Colisión Racheada",
			'it-it': "Schiantoraffica",
			'pt-br': "Colisão de Vento",
			'de-de': "Stürmische Kollision"
		},

		effect: {
			'en-us': "This attack does 50 less damage for each {C} in your opponent's Active Pokémon's Retreat Cost.",
			'fr-fr': "Cette attaque inflige 50 dégâts de moins pour chaque {C} dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 50 puntos de daño menos por cada {C} en el Coste de Retirada del Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 50 danni in meno per ogni {C} nel costo di ritirata del Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 50 pontos de dano a menos para cada {C} no custo de Recuo do Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jedes {C} in den Rückzugskosten des Aktiven Pokémon deines Gegners 50 Schadenspunkte weniger zu."
		},

		damage: "200-"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794321,
				tcgplayer: 589969
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794321,
				tcgplayer: 589969
			}
		},
	],

	illustrator: "rika",
	
}

export default card
