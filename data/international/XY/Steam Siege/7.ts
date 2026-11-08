import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Yanmega",
		'fr-fr': "Yanmega",
		'es-es': "Yanmega",
		'it-it': "Yanmega",
		'pt-br': "Yanmega",
		'de-de': "Yanmega"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		469,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Yanma",
		'fr-fr': "Yanma",
		'es-es': "Yanma",
		'it-it': "Yanma",
		'pt-br': "Yanma",
		'de-de': "Yanma"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Sonic Vision",
				'fr-fr': "Vision Sonique",
				'es-es': "Visión Sónica",
				'it-it': "Visione Sonica",
				'pt-br': "Visão Sônica",
				'de-de': "Schallsicht"
			},
			effect: {
				'en-us': "If you have exactly 4 cards in your hand, ignore all Energy in the attack cost of each of this Pokémon's attacks.",
				'fr-fr': "Si vous avez exactement 4 cartes dans votre main, ignorez toutes les Énergies dans le coût d'attaque de chacune des attaques de ce Pokémon.",
				'es-es': "Si tienes exactamente 4 cartas en tu mano, ignora todas las Energías en el coste de los ataques de este Pokémon.",
				'it-it': "Se hai esattamente quattro carte in mano, ignora tutte le Energie necessarie per usare ciascuno degli attacchi di questo Pokémon.",
				'pt-br': "Se você tiver exatamente 4 cards na sua mão, ignore todas as Energias no custo do ataque de cada ataque deste Pokémon.",
				'de-de': "Ignoriere alle Energien in den Angriffskosten jeder Attacke dieses Pokémon, wenn du genau 4 Karten auf der Hand hast."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Assault Boom",
				'fr-fr': "Dégât d'Assaut",
				'es-es': "Bomba de Asalto",
				'it-it': "Boatassalto",
				'pt-br': "Ataque Explosivo",
				'de-de': "Offensiv-Donner"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon has a Pokémon Tool card attached to it, this attack does 70 more damage.",
				'fr-fr': "Si une carte Outil Pokémon est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 70 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival tiene 1 carta de Herramienta Pokémon unida a él, este ataque hace 70 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario ha una carta Oggetto Pokémon assegnata, questo attacco infligge 70 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente possuir um card de Ferramenta Pokémon ligado a ele, este ataque causará 70 de danos adicionais.",
				'de-de': "Wenn an das Aktive Pokémon deines Gegners eine Pokémon-Ausrüstung angelegt ist, fügt dieser Angriff 70 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "This six-legged Pokémon is easily capable of transporting an adult in flight. The wings on its tail help it stay balanced.",
	},

	thirdParty: {
		cardmarket: 291514,
		tcgplayer: 120996
	}
}

export default card
