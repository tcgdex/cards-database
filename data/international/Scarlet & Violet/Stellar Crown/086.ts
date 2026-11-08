import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [719],
	set: Set,

	name: {
		'en-us': "Diancie",
		'fr-fr': "Diancie",
		'es-es': "Diancie",
		'it-it': "Diancie",
		'pt-br': "Diancie",
		'de-de': "Diancie"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Diffuse Reflection",
			'fr-fr': "Réflexion Diffuse",
			'es-es': "Refracción Dispersa",
			'it-it': "Riflesso Diffuso",
			'pt-br': "Difusão de Reflexo",
			'de-de': "Streureflektion"
		},

		effect: {
			'en-us': "This attack does 40 damage for each Special Energy attached to all of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts pour chaque Énergie spéciale attachée à tous les Pokémon de votre adversaire.",
			'es-es': "Este ataque hace 40 puntos de daño por cada Energía Especial unida a cada uno de los Pokémon de tu rival.",
			'it-it': "Questo attacco infligge 40 danni per ogni Energia speciale assegnata ai Pokémon del tuo avversario.",
			'pt-br': "Este ataque causa 40 pontos de dano para cada Energia Especial ligada a todos os Pokémon do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Spezial-Energie 40 Schadenspunkte zu."
		},

		damage: "40×"
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Power Gem",
			'fr-fr': "Rayon Gemme",
			'es-es': "Joya de Luz",
			'it-it': "Gemmoforza",
			'pt-br': "Gema Poderosa",
			'de-de': "Juwelenkraft"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785940,
				tcgplayer: 567312
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785940,
				tcgplayer: 567312
			}
		},
	],

	illustrator: "Jiro Sasumo",

}

export default card
