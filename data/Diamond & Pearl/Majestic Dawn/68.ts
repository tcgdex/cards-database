import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Munchlax",
		fr: "Goinfrex",
		de: "Mampfaxo"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		446,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
				fr: "Évolution bébé",
				de: "Baby Evolution"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Snorlax from your hand onto Munchlax (this counts as evolving Munchlax) and remove all damage counters from Munchlax.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Ronflex de votre main sur Goinfrex (vous le faites ainsi évoluer) et retirer à Goinfrex tous ses marqueurs de dégât.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du Relaxo von deiner Hand auf Mampfaxo legen (das zählt als Entwickeln von Mampfaxo). Entferne alle Schadensmarken von Mampfaxo."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lick",
				fr: "Léchouille",
				de: "Schlecker"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278117,
		tcgplayer: 87638
	}
}

export default card
