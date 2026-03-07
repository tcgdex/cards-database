import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Cynthia's Spiritomb",
		fr: "Spiritomb de Cynthia",
		es: "Spiritomb de Cintia",
		'es-mx': "Spiritomb de Cynthia",
		de: "Cynthias Kryppuk",
		it: "Spiritomb di Camilla",
		pt: "Spiritomb da Cíntia"
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
			en: "Raging Curse",
			fr: "Malédiction Furieuse",
			es: "Maldición Furiosa",
			'es-mx': "Maldición Iracunda",
			de: "Wütender Fluch",
			it: "Maledizione Furiosa",
			pt: "Maldição Devastadora"
		},

		effect: {
			en: "This attack does 10 damage for each damage counter on all of your Benched Cynthia's Pokémon. This attack's damage isn't affected by Weakness.",
			fr: "Cette attaque inflige 10 dégâts pour chaque marqueur de dégâts sur tous vos Pokémon de Cynthia de Banc. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
			es: "Este ataque hace 10 puntos de daño por cada contador de daño en cada uno de tus Pokémon de Cintia en Banca. El daño de este ataque no se ve afectado por Debilidad.",
			'es-mx': "Este ataque hace 10 puntos de daño por cada contador de daño en cada uno de tus Pokémon de Cynthia en Banca. El daño de este ataque no se ve afectado por Debilidad.",
			de: "Diese Attacke fügt für jede Schadensmarke auf allen Cynthias Pokémon auf deiner Bank 10 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche nicht verändert.",
			it: "Questo attacco infligge 10 danni per ogni segnalino danno presente sui tuoi Pokémon di Camilla in panchina. I danni di questo attacco non sono influenzati dalla debolezza.",
			pt: "Este ataque causa 10 pontos de dano para cada contador de dano em todos os seus Pokémon da Cíntia no Banco. O dano deste ataque não é afetado por Fraqueza."
		},

		damage: "10×"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 676056,
		cardmarket: 869855
	}
}

export default card
