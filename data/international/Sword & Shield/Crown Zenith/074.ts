import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [745],
	set: Set,

	name: {
		'en-us': "Lycanroc",
		'fr-fr': "Lougaroc",
		'es-es': "Lycanroc",
		'it-it': "Lycanroc",
		'pt-br': "Lycanroc",
		'de-de': "Wolwerock"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Rockruff",
		'fr-fr': "Rocabot",
		'es-es': "Rockruff",
		'it-it': "Rockruff",
		'pt-br': "Rockruff",
		'de-de': "Wuffels"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Midnight Fang",
			'fr-fr': "Croc de Minuit",
			'es-es': "Colmillo Nocturno",
			'it-it': "Zanna della Notte",
			'pt-br': "Presa da Meia-noite",
			'de-de': "Mitternachtsfänge"
		},

		effect: {
			'en-us': "This attack does 80 less damage for each Energy attached to your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 80 dégâts de moins pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 80 puntos de daño menos por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 80 danni in meno per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 80 pontos de dano a menos para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 80 Schadenspunkte weniger zu."
		},

		damage: "240-"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "This form of Lycanroc is reckless. It charges headlong at its opponents, attacking without any care about what injuries it might receive.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691792,
				tcgplayer: 478207
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691792,
				tcgplayer: 478207
			}
		},
	],
}

export default card
