import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Shedinja",
		fr: "Munja"
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
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Wonder Guard",
				fr: "Garde mystik"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Shedinja by your opponent's Evolved Pokémon and Pokémon-ex.",
				fr: "Prévenez tous les effets d'une attaque, dégâts inclus, infligés à Munja par les Pokémon-ex et les Pokémon Evolués de votre adversaire."
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
				fr: "La malédiction des dégâts"
			},
			effect: {
				en: "Put 1 damage counter, plus 1 more damage counter for each damage counter on Shedinja, on the Defending Pokémon.",
				fr: "Placez un marqueur de dégât sur le Pokémon Défenseur, plus un marqueur supplémentaire pour chaque marqueur de dégât sur Munja."
			},

		},
	],






}

export default card
