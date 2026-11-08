import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [365],
	set: Set,

	name: {
		'en-us': "Walrein",
		'fr-fr': "Kaimorse",
		'es-es': "Walrein",
		'it-it': "Walrein",
		'pt-br': "Walrein",
		'de-de': "Walraisa"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Sealeo",
		'fr-fr': "Phogleur",
		'es-es': "Sealeo",
		'it-it': "Sealeo",
		'pt-br': "Sealeo",
		'de-de': "Seejong"
	},

	attacks: [{
		name: {
			'en-us': "Aurora Beam",
			'fr-fr': "Onde Boréale",
			'es-es': "Rayo Aurora",
			'it-it': "Raggiaurora",
			'pt-br': "Raio Aurora",
			'de-de': "Aurorastrahl"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Hail Prison",
			'fr-fr': "Prison de Grêle",
			'es-es': "Prisión de Granizo",
			'it-it': "Prigione di Grandine",
			'pt-br': "Prisão de Granizo",
			'de-de': "Hagelknast"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon. Your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Descarta 2 Energías de este Pokémon. El Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Scarta due Energie da questo Pokémon. Il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Descarte 2 Energias deste Pokémon. O Pokémon Ativo do seu oponente agora está Paralisado.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel. Das Aktive Pokémon deines Gegners ist jetzt paralysiert."
		},

		damage: 160,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E",


	stage: "Stage2",

	description: {
		'en-us': "It shatters drift ice with its strong tusks. Its thick layer of blubber repels enemy attacks."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567119,
				tcgplayer: 241692
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567119,
				tcgplayer: 241692
			}
		},
	],
}

export default card
