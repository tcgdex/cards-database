import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Huntail",
		fr: "Serpang",
		de: "Aalabyss"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		367,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Clamperl",
		fr: "Coquiperl",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				en: "Scary Face",
				fr: "Grimace",
				de: "Grimasse"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack or retreat during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer ou battre en retraite lors du prochain tour de votre adversaire.",
				de: "Wirf 1 Münze. Bei \"Kopf\" kann das Verteidigende Pokémon im nächsten Zug deines Gegners weder angreifen noch sich zurückziehen."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Threaten and Drop",
				fr: "Menacer et lâcher",
				de: "Bedrohen und Abwerfen"
			},
			effect: {
				en: "If Huntail has any Darkness Energy attached to it, this attack does 30 damage plus 20 more damage and discard a Special Energy card, if any, attached to the Defending Pokémon.",
				fr: "Si Serpang possède de l'Énergie Darkness, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires. Défaussez une carte Énergie spéciale attachée au Pokémon Défenseur, s'il en a.",
				de: "Wenn an Aalabyss mindestens 1 -Energie angelegt ist, fügt dieser Angriff 30 Schadenspunkte plus 20 weitere Schadenspunkte zu und lege, falls am Verteidigenden Pokémon eine Spezialenergiekarte angelegt ist, diese auf den Ablagestapel deines Gegners."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277944,
		tcgplayer: 86238
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
