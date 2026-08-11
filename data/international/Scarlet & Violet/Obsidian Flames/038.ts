import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [609],
	set: Set,

	name: {
		'fr-fr': "Lugulabre",
		'en-us': "Chandelure",
		'es-es': "Chandelure",
		'it-it': "Chandelure",
		'pt-br': "Chandelure",
		'de-de': "Skelabra"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	evolveFrom: {
		'fr-fr': "Mélancolux",
		'en-us': "Lampent",
		'es-es': "Lampent",
		'it-it': "Lampent",
		'pt-br': "Lampent",
		'de-de': "Laternecto"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Chaîne de Combustion",
			'en-us': "Combustion Chain",
			'es-es': "Cadena de Combustión",
			'it-it': "Catena di Combustione",
			'pt-br': "Corrente de Combustão",
			'de-de': "Kettenbrand"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'en-us': "This attack does 50 more damage for each Energy attached to your opponent's Active Pokémon.",
			'es-es': "Este ataque hace 50 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 50 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 50 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 50 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Explosion de Chaleur",
			'en-us': "Heat Blast",
			'es-es': "Explosión de Calor",
			'it-it': "Caldobomba",
			'pt-br': "Raio de Calor",
			'de-de': "Hitzestoß"
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "In homes illuminated by Chandelure instead of lights, funerals were a constant occurrence—or so it's said.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725118,
				tcgplayer: 509742,
				cardtrader: 255598
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725118,
				tcgplayer: 509742,
				cardtrader: 255598
			}
		},
	],

	illustrator: "Haru Akasaka",

	
}

export default card
