import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [134],

	name: {
		en: "Vaporeon",
		fr: "Aquali",
		es: "Vaporeon",
		it: "Vaporeon",
		pt: "Vaporeon",
		de: "Aquana"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Torrential Awakening",
				fr: "Éveil Torrentiel",
				es: "Despertar Torrencial",
				it: "Risveglio Torrenziale",
				pt: "Despertar Torrencial",
				de: "Reißendes Erwachen"
			},
			effect: {
				en: "If this Pokémon has a Memory Capsule attached, Fire Pokémon in play (both yours and your opponent's) have no Abilities.",
				fr: "Si une carte Capsule Mémoire est attachée à ce Pokémon, les Pokémon Fire en jeu (les vôtres et ceux de votre adversaire) n'ont pas de talent.",
				es: "Si este Pokémon tiene 1 Cápsula de Memoria unida a él, los Pokémon Fire en juego (tanto tuyos como de tu rival) no tienen ninguna habilidad.",
				it: "Se questo Pokémon ha una carta Capsula della Memoria assegnata, i Pokémon Fire in gioco, sia tuoi che del tuo avversario, non hanno abilità.",
				pt: "Se este Pokémon tiver 1 Cápsula de Memória ligada a ele, Pokémon Fire em jogo (seus e do seu oponente) não terão Habilidades.",
				de: "Wenn an dieses Pokémon eine Gedächtniskapsel angelegt ist, haben Fire-Pokémon im Spiel (deine und die deines Gegners) keine Fähigkeiten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Aurora Beam",
				fr: "Onde Boréale",
				es: "Rayo Aurora",
				it: "Raggiaurora",
				pt: "Raio Aurora",
				de: "Aurorastrahl"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "When Vaporeon's fins begin to vibrate, it is a sign that rain will come within a few hours."
	},

	thirdParty: {
		cardmarket: 511570
	}
}

export default card
