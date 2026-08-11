import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Vibrava",
		'fr-fr': "Vibraninf",
		'es-es': "Vibrava",
		'it-it': "Vibrava",
		'pt-br': "Vibrava",
		'de-de': "Vibrava"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		329,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Trapinch",
		'fr-fr': "Kraknoix",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Obnoxious Whirring",
				'fr-fr': "Odieux Bourdonnement",
				'es-es': "Zumbido Fastidioso",
				'it-it': "Ronzio Assillante",
				'pt-br': "Zumbido Insuportável",
				'de-de': "Lästiges Schwirren"
			},
			effect: {
				'en-us': "Whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to this Pokémon.",
				'fr-fr': "Chaque fois que votre adversaire joue une carte Supporter de sa main, évitez tous les effets de cette carte sur ce Pokémon.",
				'es-es': "Cada vez que tu rival juegue 1 carta de Partidario de su mano, evita todos los efectos de esa carta infligidos a este Pokémon.",
				'it-it': "Ogni volta che il tuo avversario gioca una carta Aiuto che ha in mano, previeni tutti gli effetti di quella carta su questo Pokémon.",
				'pt-br': "Sempre que seu oponente jogar 1 carta de Apoiador da própria mão, prevenirá todos os efeitos daquela carta causados a este Pokémon.",
				'de-de': "Verhindere jedes Mal, wenn dein Gegner eine Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die diesem Pokémon zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Flap",
				'fr-fr': "Battement",
				'es-es': "Aleteo",
				'it-it': "Alabattito",
				'pt-br': "Asa",
				'de-de': "Flattern"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It vibrates its wings to generate ultrasonic waves, causing its prey to faint. Then it buries the prey alive in the sand to preserve it.",
	},

	thirdParty: {
		cardmarket: 408194,
		tcgplayer: 201138
	}
}

export default card
