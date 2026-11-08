import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Empoleon",
		'fr-fr': "Pingoléon",
		'es-es': "Empoleon",
		'it-it': "Empoleon",
		'pt-br': "Empoleon",
		'de-de': "Impoleon"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		395,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Prinplup",
		'fr-fr': "Prinplouf",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Diving Draw",
				'fr-fr': "Plonge et Pioche",
				'es-es': "Robo Buceo",
				'it-it': "Pescafonda",
				'pt-br': "Saque Mergulho",
				'de-de': "Unterwasserzieher"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may discard a card from your hand. If you do, draw 2 cards.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte de votre main. Dans ce cas, piochez 2 cartes.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes descartar una carta de tu mano. Si lo haces, roba 2 cartas.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare una delle carte che hai in mano. Se lo fai, pesca due carte.",
				'pt-br': "Uma vez na sua vez de jogar (antes de atacar), você pode descartar um card da sua mão. Se fizer isso, compre 2 cards.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Karte von deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, ziehe 2 Karten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Attack Command",
				'fr-fr': "Ordre d'Assaut",
			},
			effect: {
				'en-us': "Does 10 damage times the number of Pokémon in play (both yours and your opponent's).",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de Pokémon en jeu (les vôtres et ceux de votre adversaire).",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "This extremely rare Pokémon is a different color than usual. It is very hard to find.",
	},

	thirdParty: {
		cardmarket: 280995,
		tcgplayer: 85203
	}
}

export default card
