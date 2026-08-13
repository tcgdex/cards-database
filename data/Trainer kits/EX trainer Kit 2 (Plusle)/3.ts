import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	dexId: [326],
	set: Set,

	name: {
		en: "Grumpig",
		fr: "Groret",
		de: "Groink"
	},

	illustrator: "Atsuko Nishida",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",
	hp: 70,

	types: [
		"Psychic"
	],

	evolveFrom: {
		en: "Spoink",
		fr: "Spoink",
		de: "Spoink"
	},

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			en: "Snap Tail",
			fr: "Claquement de queue",
			de: "Schnappender Schweif"
		},
		effect: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}, {
		cost: [
			"Psychic",
			"Colorless"
		],
		name: {
			en: "Psypunch",
			fr: "Coup de poing psy",
			de: "Psyhieb"
		},
		damage: 40
	}],

	weaknesses: [
		{
			type: "Psychic",
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 277183,
				tcgplayer: 85968
			}
		},
	],

}

export default card
