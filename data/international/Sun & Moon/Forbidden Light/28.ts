import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Aurorus",
		'fr-fr': "Dragmara",
		'es-es': "Aurorus",
		'it-it': "Aurorus",
		'pt-br': "Aurorus",
		'de-de': "Amagarga"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		699,
	],

	hp: 160,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Amaura",
		'fr-fr': "Amagara",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Frost Wall",
				'fr-fr': "Mur de Givre",
				'es-es': "Muro Gélido",
				'it-it': "Murogelo",
				'pt-br': "Muro Congelado",
				'de-de': "Frostwand"
			},
			effect: {
				'en-us': "During your opponent’s next turn, prevent all damage done to this Pokémon by attacks from Evolution Pokémon.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon Évolutifs.",
				'es-es': "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Pokémon Evolución.",
				'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Evoluzione.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, prevenirá todo o dano causado a este Pokémon por ataques de Pokémon de Evolução.",
				'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Entwicklungs-Pokémon zugefügt wird."
			},
			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Blizzard Burn",
				'fr-fr': "Blizzard Étourdissant",
				'es-es': "Quemadura de Hielo",
				'it-it': "Pirobora",
				'pt-br': "Queimadura de Neve",
				'de-de': "Blizzardbrand"
			},
			effect: {
				'en-us': "This Pokémon can’t attack during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede atacar durante tu próximo turno.",
				'it-it': "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				'pt-br': "Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Using its diamond-shaped crystals, it can instantly create a wall of ice to block an opponent's attack.",
	},

	thirdParty: {
		cardmarket: 355547,
		tcgplayer: 165679
	}
}

export default card
