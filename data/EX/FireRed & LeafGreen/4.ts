import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Ditto",
		fr: "Metamorph",
		de: "Ditto"
	},

	illustrator: "MikiTanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		132,
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
				en: "Form Variation",
				fr: "Forme variable",
				de: "Formschwankung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your discard pile for a Basic Pokémon (excluding Pokémon-ex and Ditto) and switch it with Ditto. (Any cards attached to Ditto, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Place Ditto in the discard pile.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher un Pokémon de base dans votre pile de défausse (sauf les Pokémon-ex et Metamorph) et l'échanger avec Metamorph. (Toutes les cartes attachées à Metamorph, ainsi que les marqueurs de dégât, États Spéciaux et autres effets sont maintenant sur le nouveau Pokémon.) Défaussez Metamorph.",
				de: "Während deines Zuges (vor jedem Angriff) kannst du ein Mal deinen Ablagestapel nach einer Basis-Pokémon Karte (außer Pokémon-EX und Ditto) durchsuchen und gegen Ditto austauschen. (Alle an Ditto angelegten Karten, Schadensmarken, Spezial Zustände und andere Effekte werden auf das neue Pokémon übertragen.) Lege Ditto auf den Ablagestapel."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Ball",
				fr: "Boule d'Énergie",
				de: "Energieball"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to Ditto but not used to pay for this attack's Energy cost. You can't add more then 20 damage in this way.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée à Metamorph qui n'a pas été utilisée pour payer le Coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				de: "Dieser Angriff fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede an Dittp angelegte Energie zu, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wurde. Es lassen sich so nicht mehr als 20 Schadenspunkte hinzufügen."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276180,
		tcgplayer: 84831
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
