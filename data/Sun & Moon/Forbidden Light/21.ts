import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Froakie",
		fr: "Grenousse",
		es: "Froakie",
		it: "Froakie",
		pt: "Froakie",
		de: "Froxy"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		656,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Frubbles",
				fr: "Grebulles",
				es: "Frurbujas",
				it: "Frobolle",
				pt: "Frobolhas",
				de: "Flubba"
			},
			effect: {
				en: "If this Pokémon has any Water Energy attached to it, it has no Retreat Cost.",
				fr: "Si de l’Énergie Water est attachée à ce Pokémon, il n’a pas de coût de Retraite.",
				es: "Si este Pokémon tiene alguna Energía Water unida a él, no tiene ningún Coste de Retirada.",
				it: "Se questo Pokémon ha delle Energie Water assegnate, non ha costo di ritirata.",
				pt: "Se este Pokémon tiver alguma Energia Water ligada a ele, não terá custo de Recuo.",
				de: "Wenn an dieses Pokémon mindestens 1 Water-Energie angelegt ist, hat es keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flop",
				fr: "Flop",
				es: "Vuelta",
				it: "Tonfo",
				pt: "Baque",
				de: "Plumps"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 355541
	}
}

export default card
