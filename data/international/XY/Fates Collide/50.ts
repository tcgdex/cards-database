import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Carbink",
		'fr-fr': "Strassie",
		'es-es': "Carbink",
		'it-it': "Carbink",
		'pt-br': "Carbink",
		'de-de': "Rocara"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		703,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Safeguard",
				'fr-fr': "Rune Protect",
				'es-es': "Velo Sagrado",
				'it-it': "Salvaguardia",
				'pt-br': "Salvaguarda",
				'de-de': "Bodyguard"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent's Pokémon-EX.",
				'fr-fr': "Évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon-EX de votre adversaire.",
				'es-es': "Evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon por los Pokémon-EX de tu rival.",
				'it-it': "Previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon dai Pokémon-EX del tuo avversario.",
				'pt-br': "Previne todos os efeitos de ataques, inclusive danos, causados neste Pokémon pelo Pokémon-EX do seu oponente.",
				'de-de': "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die diesem Pokémon durch gegnerische Pokémon-EX zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Power Gem",
				'fr-fr': "Rayon Gemme",
				'es-es': "Joya de Luz",
				'it-it': "Gemmoforza",
				'pt-br': "Gema Poderosa",
				'de-de': "Juwelenkraft"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has slept underground for hundreds of millions of years since its birth. It's occasionally found during the excavation of caves.",
	},

	thirdParty: {
		cardmarket: 290538,
		tcgplayer: 117810
	}
}

export default card
