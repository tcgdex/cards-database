import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [900],
	set: Set,

	name: {
		'en-us': "Kleavor",
		'fr-fr': "Hachécateur",
		'es-es': "Kleavor",
		'it-it': "Kleavor",
		'pt-br': "Kleavor",
		'de-de': "Axantor"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur",
		'es-es': "Scyther",
		'it-it': "Scyther",
		'pt-br': "Scyther",
		'de-de': "Sichlor"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rout",
			'fr-fr': "Débâcle",
			'es-es': "Esparcir",
			'it-it': "Stanamento",
			'pt-br': "Efeito Cascata",
			'de-de': "Verheerung"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each of your opponent's Benched Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Pokémon nella panchina del tuo avversario.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 30 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Rocky Tackle",
			'fr-fr': "Tacle Rocailleux",
			'es-es': "Placaje Rocoso",
			'it-it': "Azione Rocciosa",
			'pt-br': "Investida Pedregosa",
			'de-de': "Steiniger Tackle"
		},

		effect: {
			'en-us': "This Pokémon also does 50 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 50 dégâts.",
			'es-es': "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 50 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "A violent creature that fells towering trees with its crude axes and shields itself with hard stone. If one should chance upon this Pokémon in the wilds, one's only recourse is to flee.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658702,
				tcgplayer: 272286
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658702,
				tcgplayer: 272286
			}
		},
	],
}

export default card
