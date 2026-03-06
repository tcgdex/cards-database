import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Gastly",
		fr: "Fantominus",
		de: "Nebulak",
		it: "Gastly"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		92,
	],

	hp: 30,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Sleeping Gas",
				fr: "Gaz Soporifique",
				de: "Schlafgas",
				it: "Gas soporifero"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon schlafend.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Addormentato."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Destiny Bond",
				fr: "Prélèvement du Destin",
				de: "Schicksalsband",
				it: "Destino obbligato"
			},
			effect: {
				en: "Discard 1 Energy card attached to Gastly in order to use this attack. If a Pokémon Knocks Out Gastly during your opponent's next turn, Knock Out that Pokémon.",
				fr: "Défaussez 1 carte Énergie  attachée à Fantominus pour pouvoir utiliser cette attaque. Si un Pokémon met Fantominus K.O. pendant le prochain tour de votre adversaire, mettez ce Pokémon K.O.",
				de: "Entferne eine auf Nebulak abgelegte  Energiekarte, um diesen Angriff auzuführen. Falls ein Pokémon Nebulak während des nächsten gegnerischen Zugs kampufunfähig macht, mache dieses Pokémon kampfunfähig.",
				it: "Scarta una carta Energia Psico assegnata a Gastly per usare questo attacco. Se un Pokémon mette K.O. Gastly durante il prossimo turno del tuo avversario, anche quel Pokémon verrà messo K.O."
			},

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Ce Pokémon gazeux plonge ses victimes dans un profond sommeil sans qu'elles s'en aperçoivent.",
		it: "Praticamente invisibile, questo Pokémon gassoso avvolge la sua preda in una nuvola di gas che la fa immediatamente addormentare. LIV 8 N.92"
	},

	thirdParty: {
		cardmarket: 273745,
		tcgplayer: 42394
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
