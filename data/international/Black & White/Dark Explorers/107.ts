import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Darkrai-EX",
		fr: "Darkrai-EX",
		es: "Darkrai-EX",
		it: "Darkrai-EX",
		pt: "Darkrai-EX",
		de: "Darkrai-EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		491,
	],

	hp: 180,

	types: [
		"Darkness",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dark Cloak",
				fr: "Cape Obscure",
				es: "Manto Oscuro",
				it: "Mantelnero",
				pt: "Manto da Escuridão",
				de: "Finsterumhang"
			},
			effect: {
				en: "Each of your Pokémon that has any Darkness Energy attached to it has no Retreat Cost.",
				fr: "Chacun de vos Pokémon auquel de l’Énergie Darkness est attachée n’a pas de coût de Retraite.",
				es: "Cada uno de tus Pokémon que tenga cualquier Energía Darkness unida a él no tiene ningún Coste de Retirada.",
				it: "Nessuno dei tuoi Pokémon che ha delle Energie Darkness assegnate ha costo di ritirata.",
				pt: "Cada um de seus Pokémon que possui qualquer Energia Darkness ligada não possui Custo para Recuar.",
				de: "Jedes deiner Pokémon, an dem Darkness-Energie angelegt ist, hat keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Night Spear",
				fr: "Javelot Nocturne"
			},
			effect: {
				en: "Does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 30 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2
}

export default card
