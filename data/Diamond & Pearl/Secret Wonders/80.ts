import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Burmy Trash Cloak",
		fr: "Cheniti Cape Déchet",
		de: "Burmy Lumpenumhang"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		412,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Wear Cloak",
				fr: "Cape",
				de: "Umhang tragen"
			},
			effect: {
				en: "Once during your turn (before your attack), if Burmy Trash Cloak is your Active Pokémon, you may search your discard pile for a basic Metal Energy card and attach it to Burmy Trash Cloak.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Cheniti Cape Déchet est votre Pokémon Actif, vous pouvez choisir dans votre pile de défausse une carte Énergie de base Metal et l'attacher à Cheniti Cape Déchet.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn Burmy Lumpenumhang dein Aktives Pokémon ist, deinen Ablagestapel nach einer -Basis-Energiekarte durchsuchen und an Burmy Lumpenumhang anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Trash Cloak Tackle",
				fr: "Charge cape déchet",
				de: "Lumpenumhang Tackle"
			},
			effect: {
				en: "If Burmy Trash Cloak has any Metal Energy attached to it, this attack does 10 damage plus 10 more damage.",
				fr: "Si Cheniti Cape Déchet possède de l'Énergie Metal, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				de: "Wenn an Burmy Lumpenumhang mindestens 1 -Energie angelegt ist, fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277833
	}
}

export default card
