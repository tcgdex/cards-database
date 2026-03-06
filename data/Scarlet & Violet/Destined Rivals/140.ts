import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [205],
	set: Set,

	name: {
		en: "Forretress",
		fr: "Foretress",
		de: "Forstellka",
		it: "Forretress",
		es: "Forretress",
		pt: "Forretress",
		'es-mx': "Forretress"
	},


	illustrator: "Wintr Wandr",

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	evolveFrom: {
		en: "Pineco",
		fr: "Pomdepik",
		de: "Tannza",
		it: "Pineco",
		es: "Pineco",
		pt: "Pineco",
		'es-mx': "Pineco"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Iron Shake-Up",
			fr: "Mélange de Fer",
			de: "Eisernes Schütteln",
			it: "Rimpasto Metallico",
			es: "Sacudida Férrea",
			pt: "Sacudida de Ferro",
			'es-mx': "Sacudida Férrea"
		},

		effect: {
			en: "You may move any amount of {M} Energy from your Pokémon to your other Pokémon in any way you like.",
			fr: "Vous pouvez déplacer autant d'Énergies {M} que vous le voulez de vos Pokémon vers vos autres Pokémon, comme il vous plaît.",
			de: "Du kannst beliebig viele {M}-Energien von deinen Pokémon beliebig auf deine anderen Pokémon verschieben.",
			it: "Puoi spostare un numero qualsiasi di Energie {M} dall'uno all'altro dei tuoi Pokémon nel modo che preferisci.",
			es: "Puedes mover cualquier cantidad de Energías {M} de tus Pokémon a tus otros Pokémon de la manera que desees.",
			pt: "Você pode mover qualquer quantidade de Energia {M} dos seus Pokémon para outros Pokémon seus como desejar.",
			'es-mx': "Puedes mover cualquier cantidad de Energías {M} de tus Pokémon a tus otros Pokémon de la manera que quieras."
		},

		damage: 20
	}, {
		cost: ["Metal", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Hurricane of Needles",
			fr: "Ouragan d'Aiguilles",
			de: "Nadelorkan",
			it: "Tifone di Aghi",
			es: "Huracán de Púas",
			pt: "Furacão de Agulhas",
			'es-mx': "Huracán de Púas"
		},

		effect: {
			en: "Flip 4 coins. This attack does 80 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 80 dégâts pour chaque côté face.",
			de: "Wirf 4 Münzen. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu.",
			it: "Lancia quattro volte una moneta. Questo attacco infligge 80 danni ogni volta che esce testa.",
			es: "Lanza 4 monedas. Este ataque hace 80 puntos de daño por cada cara.",
			pt: "Jogue 4 moedas. Este ataque causa 80 pontos de dano para cada cara.",
			'es-mx': "Lanza 4 monedas. Este ataque hace 80 puntos de daño por cada cara."
		},

		damage: "80×"
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	],

	thirdParty: {
		cardmarket: 826014
	}
}

export default card
