import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [491],
	set: Set,

	name: {
		'fr-fr': "Darkrai",
		'en-us': "Darkrai",
		'es-es': "Darkrai",
		'it-it': "Darkrai",
		'pt-br': "Darkrai",
		'de-de': "Darkrai"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'fr-fr': "Sommeil Obscur",
			'en-us': "Dark Slumber",
			'es-es': "Letargo Oscuro",
			'it-it': "Sonno Oscuro",
			'pt-br': "Sono Sombrio",
			'de-de': "Dunkler Schlummer"
		},

		effect: {
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 20
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'fr-fr': "Cyclone Nocturne",
			'en-us': "Night Cyclone",
			'es-es': "Ciclón Nocturno",
			'it-it': "Ciclone Notturno",
			'pt-br': "Ciclone Noturno",
			'de-de': "Nachtsturm"
		},

		effect: {
			'fr-fr': "Déplacez toutes les Énergies de ce Pokémon vers vos Pokémon de Banc comme il vous plaît.",
			'en-us': "Move all Energy from this Pokémon to your Benched Pokémon in any way you like.",
			'es-es': "Mueve todas las Energías de este Pokémon a tus Pokémon en Banca de la manera que desees.",
			'it-it': "Sposta tutte le Energie da questo Pokémon a quelli nella tua panchina nel modo che preferisci.",
			'pt-br': "Mova todas as Energias deste Pokémon para os seus Pokémon no Banco como desejar.",
			'de-de': "Verschiebe alle Energien von diesem Pokémon beliebig auf die Pokémon auf deiner Bank."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It can lull people to sleep and make them dream. It is active during nights of the new moon.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725216,
				tcgplayer: 509900,
				cardtrader: 255821
			}
		},
		{
			type: 'holo',
			foil: 'galaxy',
			thirdParty: {
				cardmarket: 858721
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725216,
				tcgplayer: 509900,
				cardtrader: 255821
			}
		},
	],

	illustrator: "Bun Toujo",

	
}

export default card
