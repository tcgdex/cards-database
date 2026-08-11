import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,


	name: {
		'en-us': "Cinccino ex",
		'fr-fr': "Pashmilla-ex",
		'es-es': "Cinccino ex",
		'es-mx': "Cinccino ex",
		'de-de': "Chillabell-ex",
		'it-it': "Cinccino-ex",
		'pt-br': "Cinccino ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [573],
	hp: 240,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Minccino"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Smooth Coat",
			'fr-fr': "Pelage Lustré",
			'es-es': "Manto Suave",
			'es-mx': "Pelaje Suave",
			'de-de': "Geschmeidiger Mantel",
			'it-it': "Pelliscia",
			'pt-br': "Manto Suave"
		},

		effect: {
			'en-us': "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
			'fr-fr': "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c'est face, évitez ces dégâts.",
			'es-es': "Si se inflige cualquier daño a este Pokémon por ataques, lanza 1 moneda. Si sale cara, se evita ese daño.",
			'es-mx': "Si se inflige algún punto de daño a este Pokémon por ataques, lanza 1 moneda. Si sale cara, se evita ese daño.",
			'de-de': "Wenn diesem Pokémon durch Attacken Schaden zugefügt wird, wirf 1 Münze. Verhindere bei Kopf jenen Schaden.",
			'it-it': "Se vengono inflitti dei danni a questo Pokémon da qualsiasi attacco, lancia una moneta. Se esce testa, previeni quei danni.",
			'pt-br': "Se qualquer dano for causado a este Pokémon por ataques, jogue uma moeda. Se sair cara, previna aquele dano."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Energized Slap",
			'fr-fr': "Gifle Énergisée",
			'es-es': "Bofetada Energética",
			'es-mx': "Bofetón Energético",
			'de-de': "Energischer Klatscher",
			'it-it': "Sberla Energizzata",
			'pt-br': "Tapa Energizado"
		},

		cost: ["Colorless"],
		damage: "40×",

		effect: {
			'en-us': "This attack does 40 damage for each Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts pour chaque Énergie attachée à ce Pokémon.",
			'es-es': "Este ataque hace 40 puntos de daño por cada Energía unida a este Pokémon.",
			'es-mx': "Este ataque hace 40 puntos de daño por cada Energía unida a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Energie 40 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 40 danni per ogni Energia assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 40 pontos de dano para cada Energia ligada a este Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 886465,
				tcgplayer: 693463
			}
		},
	],
}

export default card
