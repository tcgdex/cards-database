import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Hydreigon",
		'fr-fr': "Trioxhydre",
		'es-es': "Hydreigon",
		'it-it': "Hydreigon",
		'pt-br': "Hydreigon",
		'de-de': "Trikephalo"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Dragon"],
	stage: "Stage2",
	illustrator: "hatachu",

	attacks: [{
		name: {
			'en-us': "Dragon Counter",
			'fr-fr': "Draco-Riposte",
			'es-es': "Contraataque Dragón",
			'it-it': "Contrattacco Drago",
			'pt-br': "Dragon Counter",
			'de-de': "Drachenkonter"
		},

		effect: {
			'en-us': "This attack does 100 more damage for each Prize card your opponent took during their last turn.",
			'fr-fr': "Cette attaque inflige 100 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée pendant son dernier tour.",
			'es-es': "Este ataque hace 100 puntos de daño más por cada carta de Premio que haya cogido tu rival durante su último turno.",
			'it-it': "Questo attacco infligge 100 danni in più per ogni carta Premio presa dal tuo avversario durante il suo ultimo turno.",
			'pt-br': "This attack does 100 more damage for each Prize card your opponent took during their last turn.",
			'de-de': "Diese Attacke fügt für jede von deinem Gegner während seines letzten Zuges genommene Preiskarte 100 Schadenspunkte mehr zu."
		},

		damage: "20+",
		cost: ["Psychic", "Darkness"]
	}, {
		name: {
			'en-us': "Pitch-Black Fangs",
			'fr-fr': "Crocs Nuit Noire",
			'es-es': "Colmillos Azabaches",
			'it-it': "Zanne Buiopesto",
			'pt-br': "Pitch-Black Fangs",
			'de-de': "Pechschwarze Fänge"
		},

		damage: 210,
		cost: ["Psychic", "Darkness", "Colorless", "Colorless"]
	}],

	retreat: 3,
	dexId: [635],

	evolveFrom: {
		'en-us': "Zweilous",
		'fr-fr': "Diamat",
		'es-es': "Zweilous",
		'it-it': "Zweilous",
		'pt-br': "Zweilous",
		'de-de': "Duodino"
	},

	description: {
		'en-us': "The three heads take turns sinking their teeth into the opponent. Their attacks won't slow until their target goes down."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574163,
				tcgplayer: 246913
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574163,
				tcgplayer: 246913
			}
		},
	],
}

export default card
