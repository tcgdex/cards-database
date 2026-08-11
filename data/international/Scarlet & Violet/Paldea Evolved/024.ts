import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [947],
	set: Set,

	name: {
		'fr-fr': "Virevorreur",
		'en-us': "Brambleghast",
		'es-es': "Brambleghast",
		'it-it': "Brambleghast",
		'pt-br': "Brambleghast",
		'de-de': "Horrerba"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Virovent",
		'en-us': "Bramblin",
		'es-es': "Bramblin",
		'it-it': "Bramblin",
		'pt-br': "Bramblin",
		'de-de': "Weherba"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Absorption",
			'en-us': "Absorb Life",
			'es-es': "Absorber Vida",
			'it-it': "Spolpavita",
			'pt-br': "Drenagem de Vida",
			'de-de': "Lebensverkoster"
		},

		effect: {
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'en-us': "Heal 30 damage from this Pokémon.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Cage de Bois Mort",
			'en-us': "Dead Wood Detention",
			'es-es': "Prisión Madera Seca",
			'it-it': "Prigione di Sterpi",
			'pt-br': "Prisão de Madeira Morta",
			'de-de': "Trockenholzgitter"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques que le Pokémon Défenseur utilise coûtent {C}{C} de plus.",
			'en-us': "During your opponent's next turn, attacks that the Defending Pokémon uses cost {C}{C} more.",
			'es-es': "Durante el próximo turno de tu rival, los ataques que use el Pokémon Defensor cuestan {C}{C} más.",
			'it-it': "Durante il prossimo turno del tuo avversario, il costo degli attacchi che usa il Pokémon difensore aumenta di {C}{C}.",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor custarão {C}{C} a mais.",
			'de-de': "Während des nächsten Zuges deines Gegners erhöhen sich die Kosten der Attacken, die das Verteidigende Pokémon einsetzt, um {C}{C}."
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715497,
				tcgplayer: 497435,
				cardtrader: 248321
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715497,
				tcgplayer: 497435,
				cardtrader: 248321
			}
		},
	],

	illustrator: "KEIICHIRO ITO",

	description: {
		'en-us': "It will open the branches of its head to envelop its prey. Once it absorbs all the life energy it needs, it expels the prey and discards it.",
	},
}

export default card
