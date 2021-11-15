import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Arcanine ex",
		fr: "Arcanin ex"
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
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fire Remedy",
				fr: "Remède de feu"
			},
			effect: {
				en: "Whenever you attach a Fire Energy from your hand to Arcanine ex, remove 1 damage counter and all Special Conditions from Arcanine ex.",
				fr: "Lorsque vous attachez une Énergie  de votre main à Arcanin ex, retirez-lui 1 marqueur de dégât et tous ses États Spéciaux."
			},
		},
	],
	attacks: [
		{
			name: {
				en: "Overrun",
				fr: "Dépassement"
			},

			effect: {
				en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},

			cost: ["Fire", "Colorless"],
			damage: 30
		},
		{
			cost: [ 'Fire', 'Fire', 'Colorless' ],
			name: { fr: 'Tourbillon de flamme' },
			effect: {
				fr: 'Défaussez 2 Énergies  ou 1 carte Énergie réaction attachée à Arcanin ex.'
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





}

export default card
