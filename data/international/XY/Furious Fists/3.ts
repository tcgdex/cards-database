import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Victreebel",
		'fr-fr': "Empiflor",
		'es-es': "Victreebel",
		'it-it': "Victreebel",
		'pt-br': "Victreebel",
		'de-de': "Sarzenia"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		71,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Weepinbell",
		'fr-fr': "Boustiflor",
		'es-es': "Weepinbell",
		'it-it': "Weepinbell",
		'pt-br': "Weepinbell",
		'de-de': "Ultrigaria"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Wafting Scent",
				'fr-fr': "Senteur Flottante",
				'es-es': "Aroma Flotante",
				'it-it': "Allettaroma",
				'pt-br': "Aroma Flutuante",
				'de-de': "Wabernder Geruch"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may discard a Grass Energy attached to this Pokémon. If you do, your opponent's Active Pokémon is now Confused and Poisoned.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une Énergie Grass attachée à ce Pokémon. Dans ce cas, le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes descartar 1 Energía Grass unida a este Pokémon. Si lo haces, el Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare un'Energia Grass assegnata a questo Pokémon. Se lo fai, il Pokémon attivo del tuo avversario viene confuso e paralizzato.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você poderá descartar uma Energia Grass ligada a este Pokémon. Se fizer isso, o Pokémon Ativo do seu oponente ficará Confuso e Envenenado.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 an dieses Pokémon angelegte Grass-Energie auf deinen Ablagestapel legen. Wenn du das machst, ist das Aktive Pokémon deines Gegners jetzt verwirrt und vergiftet."
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
				'en-us': "Spiral Drain",
				'fr-fr': "Spirale Épuisante",
				'es-es': "Drenaje Espiral",
				'it-it': "Assorbimento Spirale",
				'pt-br': "Dreno Espiral",
				'de-de': "Spiralsauger"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 de danos deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 60,

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
		'en-us': "Said to live in huge colonies deep in jungles, although no one has ever returned from there.",
	},

	thirdParty: {
		cardmarket: 281667,
		tcgplayer: 92172
	}
}

export default card
