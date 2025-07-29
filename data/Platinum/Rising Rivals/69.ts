import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Munchlax",
		fr: "Goinfrex Niv. 13",
		de: "Mampfaxo"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		446,
	],

	hp: 70,

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
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Ronflex de votre main sur Goinfrex (vous le faites ainsi évoluer) et lui retirer tous ses marqueurs de dégât.",
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
				en: "Rest",
				fr: "Repos",
				de: "Ruhe"
			},
			effect: {
				en: "Remove all Special Conditions and 6 damage counters from Munchlax. Munchlax is now Asleep.",
				fr: "Retirez à Goinfrex tous ses États Spéciaux ainsi que 6 marqueurs de dégât. Goinfrex est maintenant Endormi.",
				de: "Entferne alle Speziellen Zustände und 6 Schadensmarken von Mampfaxo. Mampfaxo schläft jetzt."
			},

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
		cardmarket: 278643
	}
}

export default card
