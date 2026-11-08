import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Gengar",
		'fr-fr': "Ectoplasma",
		'es-es': "Gengar",
		'it-it': "Gengar",
		'pt-br': "Gengar",
		'de-de': "Gengar"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		94,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Gnawing Curse",
				'fr-fr': "Malédiction Rongeante",
				'es-es': "Maldición Persistente",
				'it-it': "Maledizione Assillante",
				'pt-br': "Maldição Corrosiva",
				'de-de': "Quälender Fluch"
			},
			effect: {
				'en-us': "Whenever your opponent attaches an Energy card from their hand to 1 of their Pokémon, put 2 damage counters on that Pokémon.",
				'fr-fr': "Lorsque votre adversaire attache une carte Énergie de sa main à l’un de ses Pokémon, placez 2 marqueurs de dégâts sur ce Pokémon.",
				'es-es': "Cada vez que tu rival una 1 carta de Energía de su mano a 1 de sus Pokémon, pon 2 contadores de daño en ese Pokémon.",
				'it-it': "Ogni volta che il tuo avversario assegna una carta Energia dalla sua mano a uno dei suoi Pokémon, metti due segnalini danno su quel Pokémon.",
				'pt-br': "Sempre que seu oponente ligar 1 carta de Energia da própria mão a 1 dos próprios Pokémon, coloque 2 contadores de dano naquele Pokémon.",
				'de-de': "Lege jedes Mal, wenn dein Gegner 1 Energiekarte aus seiner Hand an 1 seiner Pokémon anlegt, 2 Schadensmarken auf jenes Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fade to Black",
				'fr-fr': "Fondu au Noir",
				'es-es': "Ennegrecer",
				'it-it': "Svanire nel Buio",
				'pt-br': "Breu",
				'de-de': "Schwarz vor Augen"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Should you feel yourself attacked by a sudden chill, it is evidence of an approaching Gengar. There is no escaping it. Give up.",
	},

	thirdParty: {
		cardmarket: 311888,
		tcgplayer: 149061
	}
}

export default card
