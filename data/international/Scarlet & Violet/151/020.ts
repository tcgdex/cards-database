import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [20],
	set: Set,

	name: {
		'fr-fr': "Rattatac",
		'en-us': "Raticate",
		'es-es': "Raticate",
		'it-it': "Raticate",
		'pt-br': "Raticate",
		'de-de': "Rattikarl"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	evolveFrom: {
		'fr-fr': "Rattata",
		'en-us': "Rattata",
		'es-es': "Rattata",
		'it-it': "Rattata",
		'pt-br': "Rattata",
		'de-de': "Rattfratz"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Double Morsure",
			'en-us': "Second Bite",
			'es-es': "Segundo Mordisco",
			'it-it': "Secondo Morso",
			'pt-br': "Segunda Mordida",
			'de-de': "Zweiter Biss"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			'en-us': "This attack does 30 more damage for each damage counter on your opponent's Active Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "G",

	description: {
		'en-us': "Its whiskers are essential for maintaining its balance. No matter how friendly you are, it will get angry and bite you if you touch its whiskers.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733615,
				tcgplayer: 502569,
				cardtrader: 261212
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733615,
				tcgplayer: 502569,
				cardtrader: 261212
			}
		},
	],

	illustrator: "sowsow",

	
}

export default card
