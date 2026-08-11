import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [462],
	set: Set,

	name: {
		'en-us': "Magnezone ex",
		'fr-fr': "Magnézone-ex",
		'es-es': "Magnezone ex",
		'it-it': "Magnezone-ex",
		'pt-br': "Magnezone ex",
		'de-de': "Magnezone-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 330,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Magneton",
		'fr-fr': "Magnéton"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Energy Crush",
			'fr-fr': "Écras'Énergie",
			'es-es': "Comprimir Energía",
			'it-it': "Sgretolenergia",
			'pt-br': "Esmagamento de Energia",
			'de-de': "Zermalmende Energie"
		},

		effect: {
			'en-us': "This attack does 50 damage for each Energy attached to all of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 50 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
			'es-es': "Este ataque hace 50 puntos de daño por cada Energía unida a cada uno de los Pokémon de tu rival.",
			'it-it': "Questo attacco infligge 50 danni per ogni Energia assegnata ai Pokémon del tuo avversario.",
			'pt-br': "Este ataque causa 50 pontos de dano para cada Energia ligada a todos os Pokémon do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Energie 50 Schadenspunkte zu."
		},

		damage: "50×"
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Pulse Launcher",
			'fr-fr': "Lanceur d'Impulsions",
			'es-es': "Lanzapulsos",
			'it-it': "Lancimpulso",
			'pt-br': "Lançador de Pulsos",
			'de-de': "Pulswerfer"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 220
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: "holo"
		}
	],

	suffix: "ex",
	illustrator: "hncl",

	description: {
		'en-us': "They're formed by several Magnemite linked together. They frequently appear when sunspots flare up.",
	},

	thirdParty: {
        cardmarket: 702361,
        tcgplayer: 486612
    }
}

export default card