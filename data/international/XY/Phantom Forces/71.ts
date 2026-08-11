import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Diancie",
		'fr-fr': "Diancie",
		'es-es': "Diancie",
		'it-it': "Diancie",
		'pt-br': "Diancie",
		'de-de': "Diancie"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		719,
	],

	hp: 90,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Sparkle",
				'fr-fr': "Éclat",
				'es-es': "Brillo",
				'it-it': "Scintillio",
				'pt-br': "Centelha",
				'de-de': "Glitzern"
			},
			effect: {
				'en-us': "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c'est pile, son attaque ne fait rien.",
				'es-es': "Si el Pokémon Defensor intenta atacar durante el próximo turno de tu rival, este lanza 1 moneda. Si sale cruz, ese ataque no hace nada.",
				'it-it': "Se durante il prossimo turno del tuo avversario il Pokémon difensore prova ad attaccare, il tuo avversario lancia una moneta. Se esce croce, quell'attacco non ha effetto.",
				'pt-br': "Se o Pokémon Defensor tentar atacar durante a próxima vez de jogar do seu oponente, seu oponente jogará uma moeda. Se sair coroa, o ataque não fará nada.",
				'de-de': "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Diamond Storm",
				'fr-fr': "Orage Adamantin",
				'es-es': "Tormenta de Diamantes",
				'it-it': "Diamantempesta",
				'pt-br': "Tempestade Diamante",
				'de-de': "Diamantsturm"
			},
			effect: {
				'en-us': "Heal 30 damage from each of your Fairy Pokémon.",
				'fr-fr': "Soignez 30 dégâts à chacun de vos Pokémon Fairy.",
				'es-es': "Cura 30 puntos de daño a cada uno de tus Pokémon Fairy.",
				'it-it': "Cura ciascuno dei tuoi Pokémon Fairy da 30 danni.",
				'pt-br': "Cura 30 de danos de cada um dos seus Pokémon Fairy.",
				'de-de': "Heile 30 Schadenspunkte bei jedem deiner Fairy-Pokémon."
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
		'en-us': "A sudden transformation of Carbink, its pink, glimmering body is said to be the loveliest sight in the whole world.",
	},

	thirdParty: {
		cardmarket: 281877,
		tcgplayer: 94639
	}
}

export default card
