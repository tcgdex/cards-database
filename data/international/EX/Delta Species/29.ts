import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Snow-cloud Castform",
		fr: "Morpheo Neige",
		de: "Schneesturm Formeo"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		351,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Temperamental Weather",
				fr: "Météo capricieuse",
				de: "Temperamental Weather"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for Castform, Rain Castform, or Sunny Castform and switch it with Snow-cloud Castform. (Any cards attached to Snow-cloud Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Snow-cloud Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck Morpheo, Morpheo Pluie ou Morpheo Soleil et l'échanger avec Morpheo Neige. (Toutes les cartes attachées à Morpheo Neige, les marqueurs de dégât, les États Spéciaux et les effets se trouvent maintenant sur le nouveau Pokémon.) Mélangez Morpheo Neige à votre deck. Vous ne pouvez pas utiliser plus d'1 Météo capricieuse par tour.",
				de: "Once during your turn (before your attack), you may search your deck for Castform, Rain Castform, or Sunny Castform and switch it with Snow-cloud Castform. (Any cards attached to Snow-cloud Castform, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) Shuffle Snow-cloud Castform back into your deck. You can't use more than 1 Temperamental Weather Poké-Power each turn."
			},
		},
	],

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				en: "Holon Blizzard",
				fr: "Blizzard Holon",
				de: "Holon Blizzard"
			},
			effect: {
				en: "If Snow-cloud Castform has any Holon Energy cards attached to it, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si Morpheo Neige possède des cartes Énergie Holon, cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "If Snow-cloud Castform has any Holon Energy cards attached to it, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 276792,
		tcgplayer: 89409
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

