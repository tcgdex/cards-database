import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Meowth",
		fr: "Miaouss",
		es: "Meowth",
		it: "Meowth",
		pt: "Meowth",
		de: "Mauzi"
	},
	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		52,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
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
				en: "If this Pokémon has any Darkness Energy attached to it, this attack does 20 more damage.",
				fr: "Si de l'Énergie Darkness est attachée à ce Pokémon, cette attaque inflige 20 dégâts supplémentaires.",
				es: "Si este Pokémon tiene alguna Energía Darkness unida a él, este ataque hace 20 puntos de daño más.",
				it: "Se questo Pokémon ha delle Energie Darkness assegnate, questo attacco infligge 20 danni in più.",
				pt: "Se este Pokémon possuir alguma Energia Darkness ligada a ele, este ataque causará 20 de danos adicionais.",
				de: "Wenn an dieses Pokémon bereits mindestens 1 Darkness-Energie angelegt ist, fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
