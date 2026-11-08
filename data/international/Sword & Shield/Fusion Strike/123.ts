import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [561],
	set: Set,

	name: {
		'en-us': "Sigilyph",
		'fr-fr': "Cryptéro",
		'es-es': "Sigilyph",
		'it-it': "Sigilyph",
		'pt-br': "Sigilyph",
		'de-de': "Symvolara"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Yukiko Baba",

	description: {
		'en-us': "A discovery was made in the desert where Sigilyph fly. The ruins of what may have been an ancient city were found beneath the sands."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Joust",
			'fr-fr': "Joute",
			'de-de': "Lanzenstich",
			'es-es': "Justa",
			'pt-br': "Justar",
			'it-it': "Giostra"
		},

		damage: 20,

		effect: {
			'en-us': "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon.",
			'fr-fr': "Avant d'infliger des dégâts, défaussez tous les Outils Pokémon du Pokémon Actif de votre adversaire.",
			'de-de': "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'es-es': "Antes de infligir daño, descarta todas las Herramientas Pokémon del Pokémon Activo de tu rival.",
			'pt-br': "Antes de causar dano, descarte todas as Ferramentas Pokémon do Pokémon Ativo do seu oponente.",
			'it-it': "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon dal Pokémon attivo del tuo avversario."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Reflect Energy",
			'fr-fr': "Renvoi d'Énergie",
			'de-de': "Energiereflexion",
			'es-es': "Reflejar Energía",
			'pt-br': "Refletir Energia",
			'it-it': "Rifletti Energia"
		},

		damage: 60,

		effect: {
			'en-us': "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			'fr-fr': "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			'de-de': "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank.",
			'es-es': "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
			'pt-br': "Mova 1 Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
			'it-it': "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582649,
				tcgplayer: 253303
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582649,
				tcgplayer: 253303
			}
		},
	],
}

export default card
