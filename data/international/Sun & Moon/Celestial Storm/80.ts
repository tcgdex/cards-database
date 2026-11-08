import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Regirock",
		'fr-fr': "Regirock",
		'es-es': "Regirock",
		'it-it': "Regirock",
		'pt-br': "Regirock",
		'de-de': "Regirock"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		377,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Enhanced Stomp",
				'fr-fr': "Piétinement Amélioré",
				'es-es': "Pisotón Mejorado",
				'it-it': "Superpasso",
				'pt-br': "Pisão Acentuado",
				'de-de': "Spezial-Stampfer"
			},
			effect: {
				'en-us': "If this Pokémon has a Pokémon Tool card attached to it, this attack does 20 more damage.",
				'fr-fr': "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 20 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene 1 carta de Herramienta Pokémon unida a él, este ataque hace 20 puntos de daño más.",
				'it-it': "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 20 danni in più.",
				'pt-br': "Se este Pokémon tiver uma carta de Ferramenta Pokémon ligada a ele, este ataque causará 20 pontos de dano a mais.",
				'de-de': "Wenn an dieses Pokémon eine Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 20 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Hammer Arm",
				'fr-fr': "Marto-Poing",
				'es-es': "Machada",
				'it-it': "Martelpugno",
				'pt-br': "Braço de Martelo",
				'de-de': "Hammerarm"
			},
			effect: {
				'en-us': "Discard the top card of your opponent’s deck.",
				'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
				'es-es': "Descarta la primera carta de la baraja de tu rival.",
				'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
				'pt-br': "Descarte a primeira carta do baralho do seu oponente.",
				'de-de': "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "The same rocks that form its body have been found in ground layers around the world.",
	},

	thirdParty: {
		cardmarket: 361325,
		tcgplayer: 170902
	}
}

export default card
