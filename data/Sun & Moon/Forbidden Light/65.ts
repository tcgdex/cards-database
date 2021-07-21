import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Pancham",
		fr: "Pandespiègle",
		es: "Pancham",
		it: "Pancham",
		pt: "Pancham",
		de: "Pam-Pam"
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		674,
	],
	hp: 70,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Act Tough",
				fr: "Dur à Cuire",
				es: "Hacerse el Duro",
				it: "Fatti Miei",
				pt: "Agir como um Durão",
				de: "Harter Bursche"
			},
			effect: {
				en: "If this Pokémon has any Darkness Energy attached to it, this attack does 30 more damage.",
				fr: "Si de l’Énergie Darkness est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Si este Pokémon tiene alguna Energía Darkness unida a él, este ataque hace 30 puntos de daño más.",
				it: "Se questo Pokémon ha delle Energie Darkness assegnate, questo attacco infligge 30 danni in più.",
				pt: "Se este Pokémon tiver alguma Energia Darkness ligada a ele, este ataque causará 30 pontos de dano a mais.",
				de: "Wenn an dieses Pokémon mindestens 1 Darkness-Energie angelegt ist, fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
