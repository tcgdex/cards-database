import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Barbaracle",
		'fr-fr': "Golgopathe",
		'es-es': "Barbaracle",
		'it-it': "Barbaracle",
		'pt-br': "Barbaracle",
		'de-de': "Thanathora"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		689,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Binacle",
		'fr-fr': "Opermine",
		'es-es': "Binacle",
		'it-it': "Binacle",
		'pt-br': "Binacle",
		'de-de': "Bithora"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Hand Block",
				'fr-fr': "Blocage Manuel",
				'es-es': "Bloqueo de Mano",
				'it-it': "Bloccamano",
				'pt-br': "Bloqueio da Mão",
				'de-de': "Handblockade"
			},
			effect: {
				'en-us': "If you have a Stadium card in play, your opponent can't attach any Special Energy cards from his or her hand to his or her Pokémon.",
				'fr-fr': "Si vous avez une carte Stade en jeu, votre adversaire ne peut pas attacher de carte Énergie spéciale de sa main à ses Pokémon.",
				'es-es': "Si tienes alguna carta de Estadio en juego, tu rival no puede unir ninguna carta de Energía Especial de su mano a sus Pokémon.",
				'it-it': "Se hai in gioco una carta Stadio, il tuo avversario non può assegnare carte Energia speciale dalla sua mano ai suoi Pokémon.",
				'pt-br': "Se você tiver um card de Estádio em jogo, o seu oponente não poderá ligar nenhum card de Energia Especial da própria mão a Pokémon dele(a).",
				'de-de': "Wenn du 1 Stadionkarte im Spiel hast, kann dein Gegner keine Spezial-Energiekarten von seiner Hand an seine Pokémon anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Claw Slash",
				'fr-fr': "Tranch'Griffe",
				'es-es': "Cuchillada Garra",
				'it-it': "Lacerartiglio",
				'pt-br': "Golpe de Garra",
				'de-de': "Klauenschlitzer"
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

	retreat: 3,

	description: {
		'en-us': "Barbaracle's legs and hands have minds of their own, and they will move independently. But they usually follow the head's orders.",
	},

	thirdParty: {
		cardmarket: 289849,
		tcgplayer: 117785
	}
}

export default card
