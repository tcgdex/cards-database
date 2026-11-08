import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Meowth",
		'fr-fr': "Miaouss",
		'es-es': "Meowth",
		'it-it': "Meowth",
		'pt-br': "Meowth",
		'de-de': "Mauzi"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		52,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Stall",
				'fr-fr': "Frein",
				'es-es': "Rezagado",
				'it-it': "Rallentatore",
				'pt-br': "Adiar",
				'de-de': "Zeitspiel"
			},
			effect: {
				'en-us': "You can use this attack only if you go second, and only on your first turn. Discard an Energy attached to 1 of your opponent's Pokémon.",
				'fr-fr': "Vous ne pouvez utiliser cette attaque que si vous jouez en second et uniquement pendant votre premier tour. Défaussez une Énergie attachée à l'un des Pokémon de votre adversaire.",
				'es-es': "Puedes usar este ataque solo si sales segundo, y solo en tu primer turno. Descarta 1 Energía unida a 1 de los Pokémon de tu rival.",
				'it-it': "Puoi usare questo attacco solo se inizi per secondo e solo durante il tuo primo turno. Scarta un'Energia assegnata a uno dei Pokémon del tuo avversario.",
				'pt-br': "Você só pode usar este ataque se for o segundo a jogar e somente na sua primeira vez de jogar. Descarte uma Energia ligada a 1 dos Pokémon do seu oponente.",
				'de-de': "Du kannst mit dieser Attacke nur angreifen, wenn du als zweiter Spieler am Zug bist und nur während deines ersten Zuges. Lege 1 an ein gegnerisches Pokémon angelegte Energie auf den Ablagestapel deines Gegners."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'es-es': "Arañazo",
				'it-it': "Graffio",
				'pt-br': "Arranhão",
				'de-de': "Kratzer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Adores round objects. It wanders the streets on a nightly basis to look for dropped loose change.",
	},

	thirdParty: {
		cardmarket: 291648,
		tcgplayer: 121214
	}
}

export default card
