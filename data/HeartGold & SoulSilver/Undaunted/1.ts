import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Bellossom",
		fr: "Joliflor",
		de: "Blubella"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		182,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Gloom",
		fr: "Ortide",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Hustle Step",
				fr: "Foulée rapide",
				de: "Übereifriger Schritt"
			},
			effect: {
				en: "Once during your turn (before your attack), you may remove 1 damage counter from each of your Pokémon. This power can’t be used if Bellossom is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez retirer un marqueur de dégât à chacun de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Joliflor est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Schadensmarke von jedem deiner Pokémon entfernen. Diese Poké-Power kann nicht benutzt werden, wenn Blubella von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Dance ’til Dawn",
				fr: "Danse nocturne",
				de: "Tanz bis zum Morgen"
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads. Bellossom is now Asleep.",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face. Joliflor est maintenant Endormi.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu. Blubella schläft jetzt."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Bellossom gather at times and seem to dance. They say that the dance is a ritual to summon the sun."
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		},
		{
			type: "normal"
		},
	],

	thirdParty: {
		cardmarket: 279254,
		tcgplayer: 83801
	}
}

export default card
