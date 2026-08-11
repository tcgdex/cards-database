import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Ludicolo",
		'fr-fr': "Ludicolo",
		'es-es': "Ludicolo",
		'it-it': "Ludicolo",
		'pt-br': "Ludicolo",
		'de-de': "Kappalores"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		272,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Lombre",
		'fr-fr': "Lombre",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Swing Dance",
				'fr-fr': "Danse Qui Balance",
				'es-es': "Baila el Swing",
				'it-it': "Roteodanza",
				'pt-br': "Dançar no Ritmo",
				'de-de': "Schwungvoller Tanz"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may draw a card.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher une carte.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes robar 1 carta.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi pescare una carta.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode comprar 1 carta.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Karte ziehen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Circular Steps",
				'fr-fr': "Pas Circulaires",
				'es-es': "Pasos Circulares",
				'it-it': "Passi Circolari",
				'pt-br': "Passos Circulares",
				'de-de': "Umkreisende Tanzschritte"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each other Pokémon in play (both yours and your opponent’s).",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chacun des autres Pokémon en jeu (les vôtres et ceux de votre adversaire).",
				'es-es': "Este ataque hace 10 puntos de daño más por cada uno de los otros Pokémon en juego (tanto tuyos como de tu rival).",
				'it-it': "Questo attacco infligge 10 danni in più per ogni altro Pokémon in gioco, sia tuo che del tuo avversario.",
				'pt-br': "Este ataque causa 10 pontos de dano a mais para cada um dos outros Pokémon em jogo (seus e do seu oponente).",
				'de-de': "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der anderen Pokémon im Spiel (deiner und der deines Gegners) zu."
			},
			damage: "70+",

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
		'en-us': "The rhythm of bright, festive music activates Ludicolo's cells, making it more powerful.",
	},

	thirdParty: {
		cardmarket: 361285,
		tcgplayer: 170855
	}
}

export default card
