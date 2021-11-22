import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Castform",
		fr: "Morpheo"
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		351,
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
				en: "Temperamental Weather",
				fr: "Météo capricieuse"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for Sunny Castform, Rain Castform, or Snow-cloud Castform and switch it with Castform. (Any cards attached to Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck Morpheo Soleil, Morpheo Pluie ou Morpheo Neige et l'échanger avec Morpheo. (Toutes les cartes attachées à Morpheo, les marqueurs de dégât et les effets se trouvent maintenant sur le nouveau Pokémon.) Mélangez Morpheo à votre deck. Vous ne pouvez pas utiliser plus d'1 Météo capricieuse par tour."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Forecast",
				fr: "Prévisions météo"
			},
			effect: {
				en: "Search your deck for a Stadium card and play it. Shuffle your deck afterward.",
				fr: "Choisissez une carte Stade dans votre deck et mettez-la en jeu. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Extra Ball",
				fr: "Boule suppplémentaire"
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, this attack does 20 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
