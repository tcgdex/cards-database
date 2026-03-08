import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Jirachi",
		fr: "Jirachi",
		de: "Jirachi"
	},

	illustrator: "match",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		385,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Stardust Song",
				fr: "Chanson céleste",
				de: "Lied des Sternenstaubs"
			},
			effect: {
				en: "Once during your turn, when you put Jirachi from your hand onto your Bench, you may flip 3 coins. For each heads, search your discard pile for a Psychic Energy card and attach it to Jirachi.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Jirachi de votre main sur votre Banc, vous pouvez lancer 3 pièces. Pour chaque côté face, récupérez une carte Énergie  de votre pile de défausse et attachez-la à Jirachi.",
				de: "Einmal während deines Zuges kannst du, wenn du Jirachi von deiner Hand auf deine Bank legst, 3 Münzen werfen. Durchsuche pro \"Kopf\" deinen Ablagestapel nach einer -Energiekarte und lege sie an Jirachi an."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Time Hollow",
				fr: "Creux temporel",
				de: "Zeitumkehrung"
			},
			effect: {
				en: "Choose a number of your opponent's Stage 1 or Stage 2 Evolved Pokémon up to the amount of Energy attached to Jirachi. Remove the highest Stage Evolution card from each of those Pokémon and put those cards back into your opponent's hand.",
				fr: "Choisissez au maximum autant de cartes Pokémon Évolution de votre adversaire (niveau 1 ou 2) qu'il y a de cartes Énergie attachées à Jirachi. Retirez les cartes Évolution de niveau le plus élevé de ces Pokémon et remettez-les dans la main de votre adversaire.",
				de: "Wähle maximal so viele entwickelte Phase-1- oder Phase-2 Pokémon deines Gegners, wie Energien an Jirachi angelegt sind. Entferne die höchste Evolutionskarte von jedem der gewählten Pokémon. Dein Gegner nimmt diese Karten auf seine Hand zurück."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 279654,
		tcgplayer: 86331
	}
}

export default card
