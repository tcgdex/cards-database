import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Darkrai-EX",
		'fr-fr': "Darkrai-EX",
		'es-es': "Darkrai-EX",
		'it-it': "Darkrai-EX",
		'pt-br': "Darkrai-EX",
		'de-de': "Darkrai-EX"
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
				'en-us': "Dark Cloak",
				'fr-fr': "Cape Obscure",
				'es-es': "Manto Oscuro",
				'it-it': "Mantelnero",
				'pt-br': "Manto da Escuridão",
				'de-de': "Finsterumhang"
			},
			effect: {
				'en-us': "Each of your Pokémon that has any Darkness Energy attached to it has no Retreat Cost.",
				'fr-fr': "Chacun de vos Pokémon auquel de l’Énergie Darkness est attachée n’a pas de coût de Retraite.",
				'es-es': "Cada uno de tus Pokémon que tenga cualquier Energía Darkness unida a él no tiene ningún Coste de Retirada.",
				'it-it': "Nessuno dei tuoi Pokémon che ha delle Energie Darkness assegnate ha costo di ritirata.",
				'pt-br': "Cada um de seus Pokémon que possui qualquer Energia Darkness ligada não possui Custo para Recuar.",
				'de-de': "Jedes deiner Pokémon, an dem Darkness-Energie angelegt ist, hat keine Rückzugskosten."
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
				'en-us': "Night Spear",
				'fr-fr': "Javelot Nocturne"
			},
			effect: {
				'en-us': "Does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 30 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
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
