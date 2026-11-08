import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Boldore",
		'fr-fr': "Géolithe",
		'es-es': "Boldore",
		'it-it': "Boldore",
		'pt-br': "Boldore",
		'de-de': "Sedimantur"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Stage1",
	illustrator: "otumami",

	attacks: [{
		name: {
			'en-us': "Protect",
			'fr-fr': "Abri",
			'es-es': "Protección",
			'it-it': "Protezione",
			'pt-br': "Protect",
			'de-de': "Schutzschild"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		},

		cost: ["Fighting"]
	}, {
		name: {
			'en-us': "Boulder Crush",
			'fr-fr': "Rocher Écrasant",
			'es-es': "Alud de Rocas",
			'it-it': "Macignata",
			'pt-br': "Boulder Crush",
			'de-de': "Felsenquetscher"
		},

		damage: 60,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,

	evolveFrom: {
		'en-us': "Roggenrola",
		'fr-fr': "Nodulithe",
		'es-es': "Roggenrola",
		'it-it': "Roggenrola",
		'pt-br': "Roggenrola",
		'de-de': "Kiesling"
	},

	description: {
		'en-us': "It relies on sound in order to monitor what's in its vicinity. When angered, it will attack without ever changing the direction it's facing."
	},

	dexId: [525],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574135,
				tcgplayer: 246884
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574135,
				tcgplayer: 246884
			}
		},
	],
}

export default card
