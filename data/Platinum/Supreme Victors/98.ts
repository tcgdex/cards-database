import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Chingling",
		fr: "Korillon",
		de: "Klingplim"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		433,
	],

	hp: 50,

	types: [
		"Psychic",
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
				en: "Once during your turn (before your attack), you may put Chimecho from your hand onto Chingling (this counts as evolving Chingling) and remove all damage counters from Chingling.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Éoko de votre main sur Korillon (vous le faites ainsi évoluer) et retirer à Korillon tous ses marqueurs de dégât.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du Palimpalim von deiner Hand auf Klingplim legen (das zählt als Entwickeln von Klingplim). Entferne alle Schadensmarken von Klingplim."
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Chime",
				fr: "Carillon",
				de: "Glockenton"
			},
			effect: {
				en: "Search your opponent's discard pile for a Supporter card and use the effect of that card as the effect of this attack. (The Supporter card remains in your opponent's discard pile.)",
				fr: "Choisissez dans la pile de défausse de votre adversaire une carte Supporter et utilisez l'effet de cette carte comme l'effet de cette attaque. (La carte Supporter reste dans la pile de défausse de votre adversaire.)",
				de: "Durchsuche den Ablagestapel deines Gegners nach 1 Unterstützerkarte und nutze ihren Effekt als Effekt dieses Angriffs. (Die Unterstützerkarte bleibt im Ablagestapel deines Gegners.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278789
	}
}

export default card
