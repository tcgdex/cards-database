import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Clawitzer",
		'fr-fr': "Gamblast",
		'es-es': "Clawitzer",
		'it-it': "Clawitzer",
		'pt-br': "Clawitzer",
		'de-de': "Wummer"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		693,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Clauncher",
		'fr-fr': "Flingouste",
		'es-es': "Clauncher",
		'it-it': "Clauncher",
		'pt-br': "Clauncher",
		'de-de': "Scampisto"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Mega Boost",
				'fr-fr': "Méga Boost",
				'es-es': "Megaimpulso",
				'it-it': "Megacarica",
				'pt-br': "Megaimpulso",
				'de-de': "Mega-Aufladung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may attach a Special Energy card from your hand to 1 of your Mega Evolution Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie spéciale de votre main à l'un de vos Pokémon Méga-Évolution.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Especial de tu mano a 1 de tus Pokémon Megaevolución.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare a uno dei tuoi Pokémon Megaevoluzione una carta Energia speciale dalla tua mano.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você pode ligar um card de Energia Especial da sua mão a 1 dos seus Pokémon de Megaevolução.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Spezial-Energiekarte von deiner Hand an 1 deiner Mega-Entwicklungs-Pokémon anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crabhammer",
				'fr-fr': "Pince-Masse",
				'es-es': "Martillazo",
				'it-it': "Martellata",
				'pt-br': "Martelo Caranguejo",
				'de-de': "Krabbhammer"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "By expelling water from the nozzle in the back of its claw, it can move at a speed of 60 knots.",
	},

	thirdParty: {
		cardmarket: 291531,
		tcgplayer: 121021
	}
}

export default card
