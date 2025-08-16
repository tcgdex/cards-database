import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [479],
	set: Set,

	name: {
		en: "Mow Rotom",
		fr: "Motisma Tonte",
		es: "Rotom Corte",
		it: "Rotom Taglio",
		pt: "Rotom Corte",
		de: "Schneid-Rotom"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Reaping Dash",
			fr: "Ruée Faucheuse",
			es: "Carrera Segadora",
			it: "Falciscatto",
			pt: "Arremetida Ceifadora",
			de: "Mähender Sprint"
		},

		effect: {
			en: "Before doing damage, discard all Pokémon Tools and Special Energy from your opponent's Active Pokémon.",
			fr: "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon et toutes les Énergies spéciales du Pokémon Actif de votre adversaire.",
			es: "Antes de infligir daño, descarta todas las Herramientas Pokémon y Energías Especiales del Pokémon Activo de tu rival.",
			it: "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon e le Energie speciali dal Pokémon attivo del tuo avversario.",
			pt: "Antes de causar dano, descarte todas as Ferramentas Pokémon e Energias Especiais do Pokémon Ativo do seu oponente.",
			de: "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen und Spezial-Energien vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Amelicart",

	thirdParty: {
		cardmarket: 785861
	}
}

export default card
