import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [51],

	name: {
		'en-us': "Dugtrio",
		'fr-fr': "Triopikeur",
		'es-es': "Dugtrio",
		'it-it': "Dugtrio",
		'pt-br': "Dugtrio",
		'de-de': "Digdri"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Diglett",
		'fr-fr': "Taupiqueur",
		'es-es': "Diglett",
		'it-it': "Diglett",
		'pt-br': "Diglett",
		'de-de': "Digda"
	},

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Dig",
				'fr-fr': "Tunnel",
				'es-es': "Excavar",
				'it-it': "Fossa",
				'pt-br': "Cavar",
				'de-de': "Schaufler"
			},
			effect: {
				'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
				'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
				'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
				'pt-br': "Jogue 1 moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
				'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Mud Bomb",
				'fr-fr': "Boue-Bombe",
				'es-es': "Bomba Fango",
				'it-it': "Pantanobomba",
				'pt-br': "Bomba de Lama",
				'de-de': "Schlammbombe"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "A team of Diglett triplets. It triggers huge earthquakes by burrowing 60 miles underground."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483304,
				tcgplayer: 219473
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483304,
				tcgplayer: 219473
			}
		},
	],
}

export default card
