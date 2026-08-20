import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Lickilicky",
		fr: "Coudlangue",
		de: "Schlurplek"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [463],

	hp: 120,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Lickitung",
		fr: "Excelangue",
		de: "Schlurp"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Harrumph",
				fr: "Se racler la gorge",
				de: "Grumpf"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Before doing damage, discard all Trainer cards attached to that Pokémon.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 40 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Avant d'infliger des dégâts, défaussez toutes les cartes Dresseur attachées à ce Pokémon.",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) Bevor der Schaden zugefügt wird, entferne alle Trainerkarten, die an dem gewählten Pokémon angelegt sind, und lege sie auf den Ablagestapel deines Gegners."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Body Press",
				fr: "Presse corporelle",
				de: "Platt drücken"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and discard an Energy card attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Défaussez une carte Énergie attachée au Pokémon Défenseur.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt gelähmt und lege 1 am Verteidigenden Pokémon angelegte Energiekarte auf den Ablagestapel deines Gegners."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 4,

	description: {
		en: "The long tongue is always soggy with slobber. The saliva contains a solvent that causes numbness.",
		de: "Die lange Zunge ist immer feucht. Ihr Speichel enthält eine Substanz, die Taubheit hervorrufen kann."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 86713,
				cardmarket: 278454
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278454,
				tcgplayer: 86713
			}
		}
	],

}

export default card
