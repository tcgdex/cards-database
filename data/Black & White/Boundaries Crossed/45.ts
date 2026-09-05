import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Jellicent",
		fr: "Moyade",
		es: "Jellicent",
		it: "Jellicent",
		pt: "Jellicent",
		de: "Apoquallyp"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		593,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Frillish",
		fr: "Viskuse",
		de: "Quabbel"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Stickiness",
				fr: "Viscosité",
				es: "Pegajosidad",
				it: "Colla",
				pt: "Colante",
				de: "Superkleber"
			},
			effect: {
				en: "The Retreat Cost of each of your opponent’s Pokémon in play is Colorless more.",
				fr: "Le coût de Retraite de chacun des Pokémon de votre adversaire est augmenté de Colorless.",
				es: "El Coste de Retirada de cada uno de los Pokémon en juego de tu rival es de Colorless más.",
				it: "Il costo di ritirata di ciascun Pokémon in gioco del tuo avversario aumenta di Colorless.",
				pt: "O Custo para Recuar de cada um dos Pokémon do seu oponente em jogo será de Colorless a mais.",
				de: "Die Rückzugskosten aller Pokémon deines Gegners im Spiel erhöhen sich um {C}."
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
				en: "Eerie Light",
				fr: "Lumière Étrange",
				de: "Gespenstisches Licht"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt verwirrt."
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

	retreat: 3,

	description: {
		en: "Its body is mostly seawater. It's said there's a castle of ships Jellicent have sunk on the seafloor.",
		de: "Es heißt, am Meeresboden gebe es einen Palast aus Schiffen, die es versenkt hat. Es besteht fast nur aus Meerwasser."
	},

	thirdParty: {
		cardmarket: 280632,
		tcgplayer: 86307
	}
}

export default card
