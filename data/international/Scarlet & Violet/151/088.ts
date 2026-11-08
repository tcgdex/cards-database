import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [88],
	set: Set,

	name: {
		'fr-fr': "Tadmorv",
		'en-us': "Grimer",
		'es-es': "Grimer",
		'it-it': "Grimer",
		'pt-br': "Grimer",
		'de-de': "Sleima"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'fr-fr': "Pression Gluante",
			'en-us': "Gummy Press",
			'es-es': "Presión Pegajosa",
			'it-it': "Pressa Appiccicosa",
			'pt-br': "Compressão Viscosa",
			'de-de': "Klebriger Druck"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Coût de Retraite du Pokémon Défenseur est augmenté de {C}.",
			'en-us': "During your opponent's next turn, the Defending Pokémon's Retreat Cost is {C} more.",
			'es-es': "Durante el próximo turno de tu rival, el Coste de Retirada del Pokémon Defensor es de {C} más.",
			'it-it': "Durante il prossimo turno del tuo avversario, il costo di ritirata del Pokémon difensore aumenta di {C}.",
			'pt-br': "Durante o próximo turno do seu oponente, o custo de Recuo do Pokémon Defensor será {C} a mais.",
			'de-de': "Während des nächsten Zuges deines Gegners erhöhen sich die Rückzugskosten des Verteidigenden Pokémon um {C}."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Born from sludge, these Pokémon now gather in polluted places and increase the bacteria in their bodies.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733683,
				tcgplayer: 516657,
				cardtrader: 261121
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733683,
				tcgplayer: 516657,
				cardtrader: 261121
			}
		},
	],

	illustrator: "Nisota Niso",

	
}

export default card
