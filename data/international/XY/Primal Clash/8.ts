import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Sceptile",
		'fr-fr': "Jungko",
		'es-es': "Sceptile",
		'it-it': "Sceptile",
		'pt-br': "Sceptile",
		'de-de': "Gewaldro"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		254,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Grovyle",
		'fr-fr': "Massko",
		'es-es': "Grovyle",
		'it-it': "Grovyle",
		'pt-br': "Grovyle",
		'de-de': "Reptain"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Nurture and Heal",
				'fr-fr': "Nourri-Guéri",
				'es-es': "Nutrir y Sanar",
				'it-it': "Nutrire e Curare",
				'pt-br': "Nutrir e Curar",
				'de-de': "Pflegen und Heilen"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may attach a Grass Energy card from your hand to 1 of your Pokémon. If you do, heal 30 damage from that Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Grass de votre main à l'un de vos Pokémon. Dans ce cas, soignez 30 dégâts au Pokémon choisi.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Grass de tu mano a 1 de tus Pokémon. Si lo haces, cura 30 puntos de daño a ese Pokémon.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare una carta Energia Grass che hai in mano a uno dei tuoi Pokémon. Se lo fai, cura quel Pokémon da 30 danni.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você poderá ligar um card de Energia Grass da sua mão a 1 dos seus Pokémon. Se fizer isso, cure 30 de danos deste Pokémon.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Grass-Energiekarte von deiner Hand an 1 deiner Pokémon anlegen. Wenn du das machst, heile 30 Schadenspunkte bei diesem Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Jungle Edge",
				'fr-fr': "Dague Végétale",
				'es-es': "Filo Selva",
				'it-it': "Giunglama",
				'pt-br': "Borda da Floresta",
				'de-de': "Dschungelschneide"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It agilely leaps about the jungle and uses the sharp leaves on its arms to strike its prey.",
	},

	thirdParty: {
		cardmarket: 273539,
		tcgplayer: 95892
	}
}

export default card
