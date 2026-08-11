import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [479],
	set: Set,

	name: {
		'en-us': "Mow Rotom",
		'fr-fr': "Motisma Tonte",
		'es-es': "Rotom Corte",
		'it-it': "Rotom Taglio",
		'pt-br': "Rotom Corte",
		'de-de': "Schneid-Rotom"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Reaping Dash",
			'fr-fr': "Ruée Faucheuse",
			'es-es': "Carrera Segadora",
			'it-it': "Falciscatto",
			'pt-br': "Arremetida Ceifadora",
			'de-de': "Mähender Sprint"
		},

		effect: {
			'en-us': "Before doing damage, discard all Pokémon Tools and Special Energy from your opponent's Active Pokémon.",
			'fr-fr': "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon et toutes les Énergies spéciales du Pokémon Actif de votre adversaire.",
			'es-es': "Antes de infligir daño, descarta todas las Herramientas Pokémon y Energías Especiales del Pokémon Activo de tu rival.",
			'it-it': "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon e le Energie speciali dal Pokémon attivo del tuo avversario.",
			'pt-br': "Antes de causar dano, descarte todas as Ferramentas Pokémon e Energias Especiais do Pokémon Ativo do seu oponente.",
			'de-de': "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen und Spezial-Energien vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785861,
				tcgplayer: 567234
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785861,
				tcgplayer: 567234
			}
		},
	],

	illustrator: "Amelicart",

}

export default card
