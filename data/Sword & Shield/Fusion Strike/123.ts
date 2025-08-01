import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [561],
	set: Set,

	name: {
		en: "Sigilyph",
		fr: "Cryptéro",
		es: "Sigilyph",
		it: "Sigilyph",
		pt: "Sigilyph",
		de: "Symvolara"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Yukiko Baba",

	description: {
		en: "A discovery was made in the desert where Sigilyph fly. The ruins of what may have been an ancient city were found beneath the sands."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Joust",
			fr: "Joute",
			de: "Lanzenstich",
			es: "Justa",
			pt: "Justar",
			it: "Giostra"
		},

		damage: 20,

		effect: {
			en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
			fr: "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			de: "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			es: "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
			pt: "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
			it: "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Reflect Energy",
			fr: "Renvoi d'Énergie",
			de: "Energiereflexion",
			es: "Reflejar Energía",
			pt: "Refletir Energia",
			it: "Rifletti Energia"
		},

		damage: 60,

		effect: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			de: "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			es: "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
			pt: "Mova 1 Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
			it: "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582649
	}
}

export default card