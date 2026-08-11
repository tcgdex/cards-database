import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Gorebyss",
		'fr-fr': "Rosabyss",
		'es-es': "Gorebyss",
		'it-it': "Gorebyss",
		'pt-br': "Gorebyss",
		'de-de': "Saganabyss"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		368,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Clamperl",
		'fr-fr': "Coquiperl",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Deflecting Splash",
				'fr-fr': "Déviation Éclaboussante",
				'es-es': "Salpicadura Bloqueo",
				'it-it': "Frangispruzzo",
				'pt-br': "Borrifada Desviadora",
				'de-de': "Ablenkender Platscher"
			},
			effect: {
				'en-us': "During your opponent’s next turn, prevent all damage done to this Pokémon by attacks from Evolution Pokémon.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon Évolutifs.",
				'es-es': "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Pokémon Evolución.",
				'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Evoluzione.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, prevenirá todo o dano causado a este Pokémon por ataques de Pokémon de Evolução.",
				'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Entwicklungs-Pokémon zugefügt wird."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Its swimming form is exquisitely elegant. With its thin mouth, it feeds on seaweed that grows between rocks.",
	},

	thirdParty: {
		cardmarket: 361290,
		tcgplayer: 170860
	}
}

export default card
