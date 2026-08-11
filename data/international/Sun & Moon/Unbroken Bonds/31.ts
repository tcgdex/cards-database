import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Salazzle",
		'fr-fr': "Malamandre",
		'es-es': "Salazzle",
		'it-it': "Salazzle",
		'pt-br': "Salazzle",
		'de-de': "Amfira"
	},

	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		758,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Salandit",
		'fr-fr': "Tritox",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Roast Reveal",
				'fr-fr': "Rôtir",
				'es-es': "Revelación",
				'it-it': "Svelafuoco",
				'pt-br': "Revelação Assada",
				'de-de': "Bratblick"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may discard a Fire Energy card from your hand. If you do, draw 3 cards.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie Fire de votre main. Dans ce cas, piochez 3 cartes.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes descartar 1 carta de Energía Fire de tu mano. Si lo haces, roba 3 cartas.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare una carta Energia Fire che hai in mano. Se lo fai, pesca tre carte.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode descartar 1 carta de Energia Fire da sua mão. Se fizer isto, compre 3 cartas.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Fire-Energiekarte aus deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, ziehe 3 Karten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Combustion",
				'fr-fr': "Fournaise",
				'es-es': "Combustión",
				'it-it': "Fuoco Continuo",
				'pt-br': "Combustão",
				'de-de': "Glühen"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Salazzle lives deep in caves and forces the Salandit it has attracted with its pheromones to serve it.",
	},

	thirdParty: {
		cardmarket: 372323,
		tcgplayer: 189082
	}
}

export default card
