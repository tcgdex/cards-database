import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Mudsdale",
		fr: "Bourrinos",
		es: "Mudsdale",
		it: "Mudsdale",
		pt: "Mudsdale",
		de: "Pampross"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		750,
	],
	hp: 140,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Mudbray",
		fr: "Tiboudet",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Enhanced Stomp",
				fr: "Piétinement Amélioré",
				es: "Pisotón Mejorado",
				it: "Superpasso",
				pt: "Pisão Acentuado",
				de: "Spezial-Stampfer"
			},
			effect: {
				en: "If this Pokémon has a Pokémon Tool card attached to it, this attack does 60 more damage.",
				fr: "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si este Pokémon tiene 1 carta de Herramienta Pokémon unida a él, este ataque hace 60 puntos de daño más.",
				it: "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 60 danni in più.",
				pt: "Se este Pokémon tiver uma carta de Ferramenta Pokémon ligada a ele, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn an dieses Pokémon eine Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "High Horsepower",
				fr: "Cavalerie Lourde",
				es: "Fuerza Equina",
				it: "Forza Equina",
				pt: "Potência Equina",
				de: "Pferdestärke"
			},
			effect: {
				en: "This Pokémon does 40 damage to itself.",
				fr: "Ce Pokémon s’inflige 40 dégâts.",
				es: "Este Pokémon se hace 40 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 40 danni a se stesso.",
				pt: "Este Pokémon causa 40 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt sich selbst 40 Schadenspunkte zu."
			},
			damage: 180,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
