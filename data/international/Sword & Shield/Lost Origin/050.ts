import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [845],
	set: Set,

	name: {
		'en-us': "Cramorant",
		'fr-fr': "Nigosier",
		'es-es': "Cramorant",
		'it-it': "Cramorant",
		'pt-br': "Cramorant",
		'de-de': "Urgl"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Lost Provisions",
			'fr-fr': "Provisions Perdues",
			'es-es': "Provisiones Perdidas",
			'it-it': "Scorte Perdute",
			'pt-br': "Suprimentos Perdidos",
			'de-de': "Nirgendwo-Vorrat"
		},

		effect: {
			'en-us': "If you have 4 or more cards in the Lost Zone, ignore all Energy in this Pokémon's attack costs.",
			'fr-fr': "Si vous avez 4 cartes ou plus dans la Zone Perdue, ignorez toutes les Énergies dans le coût des attaques de ce Pokémon.",
			'es-es': "Si tienes 4 cartas o más en la Zona Perdida, ignora todas las Energías en el coste de los ataques de este Pokémon.",
			'it-it': "Se hai quattro o più carte nell'area perduta, ignora tutte le Energie necessarie per usare gli attacchi di questo Pokémon.",
			'pt-br': "Se você tiver 4 ou mais cartas na Zona Perdida, ignore todas as Energias nos custos dos ataques deste Pokémon.",
			'de-de': "Wenn du 4 oder mehr Karten im Nirgendwo hast, ignoriere alle Energien in den Attackenkosten dieses Pokémon."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Spit Innocently",
			'fr-fr': "Rejet Innocent",
			'es-es': "Escupitajo Inocente",
			'it-it': "Candidosputo",
			'pt-br': "Cusparada Inocente",
			'de-de': "Unschuldiges Spucken"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by Weakness.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
			'es-es': "El daño de este ataque no se ve afectado por Debilidad.",
			'it-it': "I danni di questo attacco non sono influenzati dalla debolezza.",
			'pt-br': "O dano deste ataque não é afetado por Fraqueza.",
			'de-de': "Der Schaden dieser Attacke wird durch Schwäche nicht verändert."
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674060,
				tcgplayer: 283924
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674060,
				tcgplayer: 283924
			}
		},
	],
}

export default card
