import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Espeon",
		fr: "Mentali",
		es: "Espeon",
		it: "Espeon",
		pt: "Espeon",
		de: "Psiana"
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
		en: "Eevee",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Solar Revelation",
				fr: "Révélation Solaire",
				es: "Revelación Solar",
				it: "Rivelasole",
				pt: "Revelação Solar",
				de: "Solarschild"
			},
			effect: {
				en: "Prevent all effects of your opponent’s attacks, except damage, done to each of your Pokémon that has any Energy attached to it.",
				fr: "Évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à chacun de vos Pokémon auquel de l’Énergie est attachée.",
				es: "Evita todos los efectos de los ataques de tu rival, excepto el daño, infligidos a cada uno de tus Pokémon que tenga cualquier Energía unida a él.",
				it: "Previeni tutti gli effetti degli attacchi del tuo avversario, esclusi i danni, inflitti ai tuoi Pokémon che abbiano delle Energie assegnate.",
				pt: "Previne todos os efeitos dos ataques do seu oponente, exceto danos, causados a cada um dos seus Pokémon com Energia ligada.",
				de: "Verhindere alle Effekte von gegnerischen Angriffen, außer Schaden, bei jedem deiner Pokémon, an das Energie angelegt ist."
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
				en: "Psy Report",
			},
			effect: {
				en: "Your opponent reveals his or her hand.",
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

	retreat: 1
}

export default card
