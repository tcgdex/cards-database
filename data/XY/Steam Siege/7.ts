import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Yanmega",
		fr: "Yanmega",
		es: "Yanmega",
		it: "Yanmega",
		pt: "Yanmega",
		de: "Yanmega"
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
		en: "Yanma",
		fr: "Yanma",
		es: "Yanma",
		it: "Yanma",
		pt: "Yanma",
		de: "Yanma"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sonic Vision",
				fr: "Vision Sonique",
				es: "Visión Sónica",
				it: "Visione Sonica",
				pt: "Visão Sônica",
				de: "Schallsicht"
			},
			effect: {
				en: "If you have exactly 4 cards in your hand, ignore all Energy in the attack cost of each of this Pokémon's attacks.",
				fr: "Si vous avez exactement 4 cartes dans votre main, ignorez toutes les Énergies dans le coût d'attaque de chacune des attaques de ce Pokémon.",
				es: "Si tienes exactamente 4 cartas en tu mano, ignora todas las Energías en el coste de los ataques de este Pokémon.",
				it: "Se hai esattamente quattro carte in mano, ignora tutte le Energie necessarie per usare ciascuno degli attacchi di questo Pokémon.",
				pt: "Se você tiver exatamente 4 cards na sua mão, ignore todas as Energias no custo do ataque de cada ataque deste Pokémon.",
				de: "Ignoriere alle Energien in den Angriffskosten jeder Attacke dieses Pokémon, wenn du genau 4 Karten auf der Hand hast."
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
				en: "Assault Boom",
				fr: "Dégât d'Assaut",
				es: "Bomba de Asalto",
				it: "Boatassalto",
				pt: "Ataque Explosivo",
				de: "Offensiv-Donner"
			},
			effect: {
				en: "If your opponent's Active Pokémon has a Pokémon Tool card attached to it, this attack does 70 more damage.",
				fr: "Si une carte Outil Pokémon est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 70 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival tiene 1 carta de Herramienta Pokémon unida a él, este ataque hace 70 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario ha una carta Oggetto Pokémon assegnata, questo attacco infligge 70 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente possuir um card de Ferramenta Pokémon ligado a ele, este ataque causará 70 de danos adicionais.",
				de: "Wenn an das Aktive Pokémon deines Gegners eine Pokémon-Ausrüstung angelegt ist, fügt dieser Angriff 70 weitere Schadenspunkte zu."
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

	retreat: 0
}

export default card
