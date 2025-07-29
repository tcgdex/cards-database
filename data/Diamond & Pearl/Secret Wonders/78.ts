import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Burmy Plant Cloak",
		fr: "Cheniti Cape Plante",
		de: "Burmy Pflanzenumhang"
	},

	illustrator: "Kouki Saitou",
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
				en: "Once during your turn (before your attack), if Burmy Plant Cloak is your Active Pokémon, you may search your discard pile for a basic Grass Energy card and attach it to Burmy Plant Cloak.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Cheniti Cape Plante est votre Pokémon Actif, vous pouvez choisir dans votre pile de défausse une carte Énergie de base Grass et l'attacher à Cheniti Cape Plante.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn Burmy Pflanzenumhang dein Aktives Pokémon ist, deinen Ablagestapel nach einer -Basis-Energiekarte durchsuchen und an Burmy Pflanzenumhang anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Plant Cloak Tackle",
				fr: "Charge cape plante",
				de: "Pflanzenumhang Tackle"
			},
			effect: {
				en: "If Burmy Plant Cloak has any Grass Energy attached to it, this attack does 10 damage plus 10 more damage.",
				fr: "Si Cheniti Cape Plante possède de l'Énergie Grass, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				de: "Wenn an Burmy Pflanzenumhang mindestens 1 -Energie angelegt ist, fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
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
		cardmarket: 277831
	}
}

export default card
