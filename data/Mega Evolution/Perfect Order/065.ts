import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Diggersby",
		fr: "Excavarenne",
		es: "Diggersby",
		de: "Grebbit",
		it: "Diggersby",
		pt: "Diggersby"
	},
	set: Set,
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [
		660
	],
	hp: 150,
	types: [
		"Colorless"
	],
	stage: "Stage1",
	evolveFrom: {
		en: "Bunnelby",
		fr: "Sapereau",
		es: "Bunnelby",
		de: "Scoppel",
		it: "Bunnelby",
		pt: "Bunnelby"
	},
	attacks: [
		{
			cost: [
				"Colorless"
			],
			name: {
				en: "Earthquake",
				fr: "Séisme",
				es: "Terremoto",
				de: "Erdbeben",
				it: "Terremoto",
				pt: "Terremoto"
			},
			damage: "140",
			effect: {
				en: "This attack also does 30 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige aussi 30 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque también hace 30 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				de: "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)",
				it: "Questo attacco infligge anche 30 danni a ciascuno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque também causa 30 pontos de dano a cada um dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)"
			}
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			name: {
				en: "Whap Down",
				fr: "Assommer",
				es: "Zurrar",
				de: "Verdreschen",
				it: "Bastonata",
				pt: "Golpe Ligeiro"
			},
			damage: "100"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 4,
	regulationMark: "J",
	illustrator: "Mousho",
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],
	thirdParty: {
		tcgplayer: 684442,
		cardmarket: 877481
	}
}

export default card
