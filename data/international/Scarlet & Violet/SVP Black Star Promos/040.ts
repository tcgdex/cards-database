import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [921],
	set: Set,

	name: {
		'en-us': "Pawmi",
		'fr-fr': "Pohm",
		'es-es': "Pawmi",
		'it-it': "Pawmi",
		'pt-br': "Pawmi",
		'de-de': "Pamo"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Static Slap",
			'fr-fr': "Gifle Statique",
			'es-es': "Bofetada Estática",
			'it-it': "Sberla Statica",
			'pt-br': "Tapa Estático",
			'de-de': "Statischer Stoß"
		},

		effect: {
			'en-us': "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	illustrator: "Ryuta Fuse",
	description: {
		'en-us': "It has underdeveloped electric sacs on its cheeks. These sacs can produce electricity only if Pawmi rubs them furiously with the pads on its forepaws.",
	},
	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 512043
			},
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 715755,
				tcgplayer: 607764
			},
		}
	],
}

export default card
