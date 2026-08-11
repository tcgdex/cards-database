import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Épée Rouillée",
		'en-us': "Rusted Sword",
		'es-es': "Espada Oxidada",
		'it-it': "Spada rovinata",
		'pt-br': "Espada Enferrujada",
		'de-de': "Rostiges Schwert"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'fr-fr': "Les attaques du Zacian-V auquel cette carte est attachée infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		'en-us': "The attacks of the Zacian V this card is attached to do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
		'es-es': "Los ataques del Zacian V al que esté unida esta carta hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
		'it-it': "Gli attacchi dello Zacian-V a cui è assegnata questa carta infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
		'pt-br': "Os ataques do Zacian V ao qual esta carta está ligada causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
		'de-de': "Die Attacken des Zacian-V, an das diese Karte angelegt ist, fügen dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Tool",
	regulationMark: "D",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 539333,
				tcgplayer: 232543
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539333,
				tcgplayer: 232543
			}
		},
	],
}

export default card
