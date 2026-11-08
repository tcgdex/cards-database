import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [461],
	set: Set,

	name: {
		'fr-fr': "Dimoret",
		'en-us': "Weavile",
		'es-es': "Weavile",
		'it-it': "Weavile",
		'pt-br': "Weavile",
		'de-de': "Snibunna"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	evolveFrom: {
		'fr-fr': "Farfuret",
		'en-us': "Sneasel",
		'es-es': "Sneasel",
		'it-it': "Sneasel",
		'pt-br': "Sneasel",
		'de-de': "Sniebel"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Chasse Assaillante",
			'en-us': "Assaulting Hunt",
			'es-es': "Cacería de Asalto",
			'it-it': "Agguato Aggressivo",
			'pt-br': "Caçada Ofensiva",
			'de-de': "Verfolgungsjagd"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, lorsque ce Pokémon se déplace de votre Banc vers le Poste Actif, vous pouvez envoyer l'un des Pokémon de Banc de base de votre adversaire sur le Poste Actif.",
			'en-us': "Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may switch in 1 of your opponent's Benched Basic Pokémon to the Active Spot.",
			'es-es': "Una vez durante tu turno, cuando este Pokémon se mueve de tu Banca al Puesto Activo, puedes cambiar 1 de los Pokémon Básicos en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
			'it-it': "Una sola volta durante il tuo turno, quando questo Pokémon si sposta dalla tua panchina in posizione attiva, puoi sostituire uno dei Pokémon Base nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
			'pt-br': "Uma vez durante o seu turno, quando este Pokémon for movido do seu Banco para o Campo Ativo, você poderá mandar 1 dos Pokémon Básicos no Banco do seu oponente para o Campo Ativo.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon von deiner Bank in die Aktive Position wechselt, kannst du 1 Basis-Pokémon von der Bank deines Gegners in die Aktive Position einwechseln."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'fr-fr': "Griffe Taillante",
			'en-us': "Slashing Claw",
			'es-es': "Garra Cuchillazo",
			'it-it': "Artigli Laceranti",
			'pt-br': "Garra Cortadora",
			'de-de': "Schlitzende Klaue"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715609,
				tcgplayer: 497595,
				cardtrader: 248791
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715609,
				tcgplayer: 497595,
				cardtrader: 248791
			}
		},
	],

	illustrator: "saino misaki",

	description: {
		'en-us': "Evolution made it even more devious. It communicates by clawing signs in boulders.",
	},
}

export default card
