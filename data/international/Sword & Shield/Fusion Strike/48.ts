import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [851],
	set: Set,

	name: {
		'en-us': "Centiskorch",
		'fr-fr': "Scolocendre",
		'es-es': "Centiskorch",
		'it-it': "Centiskorch",
		'pt-br': "Centiskorch",
		'de-de': "Infernopod"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Sizzlipede",
		'fr-fr': "Grillepattes",
		'es-es': "Sizzlipede",
		'it-it': "Sizzlipede",
		'pt-br': "Sizzlipede",
		'de-de': "Thermopod"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Hasuno",

	description: {
		'en-us': "While its burning body is already dangerous on its own, this excessively hostile Pokémon also has large and very sharp fangs."
	},

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Coil",
			'fr-fr': "Enroulement",
			'de-de': "Einrollen",
			'es-es': "Enrosque",
			'pt-br': "Enroscar",
			'it-it': "Arrotola"
		},

		damage: 30,

		effect: {
			'en-us': "During your next turn, this Pokémon's attacks do 90 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			'fr-fr': "Pendant votre prochain tour, les attaques de ce Pokémon infligent 90 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			'de-de': "Während deines nächsten Zuges fügen die Attacken dieses Pokémon dem Aktiven Pokémon deines Gegners 90 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			'es-es': "Durante tu próximo turno, los ataques de este Pokémon hacen 90 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			'pt-br': "Durante o seu próximo turno, os ataques deste Pokémon causarão 90 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			'it-it': "Durante il tuo prossimo turno, gli attacchi di questo Pokémon infliggono 90 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Burning Train",
			'fr-fr': "Train Brûlant",
			'de-de': "Brennender Zug",
			'es-es': "Tren Ardiente",
			'pt-br': "Trem Incendiário",
			'it-it': "Treno Infuocato"
		},

		damage: 120
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582182,
				tcgplayer: 253179
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582182,
				tcgplayer: 253179
			}
		},
	],
}

export default card
