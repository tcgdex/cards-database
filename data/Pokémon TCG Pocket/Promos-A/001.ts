import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Potion",
		fr: "Potion",
		es: "Poción",
		it: "Pozione",
		de: "Trank",
		'pt-br': "Poção",
		ko: "상처약"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Trainer",

	effect: {
		en: "Heal 20 damage from 1 of your Pokémon.",
		fr: "Soignez 20 dégâts d'un de vos Pokémon.",
		es: "Cura 20 puntos de daño a 1 de tus Pokémon.",
		it: "Cura uno dei tuoi Pokémon da 20 danni.",
		de: "Heile 20 Schadenspunkte bei 1 deiner Pokémon.",
		'pt-br': "Cure 20 pontos de dano de 1 dos seus Pokémon.",
		ko: "자신의 포켓몬 1마리의 HP를 20회복."
	},

	trainerType: "Item"
}

export default card
