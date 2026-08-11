import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Cradily",
		'fr-fr': "Vacilys",
		'es-es': "Cradily",
		'it-it': "Cradily",
		'pt-br': "Cradily",
		'de-de': "Wielie"
	},

	illustrator: "otumami",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		346,
	],

	hp: 150,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Lileep",
		'fr-fr': "Lilia",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Swaying Strangle",
				'fr-fr': "Balancement Enserrant",
				'es-es': "Estrangulación Oscilante",
				'it-it': "Stretta Ondulante",
				'pt-br': "Sufocamento Oscilante",
				'de-de': "Wiegender Würger"
			},
			effect: {
				'en-us': "Your opponent’s Pokémon that are affected by Special Conditions can’t retreat.",
				'fr-fr': "Les Pokémon de votre adversaire qui sont affectés pas un État Spécial ne peuvent pas battre en retraite.",
				'es-es': "Los Pokémon de tu rival que estén afectados por Condiciones Especiales no pueden retirarse.",
				'it-it': "I Pokémon del tuo avversario influenzati da condizioni speciali non possono ritirarsi.",
				'pt-br': "Os Pokémon do seu oponente que estiverem afetados por Condições Especiais não poderão recuar.",
				'de-de': "Die Pokémon deines Gegners, die von Speziellen Zuständen betroffen sind, können sich nicht zurückziehen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Tentacles",
				'fr-fr': "Tentacules Empoisonnés",
				'es-es': "Tentáculos Venenosos",
				'it-it': "Tentacoli Velenosi",
				'pt-br': "Tentáculos Venenosos",
				'de-de': "Giftige Tentakel"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Normally, it lived on shallow sea shoals. When the tide went out, this Pokémon came up on land to search for prey.",
	},

	thirdParty: {
		cardmarket: 407709,
		tcgplayer: 201160
	}
}

export default card
