import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [841],
	set: Set,

	name: {
		'en-us': "Flapple V",
		'fr-fr': "Pomdrapi V",
		'es-es': "Flapple V",
		'it-it': "Flapple V",
		'pt-br': "Flapple V",
		'de-de': "Drapfel V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],

	attacks: [{
		name: {
			'en-us': "Sour Spit",
			'fr-fr': "Rejet Acide",
			'es-es': "Escupitajo Ácido",
			'it-it': "Asprosputo",
			'pt-br': "Cuspe Azedo",
			'de-de': "Sauerspucke"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon's attacks cost ColorlessColorless more.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur coûtent ColorlessColorless de plus.",
			'es-es': "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor cuestan ColorlessColorless más.",
			'it-it': "Durante il prossimo turno del tuo avversario, il costo degli attacchi del Pokémon difensore aumenta di Colorless Colorless.",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques do Pokémon Defensor custarão ColorlessColorless a mais.",
			'de-de': "Während des nächsten Zuges deines Gegners erhöhen sich die Kosten der Attacken des Verteidigenden Pokémon um ColorlessColorless."
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			'en-us': "Wing Attack",
			'fr-fr': "Cru-Ailes",
			'es-es': "Ataque Ala",
			'it-it': "Attacco d'Ala",
			'pt-br': "Ataque de Asa",
			'de-de': "Flügelschlag"
		},

		damage: 120,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 544996,
				tcgplayer: 234087
			}
		},
	],
}

export default card
