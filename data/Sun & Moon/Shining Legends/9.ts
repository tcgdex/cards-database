import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Shining Genesect",
		fr: "Genesect Brillant",
		es: "Genesect Luminoso",
		it: "Genesect iridescente",
		pt: "Genesect Luminescente",
		de: "Schimmerndes Genesect"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		649,
	],

	hp: 130,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Energy Reload",
				fr: "Recharge d’Énergie",
				es: "Recarga de Energía",
				it: "Ricarica Energetica",
				pt: "Recarregar Energia",
				de: "Energie nachladen"
			},
			effect: {
				en: "Once during your turn (before your attack), you may move a Grass Energy from 1 of your other Pokémon to this Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Grass de l’un de vos Pokémon vers ce Pokémon.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes mover 1 Energía Grass de 1 de tus otros Pokémon a este Pokémon.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi spostare un’Energia Grass da uno dei tuoi altri Pokémon a questo Pokémon.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode mover 1 Energia Grass de 1 dos seus outros Pokémon para este Pokémon.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Grass-Energie von 1 deiner anderen Pokémon auf dieses Pokémon verschieben."
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
				en: "Gaia Blaster",
				fr: "Explosion de Gaïa",
				es: "Explosión Gaia",
				it: "Esplodigaia",
				pt: "Arrasador Gaia",
				de: "Gaia-Blaster"
			},
			effect: {
				en: "This attack does 20 more damage times the amount of Grass Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Grass attachées à ce Pokémon.",
				es: "Este ataque hace 20 puntos de daño más por cada Energía Grass unida a este Pokémon.",
				it: "Questo attacco infligge 20 danni in più per ogni Energia Grass assegnata a questo Pokémon.",
				pt: "Este ataque causa 20 pontos de dano a mais vezes a quantidade de Energia Grass ligada a este Pokémon.",
				de: "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an dieses Pokémon angelegten Grass-Energien zu."
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

	retreat: 2,

	thirdParty: {
		cardmarket: 302147
	}
}

export default card
