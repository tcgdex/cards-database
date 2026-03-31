import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Lapras ex",
		fr: "Lokhlass-ex",
		es: "Lapras ex",
		de: "Lapras-ex",
		it: "Lapras-ex",
		pt: "Lapras ex"
	},
	set: Set,
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [
		131
	],
	hp: 210,
	types: [
		"Water"
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Water"
			],
			name: {
				en: "Hydro Turn",
				fr: "Hydro-Tour",
				es: "Hidrogiro",
				de: "Hydrowende",
				it: "Idrovirata",
				pt: "Revira Água"
			},
			damage: "30×",
			effect: {
				en: "This attack does 30 damage for each [W] Energy attached to this Pokémon. Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Cette attaque inflige 30 dégâts pour chaque Énergie [W] attachée à ce Pokémon. Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
				es: "Este ataque hace 30 puntos de daño por cada Energía [W] unida a este Pokémon. Cambia este Pokémon por uno de tus Pokémon en Banca.",
				de: "Diese Attacke fügt für jede an dieses Pokémon angelegte [W]-Energie 30 Schadenspunkte zu. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
				it: "Questo attacco infligge 30 danni per ogni Energia [W] assegnata a questo Pokémon. Scambia questo Pokémon con uno nella tua panchina.",
				pt: "Este ataque causa 30 pontos de dano para cada Energia [W] ligada a este Pokémon. Troque este Pokémon por 1 dos seus Pokémon no Banco."
			}
		},
		{
			cost: [
				"Water",
				"Water",
				"Water"
			],
			name: {
				en: "Surf",
				fr: "Surf",
				es: "Surf",
				de: "Surfer",
				it: "Surf",
				pt: "Surfar"
			},
			damage: "140"
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "I",
	illustrator: "5ban Graphics",
	variants: [
		{
			type: "holo"
		}
	],
	thirdParty: {
		tcgplayer: 684329,
		cardmarket: 877434
	}
}

export default card
