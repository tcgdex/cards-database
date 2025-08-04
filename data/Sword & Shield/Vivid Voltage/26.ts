import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [136],

	name: {
		en: "Flareon",
		fr: "Pyroli",
		es: "Flareon",
		it: "Flareon",
		pt: "Flareon",
		de: "Flamara"
	},

	illustrator: "Eri Yamaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Fire",
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
				en: "Incandescent Awakening",
				fr: "Éveil Incandescent",
				es: "Despertar Incandescente",
				it: "Risveglio Incandescente",
				pt: "Despertar Incandescente",
				de: "Weißglühendes Erwachen"
			},
			effect: {
				en: "If this Pokémon has a Memory Capsule attached, Grass Pokémon in play (both yours and your opponent's) have no Abilities.",
				fr: "Si une carte Capsule Mémoire est attachée à ce Pokémon, les Pokémon Grass en jeu (les vôtres et ceux de votre adversaire) n'ont pas de talent.",
				es: "Si este Pokémon tiene 1 Cápsula de Memoria unida a él, los Pokémon Grass en juego (tanto tuyos como de tu rival) no tienen ninguna habilidad.",
				it: "Se questo Pokémon ha una carta Capsula della Memoria assegnata, i Pokémon Grass in gioco, sia tuoi che del tuo avversario, non hanno abilità.",
				pt: "Se este Pokémon tiver 1 Cápsula de Memória ligada a ele, Pokémon Grass em jogo (seus e do seu oponente) não terão Habilidades.",
				de: "Wenn an dieses Pokémon eine Gedächtniskapsel angelegt ist, haben Grass-Pokémon im Spiel (deine und die deines Gegners) keine Fähigkeiten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Mane",
				fr: "Crinière de Feu",
				es: "Crin de Fuego",
				it: "Criniera di Fuoco",
				pt: "Crina de Fogo",
				de: "Flammenmähne"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
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
		en: "Once it has stored up enough heat, this Pokémon's body temperature can reach up to 1,700 degrees Fahrenheit."
	},

	thirdParty: {
		cardmarket: 511550,
		tcgplayer: 226396
	}
}

export default card
