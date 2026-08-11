import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Swampert",
		'fr-fr': "Laggron",
		'es-es': "Swampert",
		'it-it': "Swampert",
		'pt-br': "Swampert",
		'de-de': "Sumpex"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		260,
	],

	hp: 160,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Marshtomp",
		'fr-fr': "Flobio",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Power Draw",
				'fr-fr': "Puissance de Pioche",
				'es-es': "Robo Poderoso",
				'it-it': "Pesca Vigorosa",
				'pt-br': "Compra Poderosa",
				'de-de': "Kraftzug"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may discard a card from your hand. If you do, draw 3 cards.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte de votre main. Dans ce cas, piochez 3 cartes.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes descartar 1 carta de tu mano. Si lo haces, roba 3 cartas.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare una delle carte che hai in mano. Se lo fai, pesca tre carte.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode descartar 1 carta da sua mão. Se fizer isto, compre 3 cartas.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Karte aus deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, ziehe 3 Karten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hydro Pump",
				'fr-fr': "Hydrocanon",
				'es-es': "Hidrobomba",
				'it-it': "Idropompa",
				'pt-br': "Jato d’Água",
				'de-de': "Hydropumpe"
			},
			effect: {
				'en-us': "This attack does 20 more damage times the amount of Water Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Energía Water unida a este Pokémon.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais vezes a quantidade de Energia Water ligada a este Pokémon.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an dieses Pokémon angelegten Water-Energien zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It can swim while towing a large ship. It bashes down foes with a swing of its thick arms.",
	},

	thirdParty: {
		cardmarket: 361282,
		tcgplayer: 170852
	}
}

export default card
