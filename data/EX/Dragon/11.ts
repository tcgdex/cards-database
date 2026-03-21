import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Shedinja",
		fr: "Munja",
		de: "Ninjatom"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		292,
	],

	hp: 30,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Nincada",
		fr: "Ningale"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Wonder Guard",
				fr: "Garde mystik",
				de: "Wonder Guard"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Shedinja by your opponent's Evolved Pokémon and Pokémon-ex.",
				fr: "Prévenez tous les effets d'une attaque, dégâts inclus, infligés à Munja par les Pokémon-ex et les Pokémon Evolués de votre adversaire.",
				de: "Prevent all effects of attacks, including damage, done to Shedinja by your opponent's Evolved Pokémon and Pokémon-ex."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Damage Curse",
				fr: "La malédiction des dégâts",
				de: "Damage Curse"
			},
			effect: {
				en: "Put 1 damage counter, plus 1 more damage counter for each damage counter on Shedinja, on the Defending Pokémon.",
				fr: "Placez un marqueur de dégât sur le Pokémon Défenseur, plus un marqueur supplémentaire pour chaque marqueur de dégât sur Munja.",
				de: "Put 1 damage counter, plus 1 more damage counter for each damage counter on Shedinja, on the Defending Pokémon."
			},

		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 275888,
		tcgplayer: 89117
	}
}

export default card
