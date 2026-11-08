import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Serperior",
		'fr-fr': "Majaspic",
		'es-es': "Serperior",
		'it-it': "Serperior",
		'pt-br': "Serperior",
		'de-de': "Serpiroyal"
	},

	illustrator: "You Iribi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		497,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Servine",
		'fr-fr': "Lianaja",
		'es-es': "Servine",
		'it-it': "Servine",
		'pt-br': "Servine",
		'de-de': "Efoserp"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Coil",
				'fr-fr': "Enroulement",
				'es-es': "Enrosque",
				'it-it': "Arrotola",
				'pt-br': "Enroscar",
				'de-de': "Einrollen"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon's attacks do 60 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, les attaques de ce Pokémon infligent 60 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante tu próximo turno, los ataques de este Pokémon hacen 60 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il tuo prossimo turno, gli attacchi di questo Pokémon infliggono 60 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante sua próxima vez de jogar, os ataques deste Pokémon causarão 60 de danos adicionais ao Pokémon Ativo do seu oponente (antes da aplicação de Fraqueza e Resistência).",
				'de-de': "Während deines nächsten Zuges fügen die Angriffe dieses Pokémon dem Aktiven Pokémon deines Gegners 60 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 40,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Slashing Strike",
				'fr-fr': "Coup Déchirant",
				'es-es': "Golpe Cuchillazo",
				'it-it': "Lacerattacco",
				'pt-br': "Ataque Cortante",
				'de-de': "Schlitzender Schlag"
			},
			effect: {
				'en-us': "This Pokémon can't use Slashing Strike during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Coup Déchirant pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede usar Golpe Cuchillazo durante tu próximo turno.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Lacerattacco.",
				'pt-br': "Este Pokémon não poderá usar o Ataque Cortante na sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann Schlitzender Schlag während deines nächsten Zuges nicht einsetzen."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It can stop its opponents' movements with just a glare. It takes in solar energy and boosts it internally.",
	},

	thirdParty: {
		cardmarket: 289833,
		tcgplayer: 117770
	}
}

export default card
