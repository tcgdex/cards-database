import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [248],
	set: Set,

	name: {
		'en-us': "Tyranitar ex",
		'fr-fr': "Tyranocif-ex",
		'es-es': "Tyranitar ex",
		'pt-br': "Tyranitar ex",
		'it-it': "Tyranitar-ex",
		'de-de': "Despotar-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 340,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect",
		'es-es': "Pupitar",
		'pt-br': "Pupitar",
		'it-it': "Pupitar",
		'de-de': "Pupitar"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Grind",
			'fr-fr': "Écrase",
			'es-es': "Moler",
			'pt-br': "Moer",
			'it-it': "Spremuta",
			'de-de': "Zermalmer"
		},

		effect: {
			'en-us': "This attack does 50 damage for each Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 50 dégâts pour chaque Énergie attachée à ce Pokémon.",
			'es-es': "Este ataque hace 50 puntos de daño por cada Energía unida a este Pokémon.",
			'pt-br': "Este ataque causa 50 pontos de dano para cada Energia ligada a este Pokémon.",
			'it-it': "Questo attacco infligge 50 danni per ogni Energia assegnata a questo Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Energie 50 Schadenspunkte zu."
		},

		damage: "50×"
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Tyrannical Crush",
			'fr-fr': "Écrasement Tyrannique",
			'es-es': "Destrucción Tiránica",
			'pt-br': "Esmagamento Tirânico",
			'it-it': "Distruzione Tirannica",
			'de-de': "Despotischer Zermalmer"
		},

		effect: {
			'en-us': "Discard a random card from your opponent's hand.",
			'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire.",
			'es-es': "Descarta 1 carta aleatoria de la mano de tu rival.",
			'pt-br': "Descarte uma carta aleatória da mão do seu oponente.",
			'it-it': "Scarta una carta a caso dalla mano del tuo avversario.",
			'de-de': "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	suffix: "ex",
	illustrator: "5ban Graphics",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 805453,
				tcgplayer: 610419
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 845428,
			}
		},
	],
}

export default card
