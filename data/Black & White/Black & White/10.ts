import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Lilligant",
		fr: "Fragilady",
		es: "Lilligant",
		it: "Lilligant",
		pt: "Lilligant",
		de: "Dressella"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		549,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Petilil",
		fr: "Chlorobule",
		de: "Lilminip"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Petal Dance",
				fr: "Danse-Fleur",
				de: "Blättertanz"
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads. This Pokémon is now Confused.",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face. Ce Pokémon est maintenant Confus.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl „Kopf“ zu. Dieses Pokémon ist jetzt verwirrt."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leaf Storm",
				fr: "Tempêteverte",
				de: "Blättersturm"
			},
			effect: {
				en: "Heal 20 damage from each of your Grass Pokémon.",
				fr: "Soignez 20 dégâts à chacun de vos Pokémon Grass.",
				de: "Heile 20 Schadenspunkte bei jedem deiner {G}-Pokémon."
			},
			damage: 30,

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
		en: "The fragrance of the garland on its head has a relaxing effect. It withers if a Trainer does not take good care of it.",
		de: "Der Duft des Blumenschmucks auf seinem Kopf wirkt beruhigend. Damit der Schmuck nicht verwelkt, muss man es gut pflegen."
	},

	thirdParty: {
		cardmarket: 279748,
		tcgplayer: 86792
	}
}

export default card
