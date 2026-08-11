import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Espeon",
		'fr-fr': "Mentali",
		'es-es': "Espeon",
		'it-it': "Espeon",
		'pt-br': "Espeon",
		'de-de': "Psiana"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		196,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Solar Revelation",
				'fr-fr': "Révélation Solaire",
				'es-es': "Revelación Solar",
				'it-it': "Rivelasole",
				'pt-br': "Revelação Solar",
				'de-de': "Solarschild"
			},
			effect: {
				'en-us': "Prevent all effects of your opponent’s attacks, except damage, done to each of your Pokémon that has any Energy attached to it.",
				'fr-fr': "Évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à chacun de vos Pokémon auquel de l’Énergie est attachée.",
				'es-es': "Evita todos los efectos de los ataques de tu rival, excepto el daño, infligidos a cada uno de tus Pokémon que tenga cualquier Energía unida a él.",
				'it-it': "Previeni tutti gli effetti degli attacchi del tuo avversario, esclusi i danni, inflitti ai tuoi Pokémon che abbiano delle Energie assegnate.",
				'pt-br': "Previne todos os efeitos dos ataques do seu oponente, exceto danos, causados a cada um dos seus Pokémon com Energia ligada.",
				'de-de': "Verhindere alle Effekte von gegnerischen Angriffen, außer Schaden, bei jedem deiner Pokémon, an das Energie angelegt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psy Report",
				'fr-fr': "Observation Psychique"
			},
			effect: {
				'en-us': "Your opponent reveals his or her hand.",
				'fr-fr': "Votre adversaire montre sa main."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its fur is so sensitive, it can sense minute shifts in the air and predict the weather.",
	},

	thirdParty: {
		cardmarket: 280376,
		tcgplayer: 85325
	}
}

export default card
