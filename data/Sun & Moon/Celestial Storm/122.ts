import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Kecleon",
		fr: "Kecleon",
		es: "Kecleon",
		it: "Kecleon",
		pt: "Kecleon",
		de: "Kecleon"
	},

	illustrator: "OOYAMA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		352,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Unit Color 2",
				fr: "Couleur Unitaire 2",
				es: "Color Unidad 2",
				it: "Unione Colore 2",
				pt: "Cor Unitária 2",
				de: "Aggregat-Farbe 2"
			},
			effect: {
				en: "As long as this Pokémon has Unit Energy LightningPsychicMetal attached to it, it is a Lightning, Psychic, and Metal Pokémon.",
				fr: "Tant que de l’Énergie Unitaire LightningPsychicMetal est attachée à ce Pokémon, c’est un Pokémon Lightning, Psychic et Metal.",
				es: "Mientras este Pokémon tenga alguna carta de Energía Unidad LightningPsychicMetal unida a él, es un Pokémon Lightning, Psychic y Metal.",
				it: "Fintanto che ha delle carte Energia Unione LightningPsychicMetal assegnate, questo Pokémon è di tipo Lightning, Psychic e Metal.",
				pt: "Enquanto este Pokémon tiver Energia Unitária LightningPsychicMetal ligada a ele, será um Pokémon Lightning, Psychic e Metal.",
				de: "Solang an dieses Pokémon Aggregat-Energie LightningPsychicMetal angelegt ist, ist es ein Lightning-, Psychic- und Metal-Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				es: "Cuchillada",
				it: "Lacerazione",
				pt: "Talho",
				de: "Schlitzer"
			},

			damage: 80,

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
		cardmarket: 361361,
		tcgplayer: 170983
	}
}

export default card
