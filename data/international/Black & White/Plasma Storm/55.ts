import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Crobat",
		'fr-fr': "Nostenfer",
		'es-es': "Crobat",
		'it-it': "Crobat",
		'pt-br': "Crobat",
		'de-de': "Iksbat"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		169,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Night Sight",
				'fr-fr': "Vision de Nuit",
				'es-es': "Vista Nocturna",
				'it-it': "Vista Notturna",
				'pt-br': "Visão Noturna",
				'de-de': "Nachtblick"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may draw a card.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher une carte.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes robar una carta.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi pescare una carta.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você pode comprar um card.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Karte ziehen."
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
				'en-us': "Ultra-Toxic Fang",
				'fr-fr': "Croc Ultratoxik",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned. Put 4 damage counters instead of 1 on that Pokémon between turns.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné. Placez 4 marqueurs de dégâts au lieu d'un sur le Pokémon ciblé entre chaque tour.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
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
		'en-us': "Having four wings allows it to fly more quickly and quietly so it can sneak up on prey without its noticing.",
	},

	thirdParty: {
		cardmarket: 280795,
		tcgplayer: 84491
	}
}

export default card
