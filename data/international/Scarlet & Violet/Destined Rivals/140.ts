import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [205],
	set: Set,

	name: {
		'en-us': "Forretress",
		'fr-fr': "Foretress",
		'de-de': "Forstellka",
		'it-it': "Forretress",
		'es-es': "Forretress",
		'pt-br': "Forretress",
		'es-mx': "Forretress"
	},


	illustrator: "Wintr Wandr",

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	evolveFrom: {
		'en-us': "Pineco",
		'fr-fr': "Pomdepik",
		'de-de': "Tannza",
		'it-it': "Pineco",
		'es-es': "Pineco",
		'pt-br': "Pineco",
		'es-mx': "Pineco"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Iron Shake-Up",
			'fr-fr': "Mélange de Fer",
			'de-de': "Eisernes Schütteln",
			'it-it': "Rimpasto Metallico",
			'es-es': "Sacudida Férrea",
			'pt-br': "Sacudida de Ferro",
			'es-mx': "Sacudida Férrea"
		},

		effect: {
			'en-us': "You may move any amount of {M} Energy from your Pokémon to your other Pokémon in any way you like.",
			'fr-fr': "Vous pouvez déplacer autant d'Énergies {M} que vous le voulez de vos Pokémon vers vos autres Pokémon, comme il vous plaît.",
			'de-de': "Du kannst beliebig viele {M}-Energien von deinen Pokémon beliebig auf deine anderen Pokémon verschieben.",
			'it-it': "Puoi spostare un numero qualsiasi di Energie {M} dall'uno all'altro dei tuoi Pokémon nel modo che preferisci.",
			'es-es': "Puedes mover cualquier cantidad de Energías {M} de tus Pokémon a tus otros Pokémon de la manera que desees.",
			'pt-br': "Você pode mover qualquer quantidade de Energia {M} dos seus Pokémon para outros Pokémon seus como desejar.",
			'es-mx': "Puedes mover cualquier cantidad de Energías {M} de tus Pokémon a tus otros Pokémon de la manera que quieras."
		},

		damage: 20
	}, {
		cost: ["Metal", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Hurricane of Needles",
			'fr-fr': "Ouragan d'Aiguilles",
			'de-de': "Nadelorkan",
			'it-it': "Tifone di Aghi",
			'es-es': "Huracán de Púas",
			'pt-br': "Furacão de Agulhas",
			'es-mx': "Huracán de Púas"
		},

		effect: {
			'en-us': "Flip 4 coins. This attack does 80 damage for each heads.",
			'fr-fr': "Lancez 4 pièces. Cette attaque inflige 80 dégâts pour chaque côté face.",
			'de-de': "Wirf 4 Münzen. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa.",
			'es-es': "Lanza 4 monedas. Este ataque hace 80 puntos de daño por cada cara.",
			'pt-br': "Jogue 4 moedas. Este ataque causa 80 pontos de dano para cada cara.",
			'es-mx': "Lanza 4 monedas. Este ataque hace 80 puntos de daño por cada cara."
		},

		damage: "80×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826014,
				tcgplayer: 632947
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826014,
				tcgplayer: 632947
			}
		},
	],
}

export default card
