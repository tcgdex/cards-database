import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Swellow",
		'fr-fr': "Hélédelle",
		'es-es': "Swellow",
		'it-it': "Swellow",
		'pt-br': "Swellow",
		'de-de': "Schwalboss"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		277,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Taillow",
		'fr-fr': "Nirondelle",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Agility",
				'fr-fr': "Hâte",
				'es-es': "Agilidad",
				'it-it': "Agilità",
				'pt-br': "Agilidade",
				'de-de': "Agilität"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent’s next turn.",
				'fr-fr': "Lancez une pièce. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				'pt-br': "Jogue 1 moeda. Se sair cara, prevenirá todos os efeitos de ataques, incluindo dano, causados a este Pokémon durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon zugefügt werden."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Swallow Dive",
				'fr-fr': "Plongeon d’Hirondelle",
				'es-es': "Buche en Picado",
				'it-it': "Tuffo Pennuto",
				'pt-br': "Mergulho de Andorinha",
				'de-de': "Schwalbensprung"
			},
			effect: {
				'en-us': "If this Pokémon used Agility during your last turn, this attack does 80 more damage.",
				'fr-fr': "Si ce Pokémon a utilisé Hâte pendant votre dernier tour, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si este Pokémon usó Agilidad durante tu último turno, este ataque hace 80 puntos de daño más.",
				'it-it': "Se questo Pokémon ha usato Agilità durante il tuo ultimo turno, questo attacco infligge 80 danni in più.",
				'pt-br': "Se este Pokémon usou Agilidade durante a sua última vez de jogar, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wenn dieses Pokémon während deines letzten Zuges Agilität eingesetzt hat, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "If its two tail feathers are standing at attention, it is proof of good health. It soars elegantly in the sky.",
	},

	thirdParty: {
		cardmarket: 297556,
		tcgplayer: 131022
	}
}

export default card
