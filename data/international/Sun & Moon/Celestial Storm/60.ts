import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Grumpig",
		'fr-fr': "Groret",
		'es-es': "Grumpig",
		'it-it': "Grumpig",
		'pt-br': "Grumpig",
		'de-de': "Groink"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		326,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Spoink",
		'fr-fr': "Spoink",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Mirror Step",
				'fr-fr': "Pas Dupliqué",
				'es-es': "Paso Espejo",
				'it-it': "Passo Riflesso",
				'pt-br': "Passo Espelhado",
				'de-de': "Spiegelschritt"
			},
			effect: {
				'en-us': "If 1 of your opponent’s Pokémon in play has the same name as 1 of your Pokémon in play, this attack does 70 more damage.",
				'fr-fr': "Si l’un des Pokémon en jeu de votre adversaire a le même nom que l’un de vos Pokémon en jeu, cette attaque inflige 70 dégâts supplémentaires.",
				'es-es': "Si 1 de los Pokémon en juego de tu rivaI tiene el mismo nombre que 1 de tus Pokémon en juego, este ataque hace 70 puntos de daño más.",
				'it-it': "Se uno dei Pokémon in gioco del tuo avversario ha lo stesso nome di uno dei tuoi Pokémon in gioco, questo attacco infligge 70 danni in più.",
				'pt-br': "Se 1 dos Pokémon do seu oponente em jogo tiver o mesmo nome que 1 dos seus Pokémon em jogo, este ataque causará 70 pontos de dano a mais.",
				'de-de': "Wenn 1 Pokémon deines Gegners im Spiel denselben Namen wie 1 deiner Pokémon im Spiel hat, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It uses black pearls to amplify its psychic power. It does an odd dance to gain control over foes.",
	},

	thirdParty: {
		cardmarket: 361305,
		tcgplayer: 170881
	}
}

export default card
