import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Big Malasada",
		'fr-fr': "Malasada Maxi",
		'es-es': "Malasada Maxi",
		'it-it': "Malasada maxi",
		'de-de': "Maxi-Malasada",
		'pt-br': "Sonho Recheado Grande",
		'ko-kr': "큰 말라사다"
	},

	illustrator: "5ban Graphics",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "Heal 10 damage and remove a random Special Condition from your Active Pokémon.",
		'fr-fr': "Soignez 10 dégâts et retirez un État Spécial au hasard de votre Pokémon Actif.",
		'es-es': "Cura 10 puntos de daño y elimina 1 Condición Especial aleatoria de tu Pokémon Activo.",
		'it-it': "Cura il tuo Pokémon attivo da 10 danni e guariscilo da una condizione speciale a caso.",
		'de-de': "Heile 10 Schadenspunkte bei deinem Aktiven Pokémon, und es erholt sich von 1 zufälligen Speziellen Zustand.",
		'pt-br': "Cure 10 pontos de dano e remova Condição Especial aleatória do seu Pokémon Ativo.",
		'ko-kr': "자신의 배틀 포켓몬의 HP를 10회복하고 특수 상태도 랜덤으로 1가지 회복."
	},

	trainerType: "Item",
	boosters: ["solgaleo", "lunala"]
}

export default card