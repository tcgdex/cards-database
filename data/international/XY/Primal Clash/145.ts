import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Trevenant EX",
		'fr-fr': "Desséliande EX",
		'es-es': "Trevenant EX",
		'it-it': "Trevenant EX",
		'pt-br': "Trevenant EX",
		'de-de': "Trombork EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		709,
	],

	hp: 180,

	types: [
		"Grass",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Dark Forest",
				'fr-fr': "Forêt Sombre",
				'es-es': "Bosque Oscuro",
				'it-it': "Boscoscuro",
				'pt-br': "Floresta Sombria",
				'de-de': "Dunkler Wald"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				'es-es': "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival.",
				'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
				'pt-br': "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente.",
				'de-de': "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wood Blast",
				'fr-fr': "Explobois",
				'es-es': "Estallido Arbolado",
				'it-it': "Urtolegno",
				'pt-br': "Explosão de Madeira",
				'de-de': "Holzexplosion"
			},
			effect: {
				'en-us': "This attack does 20 more damage for each Grass Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Grass attachée à ce Pokémon.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Energía Grass unida a este Pokémon.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Energia Grass assegnata a questo Pokémon.",
				'pt-br': "Esse ataque causa 20 de danos adicionais para cada Energia Grass ligada a este Pokémon.",
				'de-de': "Dieser Angriff fügt 20 weitere Schadenspunkte für jede an dieses Pokémon angelegte Grass-Energie zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	stage: "Basic",

	thirdParty: {
		cardmarket: 273550,
		tcgplayer: 96043
	}
}

export default card
