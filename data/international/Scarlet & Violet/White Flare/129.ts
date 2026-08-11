import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [526],
	set: Set,

	name: {
		'en-us': "Gigalith",
		'fr-fr': "Gigalithe",
		'de-de': "Brockoloss",
		'it-it': "Gigalith",
		'pt-br': "Gigalith",
		'es-es': "Gigalith",
		'es-mx': "Gigalith"
	},

	illustrator: "toi8",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Boldore",
		'fr-fr': "Géolithe",
		'de-de': "Sedimantur",
		'it-it': "Boldore",
		'pt-br': "Boldore",
		'es-es': "Boldore",
		'es-mx': "Boldore"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Vengeful Cannon",
			'fr-fr': "Canon Vengeur",
			'de-de': "Rachekanone",
			'it-it': "Cannone Vendicativo",
			'pt-br': "Canhão Vingativo",
			'es-es': "Cañón Vengativo",
			'es-mx': "Cañón Vengativo"
		},

		effect: {
			'en-us': "This attack does 20 damage for each damage counter on all of your Benched {F} Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts sur tous vos Pokémon {F} de Banc.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf allen {F}-Pokémon auf deiner Bank 20 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 20 danni per ogni segnalino danno presente sui tuoi Pokémon {F} in panchina.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada contador de dano em todos os seus Pokémon {F} no Banco.",
			'es-es': "Este ataque hace 20 puntos de daño por cada contador de daño en cada uno de tus Pokémon {F} en Banca.",
			'es-mx': "Este ataque hace 20 puntos de daño por cada contador de daño en cada uno de tus Pokémon {F} en Banca."
		},

		damage: "20×"
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			'en-us': "Heavy Impact",
			'fr-fr': "Gros Impact",
			'de-de': "Schwerer Einschlag",
			'it-it': "Impatto Pesante",
			'pt-br': "Impacto Pesado",
			'es-es': "Impacto Pesado",
			'es-mx': "Impacto Pesado"
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836147,
				tcgplayer: 642242
			}
		},
	],
}

export default card
