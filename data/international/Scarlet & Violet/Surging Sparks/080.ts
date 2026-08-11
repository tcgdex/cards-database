import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [482],
	set: Set,

	name: {
		'en-us': "Azelf",
		'fr-fr': "Créfadet",
		'es-es': "Azelf",
		'it-it': "Azelf",
		'pt-br': "Azelf",
		'de-de': "Tobutz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Neurokinesis",
			'fr-fr': "Neurokinésie",
			'es-es': "Neuroquinesis",
			'it-it': "Neurocinèsi",
			'pt-br': "Neurocinese",
			'de-de': "Neurokinese"
		},

		effect: {
			'en-us': "This attack does 10 more damage for each damage counter on all of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur tous les Pokémon de votre adversaire.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en cada uno de los Pokémon de tu rival.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sui Pokémon del tuo avversario.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano em todos os Pokémon do seu oponente.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf allen Pokémon deines Gegners 10 Schadenspunkte mehr zu."
		},

		damage: "10+"
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
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794380,
				tcgplayer: 589871
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794380,
				tcgplayer: 589871
			}
		},
	],

	illustrator: "HYOGONOSUKE",
	
}

export default card
