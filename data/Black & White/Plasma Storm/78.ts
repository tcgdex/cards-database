import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Lucario",
		fr: "Lucario",
		es: "Lucario",
		it: "Lucario",
		pt: "Lucario",
		de: "Lucario"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		448,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dual Armor",
				fr: "Double Armure",
				es: "Armadura Dual",
				it: "Doppiarmatura",
				pt: "Armadura Dupla",
				de: "Doppelte Rüstung"
			},
			effect: {
				en: "If this Pokémon has any Metal Energy attached to it, this Pokémon’s type is both Fighting and Metal.",
				fr: "Si de l’Énergie Metal est attachée à ce Pokémon, le type de ce Pokémon est Fighting et Metal.",
				es: "Si este Pokémon tiene alguna Energía Metal unida a él, el tipo de este Pokémon es Fighting y Metal.",
				it: "Se questo Pokémon ha delle Energie Metal assegnate, il tipo di questo Pokémon è sia Fighting che Metal.",
				pt: "Se este Pokémon possui alguma Energia Metal ligada a ele, o tipo desse Pokémon é Fighting e Metal.",
				de: "Wenn an dieses Pokémon bereits Metal-Energie angelegt ist, ist dieses Pokémon sowohl vom Typ Fighting als auch Metal."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hurricane Kick",
				fr: "Pied Ouragan",
			},
			effect: {
				en: "Does 30 more damage for each Prize card your opponent has taken.",
				fr: "Inflige 30 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280817
	}
}

export default card
