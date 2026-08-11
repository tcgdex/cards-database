import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [685],
	set: Set,

	name: {
		en: "Slurpuff",
		fr: "Cupcanaille",
		es: "Slurpuff",
		it: "Slurpuff",
		pt: "Slurpuff",
		de: "Sabbaione"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		en: "Swirlix",
		fr: "Sucroquin",
		es: "Swirlix",
		it: "Swirlix",
		pt: "Swirlix",
		de: "Flauschling"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Draining Kiss",
			fr: "Vampibaiser",
			es: "Beso Drenaje",
			it: "Assorbibacio",
			pt: "Beijo Drenante",
			de: "Diebeskuss"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
			es: "Disparo Mágico",
			it: "Magicolpo",
			pt: "Tiro Mágico",
			de: "Magischer Schuss"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		en: "By taking in a person's scent, it can sniff out their mental and physical condition. It's hoped that this skill will have many medical applications.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682131,
				tcgplayer: 451738
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682131,
				tcgplayer: 451738
			}
		},
	],
}

export default card
