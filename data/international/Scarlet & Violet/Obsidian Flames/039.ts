import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [631],
	set: Set,

	name: {
		'fr-fr': "Aflamanoir",
		'en-us': "Heatmor",
		'es-es': "Heatmor",
		'it-it': "Heatmor",
		'pt-br': "Heatmor",
		'de-de': "Furnifraß"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'fr-fr': "Brûle Énergies",
			'en-us': "Energy Burner",
			'es-es': "Combustión de Energía",
			'it-it': "Bruciatore Energetico",
			'pt-br': "Queimador de Energia",
			'de-de': "Energiebrenner"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'en-us': "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "A flame serves as its tongue, melting through the hard shell of Durant so that Heatmor can devour their insides.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725119,
				tcgplayer: 509744,
				cardtrader: 255599
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725119,
				tcgplayer: 509744,
				cardtrader: 255599
			}
		},
	],

	illustrator: "otumami",

	
}

export default card
