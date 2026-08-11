import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco",
		'es-es': "Dratini",
		'it-it': "Dratini",
		'pt-br': "Dratini",
		'de-de': "Dratini"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		147,
	],

	hp: 70,

	types: [
		"Dragon",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Defensive Scales",
				'fr-fr': "Écailles Défensives",
				'es-es': "Escamas Defensivas",
				'it-it': "Difesa Squamata",
				'pt-br': "Escamas de Defesa",
				'de-de': "Schuppenschutz"
			},
			effect: {
				'en-us': "Prevent all effects of your opponent’s attacks, except damage, done to this Pokémon.",
				'fr-fr': "Évitez tous les effets des attaques de votre adversaire, à l’exception des dégâts, infligés à ce Pokémon.",
				'es-es': "Evita todos los efectos de los ataques de tu rival, excepto el daño, infligidos a este Pokémon.",
				'it-it': "Previeni tutti gli effetti degli attacchi del tuo avversario, esclusi i danni, inflitti a questo Pokémon.",
				'pt-br': "Previne todos os efeitos de ataques do seu oponente, exceto dano, causados a este Pokémon.",
				'de-de': "Verhindere alle Effekte von Attacken deines Gegners, außer Schaden, die diesem Pokémon zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Rain Splash",
				'fr-fr': "Pluie Éclaboussante",
				'es-es': "Golpe de Lluvia",
				'it-it': "Spruzzapioggia",
				'pt-br': "Chuva Borrifante",
				'de-de': "Regenplatscher"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It's still weak, so it lurks on the floor of bodies of water, eating whatever food sinks down and living a quiet life.",
	},

	thirdParty: {
		cardmarket: 369044,
		tcgplayer: 183904
	}
}

export default card
