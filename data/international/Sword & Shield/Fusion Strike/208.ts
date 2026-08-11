import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [234],
	set: Set,

	name: {
		'en-us': "Stantler",
		'fr-fr': "Cerfrousse",
		'es-es': "Stantler",
		'it-it': "Stantler",
		'pt-br': "Stantler",
		'de-de': "Damhirplex"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Shibuzoh.",

	description: {
		'en-us': "The curved antlers subtly change the flow of air to create a strange space where reality is distorted."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'de-de': "Rückwärtskick",
			'es-es': "Patada Trasera",
			'pt-br': "Chute Traseiro",
			'it-it': "Retrocalcio"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Wild Dive",
			'fr-fr': "Piqué Fou",
			'de-de': "Wilder Sturzflug",
			'es-es': "Picado Salvaje",
			'pt-br': "Mergulho Selvagem",
			'it-it': "Picchiata Irrefrenabile"
		},

		damage: "30×",

		effect: {
			'en-us': "This attack does 30 damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte zu.",
			'es-es': "Este ataque hace 30 puntos de daño por cada Energía unida al Pokémon Activo de tu rival.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'it-it': "Questo attacco infligge 30 danni per ogni Energia assegnata al Pokémon attivo del tuo avversario."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582941,
				tcgplayer: 253304
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582941,
				tcgplayer: 253304
			}
		},
	],
}

export default card
