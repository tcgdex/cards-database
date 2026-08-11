import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Carbink",
		'fr-fr': "Strassie",
		'es-es': "Carbink",
		'it-it': "Carbink",
		'pt-br': "Carbink",
		'de-de': "Rocara"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		703,
	],

	hp: 90,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wonder Ray",
				'fr-fr': "Rayon Miracle",
				'es-es': "Rayo Prodigioso",
				'it-it': "Raggio Meraviglia",
				'pt-br': "Raio Encantado",
				'de-de': "Wunderstrahl"
			},
			effect: {
				'en-us': "During your opponent’s next turn, prevent all effects of attacks, including damage, done to this Pokémon by any Pokémon that has an Ability.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon par des Pokémon ayant un talent.",
				'es-es': "Durante el próximo turno de tu rival, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon por cualquier Pokémon que tenga una habilidad.",
				'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon da qualsiasi Pokémon che abbia un’abilità.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, prevenirá todos os efeitos de ataques, incluindo dano, causados a este Pokémon por qualquer Pokémon que tiver uma Habilidade.",
				'de-de': "Verhindere alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon während des nächsten Zuges deines Gegners durch Pokémon, die eine Fähigkeit haben, zugefügt werden."
			},
			damage: 30,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
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

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Although this Pokémon is not especially rare, its glittering, jewel-draped body draws attention from people.",
	},

	thirdParty: {
		cardmarket: 365754,
		tcgplayer: 178962
	}
}

export default card
