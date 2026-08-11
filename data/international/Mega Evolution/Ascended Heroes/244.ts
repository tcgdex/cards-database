import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cynthia's Spiritomb",
		'fr-fr': "Spiritomb de Cynthia",
		'es-es': "Spiritomb de Cintia",
		'es-mx': "Spiritomb de Cynthia",
		'de-de': "Cynthias Kryppuk",
		'it-it': "Spiritomb di Camilla",
		'pt-br': "Spiritomb da Cíntia"
	},

	illustrator: "hncl",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Raging Curse",
			'fr-fr': "Malédiction Furieuse",
			'es-es': "Maldición Furiosa",
			'es-mx': "Maldición Iracunda",
			'de-de': "Wütender Fluch",
			'it-it': "Maledizione Furiosa",
			'pt-br': "Maldição Devastadora"
		},

		effect: {
			'en-us': "This attack does 10 damage for each damage counter on all of your Benched Cynthia's Pokémon. This attack's damage isn't affected by Weakness.",
			'fr-fr': "Cette attaque inflige 10 dégâts pour chaque marqueur de dégâts sur tous vos Pokémon de Cynthia de Banc. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
			'es-es': "Este ataque hace 10 puntos de daño por cada contador de daño en cada uno de tus Pokémon de Cintia en Banca. El daño de este ataque no se ve afectado por Debilidad.",
			'es-mx': "Este ataque hace 10 puntos de daño por cada contador de daño en cada uno de tus Pokémon de Cynthia en Banca. El daño de este ataque no se ve afectado por Debilidad.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf allen Cynthias Pokémon auf deiner Bank 10 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche nicht verändert.",
			'it-it': "Questo attacco infligge 10 danni per ogni segnalino danno presente sui tuoi Pokémon di Camilla in panchina. I danni di questo attacco non sono influenzati dalla debolezza.",
			'pt-br': "Este ataque causa 10 pontos de dano para cada contador de dano em todos os seus Pokémon da Cíntia no Banco. O dano deste ataque não é afetado por Fraqueza."
		},

		damage: "10×"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "Its constant mischief and misdeeds resulted in it being bound to an Odd Keystone by a mysterious spell.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869855,
				tcgplayer: 676056
			}
		}
	],
}

export default card
