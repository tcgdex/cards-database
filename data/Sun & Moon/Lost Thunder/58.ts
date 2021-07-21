import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Mantine",
		fr: "Démanta",
		es: "Mantine",
		it: "Mantine",
		pt: "Mantine",
		de: "Mantax"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		226,
	],
	hp: 120,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mantine Surf",
				fr: "Surf Démanta",
				es: "Surfeo Mantine",
				it: "Surf Mantine",
				pt: "Surfe Mantine",
				de: "Mantax-Surfen"
			},
			effect: {
				en: "If this Pokémon has any Energy attached to it, it has no Retreat Cost.",
				fr: "Si de l’Énergie est attachée à ce Pokémon, il n’a pas de Coût de Retraite.",
				es: "Si este Pokémon tiene alguna Energía unida a él, no tiene ningún Coste de Retirada.",
				it: "Se questo Pokémon ha delle Energie assegnate, non ha costo di ritirata.",
				pt: "Se este Pokémon tiver alguma Energia ligada a ele, não terá custo de Recuo.",
				de: "Wenn an dieses Pokémon mindestens 1 Energie angelegt ist, hat es keine Rückzugskosten."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Surf",
				fr: "Surf",
				es: "Surf",
				it: "Surf",
				pt: "Surfar",
				de: "Surfer"
			},

			damage: 100,

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
	retreat: 3,



}

export default card
