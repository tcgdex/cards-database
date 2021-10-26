import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Jolteon",
		fr: "Voltali",
		es: "Jolteon",
		it: "Jolteon",
		pt: "Jolteon",
		de: "Blitza"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Lightning",
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
				en: "Thunderous Awakening",
				fr: "Éveil Fulgurant",
				es: "Despertar Atronador",
				it: "Risveglio Tonante",
				pt: "Despertar Estrondoso",
				de: "Donnerndes Erwachen"
			},
			effect: {
				en: "If this Pokémon has a Memory Capsule attached, Water Pokémon in play (both yours and your opponent's) have no Abilities.",
				fr: "Si une carte Capsule Mémoire est attachée à ce Pokémon, les Pokémon Water en jeu (les vôtres et ceux de votre adversaire) n'ont pas de talent.",
				es: "Si este Pokémon tiene 1 Cápsula de Memoria unida a él, los Pokémon Water en juego (tanto tuyos como de tu rival) no tienen ninguna habilidad.",
				it: "Se questo Pokémon ha una carta Capsula della Memoria assegnata, i Pokémon Water in gioco, sia tuoi che del tuo avversario, non hanno abilità.",
				pt: "Se este Pokémon tiver 1 Cápsula de Memória ligada a ele, Pokémon Metal em jogo (seus e do seu oponente) não terão Habilidades.",
				de: "Wenn an dieses Pokémon eine Gedächtniskapsel angelegt ist, haben Water-Pokémon im Spiel (deine und die deines Gegners) keine Fähigkeiten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electric Ball",
				fr: "Boule de Foudre",
				es: "Bola Eléctrica",
				it: "Lamposfera",
				pt: "Bola de Eletricidade",
				de: "Stromball"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "If it is angered or startled, the fur all over its body bristles like sharp needles that pierce foes."
	}
}

export default card
