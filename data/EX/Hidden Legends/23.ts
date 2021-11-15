import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Rain Castform",
		fr: "Morpheo Pluie"
	},
	illustrator: "Jungo Suzuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		351,
	],
	hp: 60,
	types: [
		"Water",
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
				en: "Once during your turn (before your attack), you may search your deck for Castform, Sunny Castform, or Snow-cloud Castform and switch it with Rain Castform. (Any cards attached to Rain Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Rain Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck Morpheo, Morpheo Soleil ou Morpheo Neige et l'échanger avec Morpheo Pluie. (Toutes les cartes attachées à Morpheo Pluie, les marqueurs de dégât et les effets se trouvent maintenant sur le nouveau Pokémon.) Mélangez Morpheo Pluie à votre deck. Vous ne pouvez pas utiliser plus d'1 Météo capricieuse par tour."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Scattered Shower",
				fr: "Douche à basse pression"
			},
			effect: {
				en: "Shuffle your hand into your deck. Draw up to 5 cards.",
				fr: "Mélangez votre main avec votre deck. Piochez jusqu'à 5 cartes."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rainy Day Blues",
				fr: "Blues de jour de pluie"
			},
			effect: {
				en: "If Low Pressure System is in play, the Defending Pokémon is now Confused.",
				fr: "Si Système à basse pression est en jeu, le Pokémon Défenseur est maintenant Confus."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
