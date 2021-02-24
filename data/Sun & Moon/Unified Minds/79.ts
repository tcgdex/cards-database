import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Jirachi-GX",
		fr: "Jirachi-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		385,
	],
	hp: 160,
	types: [
		"Psychic",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Psychic Zone",
				fr: "Zone Psy",
			},
			effect: {
				en: "Don't apply Psychic Weakness when Pokémon (both yours and your opponent's) take damage from attacks.",
				fr: "N’appliquez pas la Faiblesse Psychic lorsque les Pokémon (les vôtres et ceux de votre adversaire) subissent des dégâts d’attaques.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Star Search",
				fr: "Recherche Étoile",
			},
			effect: {
				en: "Search your deck for an Energy card and attach it to 1 of your Psychic Pokémon. Then, shuffle your deck.",
				fr: "Cherchez une carte Énergie dans votre deck et attachez-la à l’un de vos Pokémon Psychic. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Star Shield-GX",
				fr: "Bouclier Étoile-GX",
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn. (You can't use more than 1 GX attack in a game.)",
				fr: "Évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
