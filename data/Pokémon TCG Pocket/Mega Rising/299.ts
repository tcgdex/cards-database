import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Manaphy",
		fr: "Manaphy"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [490],
	hp: 50,
	types: ["Water"],

	description: {
		en: "It is born with a wondrous power that lets it bond\nwith any kind of Pokémon.",
		fr: "Il est né avec le pouvoir incroyable de créer\\ndes liens avec n'importe quel Pokémon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Oceanic Gift",
			fr: "Cadeau de l'Océan"
		},

		cost: ["Water"],

		effect: {
			en: "Choose 2 of your Benched Pokémon. For each of those Pokémon, take a {W} Energy from your Energy Zone and attach it to that Pokémon.",
			fr: "Choisissez 2 de vos Pokémon de Banc. Pour chacun de ces Pokémon, prenez une Énergie {W} de votre zone Énergie et attachez-la à ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-blaziken"]
}

export default card