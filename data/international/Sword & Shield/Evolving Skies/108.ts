import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Shelgon",
		'fr-fr': "Drackhaus",
		'es-es': "Shelgon",
		'it-it': "Shelgon",
		'pt-br': "Shelgon",
		'de-de': "Draschel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],
	stage: "Stage1",
	illustrator: "tetsuya koizumi",

	attacks: [{
		name: {
			'en-us': "Hard Roll",
			'fr-fr': "Roulade Endurcie",
			'es-es': "Dureza Rodante",
			'it-it': "Rotocorazza",
			'pt-br': "Hard Roll",
			'de-de': "Hartes Einrollen"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'pt-br': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
		},

		damage: 50,
		cost: ["Fire", "Water"]
	}],

	retreat: 3,
	dexId: [372],

	evolveFrom: {
		'en-us': "Bagon",
		'fr-fr': "Draby",
		'es-es': "Bagon",
		'it-it': "Bagon",
		'pt-br': "Bagon",
		'de-de': "Kindwurm"
	},

	description: {
		'en-us': "Shelgon lives deep within caves. It stays shut up in its hard shell, dreaming of the day it will be able to fly."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574156,
				tcgplayer: 246908
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574156,
				tcgplayer: 246908
			}
		},
	],
}

export default card
