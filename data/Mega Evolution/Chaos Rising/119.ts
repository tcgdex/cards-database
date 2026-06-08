import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886512,
				tcgplayer: 693465
			}
		},
	],

	name: {
		en: "Cinccino ex",
		fr: "Pashmilla-ex",
		es: "Cinccino ex",
		'es-mx': "Cinccino ex",
		de: "Chillabell-ex",
		it: "Cinccino-ex",
		pt: "Cinccino ex"
	},

	illustrator: "Keisin",
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [573],
	hp: 240,
	types: ["Colorless"],

	evolveFrom: {
		en: "Mincinno"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Smooth Coat",
			fr: "Pelage Lustré",
			es: "Manto Suave",
			'es-mx': "Pelaje Suave",
			de: "Geschmeidiger Mantel",
			it: "Pelliscia",
			pt: "Manto Suave"
		},

		effect: {
			en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
			fr: "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c'est face, évitez ces dégâts.",
			es: "Si se inflige cualquier daño a este Pokémon por ataques, lanza 1 moneda. Si sale cara, se evita ese daño.",
			'es-mx': "Si se inflige algún punto de daño a este Pokémon por ataques, lanza 1 moneda. Si sale cara, se evita ese daño.",
			de: "Wenn diesem Pokémon durch Attacken Schaden zugefügt wird, wirf 1 Münze. Verhindere bei Kopf jenen Schaden.",
			it: "Se vengono inflitti dei danni a questo Pokémon da qualsiasi attacco, lancia una moneta. Se esce testa, previeni quei danni.",
			pt: "Se qualquer dano for causado a este Pokémon por ataques, jogue uma moeda. Se sair cara, previna aquele dano."
		}
	}],

	attacks: [{
		name: {
			en: "Energized Slap",
			fr: "Gifle Énergisée",
			es: "Bofetada Energética",
			'es-mx': "Bofetón Energético",
			de: "Energischer Klatscher",
			it: "Sberla Energizzata",
			pt: "Tapa Energizado"
		},

		cost: ["Colorless"],
		damage: "40×",

		effect: {
			en: "This attack does 40 damage for each Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 40 dégâts pour chaque Énergie attachée à ce Pokémon.",
			es: "Este ataque hace 40 puntos de daño por cada Energía unida a este Pokémon.",
			'es-mx': "Este ataque hace 40 puntos de daño por cada Energía unida a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Energie 40 Schadenspunkte zu.",
			it: "Questo attacco infligge 40 danni per ogni Energia assegnata a questo Pokémon.",
			pt: "Este ataque causa 40 pontos de dano para cada Energia ligada a este Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
}

export default card
