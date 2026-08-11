import { Card } from "models/database/card"
import Set from "../Brilliant Stars Trainer Gallery"

const card: Card = {
	dexId: [869],
	set: Set,

	name: {
		'en-us': "Alcremie",
		'fr-fr': "Charmilly",
		'es-es': "Alcremie",
		'it-it': "Alcremie",
		'pt-br': "Alcremie",
		'de-de': "Pokusan"
	},

	illustrator: "OKACHEKE",
	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Milcery",
		'fr-fr': "Crèmy",
		'es-es': "Milcery",
		'it-it': "Milcery",
		'pt-br': "Milcery",
		'de-de': "Hokumil"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Additional Order",
			'fr-fr': "Supplément",
			'es-es': "Pedido Adicional",
			'it-it': "Altra Ordinazione",
			'pt-br': "Pedido Extra",
			'de-de': "Zusätzliche Bestellung"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, your turn does not end when you use Café Master.",
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, lorsque vous utilisez Barista, votre tour ne se termine pas.",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, tu turno no termina cuando uses Barista.",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, il tuo turno non finisce quando usi Barista.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, o seu turno não acabará quando você usar Mestre do Café.",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, endet dein Zug nicht, wenn du Barista einsetzt."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rainbow Flavor",
			'fr-fr': "Goût Arc-en-Ciel",
			'es-es': "Sabor Arcoíris",
			'it-it': "Gusto Arcobaleno",
			'pt-br': "Sabor de Arco-íris",
			'de-de': "Regenbogengeschmack"
		},

		effect: {
			'en-us': "This attack does 40 more damage for each type of basic Energy attached to all of your Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque type d'Énergie de base attachée à tous vos Pokémon.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada tipo de Energía Básica unida a todos tus Pokémon.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni tipo di Energia base assegnata ai tuoi Pokémon.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada tipo de Energia básica ligada a todos os seus Pokémon.",
			'de-de': "Diese Attacke fügt für jeden an alle deine Pokémon angelegten Basis-Energietyp 40 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",


	description: {
		'en-us': "When Alcremie is content, the cream it secretes from its hands becomes sweeter and richer.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608740,
				tcgplayer: 263787
			}
		},
	],
}

export default card
