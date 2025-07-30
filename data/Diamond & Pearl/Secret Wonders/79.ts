import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Burmy Sandy Cloak",
		fr: "Cheniti Cape Sable",
		de: "Burmy Sandumhang"
	},

	illustrator: "Midori Harada",
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
				en: "Once during your turn (before your attack), if Burmy Sandy Cloak is your Active Pokémon, you may search your discard pile for a basic Fighting Energy card and attach it to Burmy Sandy Cloak.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Cheniti Cape Sable est votre Pokémon Actif, vous pouvez choisir dans votre pile de défausse une carte Énergie de base Fighting et l'attacher à Cheniti Cape Sable.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn Burmy Sandumhang dein Aktives Pokémon ist, deinen Ablagestapel nach einer -Basis-Energiekarte durchsuchen und an Burmy Sandumhang anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sandy Cloak Tackle",
				fr: "Charge cape sable",
				de: "Sandumhang Tackle"
			},
			effect: {
				en: "If Burmy Sandy Cloak has any Fighting Energy attached to it, this attack does 10 damage plus 10 more damage.",
				fr: "Si Cheniti Cape Sable possède de l'Énergie Fighting, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				de: "Wenn an Burmy Sandumhang mindestens 1 -Energie angelegt ist, fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
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
		cardmarket: 277832,
		tcgplayer: 84052
	}
}

export default card
