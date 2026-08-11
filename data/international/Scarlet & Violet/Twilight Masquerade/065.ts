import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [145],
	set: Set,

	name: {
		'en-us': "Zapdos",
		'fr-fr': "Électhor",
		'es-es': "Zapdos",
		'it-it': "Zapdos",
		'pt-br': "Zapdos",
		'de-de': "Zapdos"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Thunder Wave",
			'fr-fr': "Cage Éclair",
			'es-es': "Onda Trueno",
			'it-it': "Tuononda",
			'pt-br': "Onda de Trovão",
			'de-de': "Donnerwelle"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Thunderbolt",
			'fr-fr': "Tonnerre",
			'es-es': "Rayo",
			'it-it': "Fulmine",
			'pt-br': "Relâmpago",
			'de-de': "Donnerblitz"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon.",
			'fr-fr': "Défaussez toutes les Énergies de ce Pokémon.",
			'es-es': "Descarta todas las Energías de este Pokémon.",
			'it-it': "Scarta tutte le Energie da questo Pokémon.",
			'pt-br': "Descarte todas as Energias deste Pokémon.",
			'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 190
	}],

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
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "This Pokémon has complete control over electricity. There are tales of Zapdos nesting in the dark depths of pitch-black thunderclouds.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 769239,
				tcgplayer: 550109
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769239,
				tcgplayer: 550109
			}
		},
	],

	illustrator: "GOSSAN",

}

export default card
