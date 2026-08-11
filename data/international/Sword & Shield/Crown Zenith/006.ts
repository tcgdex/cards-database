import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [123],
	set: Set,

	name: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur",
		'es-es': "Scyther",
		'it-it': "Scyther",
		'pt-br': "Scyther",
		'de-de': "Sichlor"
	},

	illustrator: "Narumi Sato",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Mach Cut",
			'fr-fr': "Coupe Vive",
			'es-es': "Corte Mach",
			'it-it': "Taglio Mach",
			'pt-br': "Corte Supersônico",
			'de-de': "Schallschnitt"
		},

		effect: {
			'en-us': "Discard a Special Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			'es-es': "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
			'it-it': "Scarta un'Energia speciale dal Pokémon attivo del tuo avversario.",
			'pt-br': "Descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
			'de-de': "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "As Scyther fights more and more battles, its scythes become sharper and sharper. With a single slice, Scyther can fell a massive tree.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691723,
				tcgplayer: 478052
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691723,
				tcgplayer: 478052
			}
		},
	],
}

export default card
