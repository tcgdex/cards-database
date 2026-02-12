import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Tangela",
		fr: "Saquedeneu",
		de: "Tangela",
		it: "Tangela"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		114,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Bind",
				fr: "Étreinte",
				de: "Klammergriff",
				it: "Legatutto"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon gelähmt.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Paralizzato."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Poisonpowder",
				fr: "Poudre Toxik",
				de: "Giftpuder",
				it: "Velenpolvere"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "das verteidigende Pokémon ist vergiftet.",
				it: "Il Pokémon Difensore è Avvelenato."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Son corps est recouvert de lianes similaires à des algues. Elles bougent quand il marche.",
		it: "Il suo corpo è avvolto interamente da larghi rampicanti simili ad alghe, che si agitano quando cammina. LIV 8 N.114"

	},

	thirdParty: {
		cardmarket: 273761,
		tcgplayer: 42411
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
