import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Arcanine ex",
		fr: "Arcanin ex",
		de: "Arkani ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		59,
	],

	hp: 120,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos"
	},

	suffix: "EX",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fire Remedy",
				fr: "Remède de feu",
				de: "Feuriges Heilmittel"
			},
			effect: {
				en: "Whenever you attach a Fire Energy from your hand to Arcanine ex, remove 1 damage counter and all Special Conditions from Arcanine ex.",
				fr: "Lorsque vous attachez une Énergie  de votre main à Arcanin ex, retirez-lui 1 marqueur de dégât et tous ses États Spéciaux.",
				de: "Immer wenn du eine -Energiekarte von deiner Hand an Arkani ex anlegst, entferne 1 Schadensmarke und alle Speziellen Zustände von Arkani ex."
			},
		},
	],

	attacks: [
		{
			name: {
				en: "Overrun",
				fr: "Dépassement",
				de: "Überrennen"
			},

			effect: {
				en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt 1 gegnerischen Pokémon auf der Bank 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

			cost: ["Fire", "Colorless"],
			damage: 30
		},
		{
			cost: [ 'Fire', 'Fire', 'Colorless' ],
			name: {
				fr: 'Tourbillon de flamme',
				de: "Flammenwirbel"
			},
			effect: {
				fr: 'Défaussez 2 Énergies  ou 1 carte Énergie réaction attachée à Arcanin ex.',
				de: "Lege 2 -Energie oder 1 Reaktions-Energiekarte, die an Arkani ex angelegt ist, auf deinen Ablagestapel."
			},
			damage: 100
		}
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276960,
		tcgplayer: 83590
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
