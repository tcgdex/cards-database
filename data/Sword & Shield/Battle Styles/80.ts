import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [839],
	set: Set,

	name: {
		en: "Coalossal",
		fr: "Monthracite",
		es: "Coalossal",
		it: "Coalossal",
		pt: "Coalossal",
		de: "Montecarbo"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	evolveFrom: {
		en: "Carkol",
		fr: "Wagomine",
		es: "Carkol",
		it: "Carkol",
		pt: "Carkol",
		de: "Wagong"
	},

	attacks: [{
		name: {
			en: "Coal Cannon",
			fr: "Canon Charbonneux",
			es: "Cañón de Carbón",
			it: "Carboncannone",
			pt: "Canhão de Carvão",
			de: "Kohlekanone"
		},

		effect: {
			en: "Flip a coin for each Energy attached to this Pokémon. This attack does 90 damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 90 dégâts pour chaque côté face.",
			es: "Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 90 puntos de daño por cada cara.",
			it: "Lancia una moneta per ogni Energia assegnata a questo Pokémon. Questo attacco infligge 90 danni ogni volta che esce testa.",
			pt: "Jogue 1 moeda para cada Energia ligada a este Pokémon. Este ataque causa 90 pontos de dano para cada cara.",
			de: "Wirf für jede an dieses Pokémon angelegte Energie 1 Münze. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu."
		},

		damage: "90×",
		cost: ["Colorless"]
	}, {
		name: {
			en: "Wild Tackle",
			fr: "Tacle Brutal",
			es: "Placaje Salvaje",
			it: "Azionferoce",
			pt: "Investida Feroz",
			de: "Wilder Tackle"
		},

		effect: {
			en: "This Pokémon also does 50 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 50 dégâts.",
			es: "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 50 danni a se stesso.",
			pt: "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 200,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "While it's engaged in battle, its mountain of coal will burn bright red, sending off sparks that scorch the surrounding area."
	},

	thirdParty: {
		cardmarket: 545511
	}
}

export default card
