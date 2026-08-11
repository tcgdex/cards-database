import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Slowbro",
		'fr-fr': "Flagadoss",
		'es-es': "Slowbro",
		'it-it': "Slowbro",
		'pt-br': "Slowbro",
		'de-de': "Lahmus"
	},

	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		80,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Amnesia",
				'fr-fr': "Amnésie",
				'es-es': "Amnesia",
				'it-it': "Amnesia",
				'pt-br': "Amnésia",
				'de-de': "Amnesie"
			},
			effect: {
				'en-us': "Choose 1 of your opponent’s Active Pokémon’s attacks. That Pokémon can’t use that attack during your opponent’s next turn.",
				'fr-fr': "Choisissez l’une des attaques du Pokémon Actif de votre adversaire. Ce Pokémon ne peut pas utiliser cette attaque pendant le prochain tour de votre adversaire.",
				'es-es': "Elige 1 de los ataques del Pokémon Activo de tu rival. Ese Pokémon no puede usar ese ataque durante el próximo turno de tu rival.",
				'it-it': "Scegli un attacco del Pokémon attivo del tuo avversario. Durante il prossimo turno del tuo avversario, quel Pokémon non potrà utilizzarlo.",
				'pt-br': "Escolha 1 dos ataques do Pokémon Ativo do seu oponente. Aquele Pokémon não poderá usar aquele ataque durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wähle 1 Attacke des Aktiven Pokémon deines Gegners. Jenes Pokémon kann jene Attacke während des nächsten Zuges deines Gegners nicht einsetzen."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Facade",
				'fr-fr': "Façade",
				'es-es': "Imagen",
				'it-it': "Facciata",
				'pt-br': "Fachada",
				'de-de': "Fassade"
			},
			effect: {
				'en-us': "If this Pokémon is Burned or Poisoned, this attack does 80 more damage.",
				'fr-fr': "Si ce Pokémon est Brûlé ou Empoisonné, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si este Pokémon está Envenenado o Quemado, este ataque hace 80 puntos de daño más.",
				'it-it': "Se questo Pokémon è bruciato o avvelenato, questo attacco infligge 80 danni in più.",
				'pt-br': "Se este Pokémon estiver Envenenado ou Queimado, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wenn dieses Pokémon verbrannt oder vergiftet ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It spaces out while gazing at the sea. With Shellder's poison flowing through its body, it becomes even spacier.",
	},

	thirdParty: {
		cardmarket: 297511,
		tcgplayer: 130955
	}
}

export default card
