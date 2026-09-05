import { Card } from '../../../interfaces'
import Set from '../POP Series 4'

const card: Card = {
	name: {
		en: "Mew",
		fr: "Mew",
		de: "Mew"
	},

	illustrator: "Nakaoka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [151],

	hp: 70,

	types: [
		"Psychic"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Reactive Barrier",
				fr: "Barrière réactive",
				de: "Reaktive Barriere"
			},
			effect: {
				en: "As long as Mew has any React Energy cards attached to it, prevent all effects, excluding damage, done to Mew by attacks from your opponent's Pokémon.",
				fr: "Tant que Mew possède des cartes Énergie réaction, prévenez tous les effets, dégâts exclus, infligés à Mew par des attaques de Pokémon de votre adversaire.",
				de: "Solange an Mew mindestens eine Reaktions-Energiekarte angelegt ist, verhindere alle Effekte, inklusive Schaden, die Mew durch Angriffe der Pokémon deines Gegners zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psyshock",
				fr: "Choc psy",
				de: "Psychoschock"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87401,
				cardmarket: 277469
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87401,
				cardmarket: 277469
			},
		},
	],

}

export default card
