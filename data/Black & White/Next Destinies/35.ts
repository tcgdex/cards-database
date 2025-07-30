import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Jellicent",
		fr: "Moyade",
		es: "Jellicent",
		it: "Jellicent",
		pt: "Jellicent",
		de: "Apoquallyp"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		593,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Frillish",
		fr: "Viskuse",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Vengeful Wish",
				fr: "Désir de Vengeance",
			},
			effect: {
				en: "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does the same amount of damage to the Defending Pokémon.",
				fr: "Si ce Pokémon a subi les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige la même quantité de dégâts au Pokémon Défenseur.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Absorb Life",
				fr: "Absorption",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280260,
		tcgplayer: 86306
	}
}

export default card
