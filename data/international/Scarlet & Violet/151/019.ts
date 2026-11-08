import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [19],
	set: Set,

	name: {
		'fr-fr': "Rattata",
		'en-us': "Rattata",
		'es-es': "Rattata",
		'it-it': "Rattata",
		'pt-br': "Rattata",
		'de-de': "Rattfratz"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Rongement de la Plaie",
			'en-us': "Gnaw the Wound",
			'es-es': "Roer la Herida",
			'it-it': "Rosicchia la Ferita",
			'pt-br': "Roer a Ferida",
			'de-de': "Wundnager"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			'en-us': "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 10 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon is common but hazardous. Its sharp incisors can easily cut right through hard wood.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733614,
				tcgplayer: 502568,
				cardtrader: 261145
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733614,
				tcgplayer: 502568,
				cardtrader: 261145
			}
		},
	],

	illustrator: "sowsow",

	
}

export default card
