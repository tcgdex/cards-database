import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [763],
	set: Set,

	name: {
		'fr-fr': "Sucreine",
		'en-us': "Tsareena",
		'es-es': "Tsareena",
		'it-it': "Tsareena",
		'pt-br': "Tsareena",
		'de-de': "Fruyal"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Candine",
		'en-us': "Steenee",
		'es-es': "Steenee",
		'it-it': "Steenee",
		'pt-br': "Steenee",
		'de-de': "Frubaila"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Talon Royal",
			'en-us': "Queenly Heel",
			'es-es': "Talón de Reina",
			'it-it': "Tallone della Regina",
			'pt-br': "Salto Régio",
			'de-de': "Majestätische Ferse"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, aucun Pokémon ne peut être joué de la main de votre adversaire sur le Pokémon Défenseur pour le faire évoluer.",
			'en-us': "During your opponent's next turn, Pokémon can't be played from your opponent's hand to evolve the Defending Pokémon.",
			'es-es': "Durante el próximo turno de tu rival, no se pueden jugar Pokémon de la mano de tu rival para hacer evolucionar al Pokémon Defensor.",
			'it-it': "Durante il prossimo turno del tuo avversario, nessun Pokémon può essere giocato dalla mano del tuo avversario per far evolvere il Pokémon difensore.",
			'pt-br': "Durante o próximo turno do seu oponente, Pokémon não poderão ser jogados da mão do seu oponente para evoluir o Pokémon Defensor.",
			'de-de': "Während des nächsten Zuges deines Gegners können keine Pokémon aus der Hand deines Gegners gespielt werden, um das Verteidigende Pokémon zu entwickeln."
		},

		damage: 60
	}, {
		cost: ["Grass", "Grass"],

		name: {
			'fr-fr': "Coup Tournant",
			'en-us': "Spinning Kick",
			'es-es': "Patada Giratoria",
			'it-it': "Calcio Rotante",
			'pt-br': "Chute Giratório",
			'de-de': "Wirbelkick"
		},

		effect: {
			'fr-fr': "Ce Pokémon s'inflige aussi 20 dégâts.",
			'en-us': "This Pokémon also does 20 damage to itself.",
			'es-es': "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 20 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon is proud and aggressive. However, it is said that a Tsareena will instantly become calm if someone touches the crown on its calyx.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725098,
				tcgplayer: 509751,
				cardtrader: 255578
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725098,
				tcgplayer: 509751,
				cardtrader: 255578
			}
		},
	],

	illustrator: "Atsushi Furusawa",

	
}

export default card
