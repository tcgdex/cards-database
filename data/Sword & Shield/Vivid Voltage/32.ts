import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Wailord",
		fr: "Wailord",
		es: "Wailord",
		it: "Wailord",
		pt: "Wailord",
		de: "Wailord"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 200,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Wailmer",
		fr: "Wailmer",
		es: "Wailmer",
		it: "Wailmer",
		pt: "Wailmer",
		de: "Wailmer"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Water Veil",
				fr: "Ignifu-Voile",
				es: "Velo Agua",
				it: "Idrovelo",
				pt: "Véu de Água",
				de: "Aquahülle"
			},
			effect: {
				en: "Whenever you attach an Energy card from your hand to this Pokémon, it recovers from all Special Conditions.",
				fr: "Chaque fois que vous attachez une carte Énergie de votre main à ce Pokémon, il guérit de tous les États Spéciaux.",
				es: "Cada que vez que unas 1 carta de Energía de tu mano a este Pokémon, elimina todas sus Condiciones Especiales.",
				it: "Ogni volta che assegni una carta Energia a questo Pokémon dalla tua mano, rimuovi tutte le condizioni speciali che lo influenzano.",
				pt: "Sempre que você ligar um card de Energia da sua mão a este Pokémon, remova todas as Condições Especiais dele.",
				de: "Jedes Mal, wenn du 1 Energiekarte von deiner Hand an dieses Pokémon anlegst, verlieren alle Speziellen Zustände auf diesem Pokémon ihre Wirkung."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Pump",
				fr: "Hydrocanon",
				es: "Hidrobomba",
				it: "Idropompa",
				pt: "Jato d'Água",
				de: "Hydropumpe"
			},
			effect: {
				en: "This attack does 40 more damage for each Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
				es: "Este ataque hace 40 puntos de daño más por cada Energía Water unida a este Pokémon.",
				it: "Questo attacco infligge 40 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				pt: "Este ataque causa 40 pontos de dano a mais para cada Energia Water ligada a este Pokémon.",
				de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Water-Energie 40 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It can sometimes knock out opponents with the shock created by breaching and crashing its big body onto the water."
	}
}

export default card
