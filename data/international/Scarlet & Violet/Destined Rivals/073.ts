import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [180],
	set: Set,

	name: {
		'en-us': "Team Rocket's Flaaffy",
		'fr-fr': "Lainergie de la Team Rocket",
		'de-de': "Team Rockets Waaty",
		'it-it': "Flaaffy del Team Rocket",
		'es-es': "Flaaffy del Team Rocket",
		'pt-br': "Flaaffy da Equipe Rocket",
		'es-mx': "Flaaffy del Equipo Rocket"
	},


	illustrator: "Jerky",

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Team Rocket's Mareep",
		'fr-fr': "Wattouat de la Team Rocket",
		'de-de': "Team Rockets Voltilamm",
		'it-it': "Mareep del Team Rocket",
		'es-es': "Mareep del Team Rocket",
		'pt-br': "Mareep da Equipe Rocket",
		'es-mx': "Mareep del Equipo Rocket"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Thunder Shock",
			'fr-fr': "Éclair",
			'de-de': "Donnerschock",
			'it-it': "Tuonoshock",
			'es-es': "Impactrueno",
			'pt-br': "Trovoada de Choques",
			'es-mx': "Impactrueno"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825947,
				tcgplayer: 632883
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825947,
				tcgplayer: 632883
			}
		},
	],
}

export default card
