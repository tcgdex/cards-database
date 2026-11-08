import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [474],
	set: Set,

	name: {
		'en-us': "Porygon-Z",
		'fr-fr': "Porygon-Z",
		'es-es': "Porygon-Z",
		'it-it': "Porygon-Z",
		'pt-br': "Porygon-Z",
		'de-de': "Porygon-Z"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Porygon2",
		'fr-fr': "Porygon2",
		'es-es': "Porygon2",
		'it-it': "Porygon2",
		'pt-br': "Porygon2",
		'de-de': "Porygon2"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Bug Transmission",
			'fr-fr': "Piratage",
			'es-es': "Transmisión de Errores",
			'it-it': "Trasmissione Bug",
			'pt-br': "Transmissão Bugada",
			'de-de': "Fehlerübertragung"
		},

		effect: {
			'en-us': "Whenever you attach an Energy card from your hand to this Pokémon during your turn, you may make your opponent's Active Pokémon Confused.",
			'fr-fr': "Chaque fois que vous attachez une carte Énergie de votre main à ce Pokémon pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Confus.",
			'es-es': "Cada vez que unas 1 carta de Energía de tu mano a este Pokémon durante tu turno, puedes dejar al Pokémon Activo de tu rival Confundido.",
			'it-it': "Ogni volta che assegni una carta Energia a questo Pokémon dalla tua mano durante il tuo turno, puoi lasciare il Pokémon attivo del tuo avversario confuso.",
			'pt-br': "Sempre que você ligar 1 carta de Energia da sua mão a este Pokémon durante o seu turno, você poderá deixar o Pokémon Ativo do seu oponente Confuso.",
			'de-de': "Jedes Mal, wenn du während deines Zuges 1 Energiekarte aus deiner Hand an dieses Pokémon anlegst, kannst du das Aktive Pokémon deines Gegners verwirren."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Superbeam",
			'fr-fr': "Super Rayon",
			'es-es': "Supertransmisión",
			'it-it': "Super Raggio",
			'pt-br': "Superraio",
			'de-de': "Superstrahl"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 170,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Stage2",

	description: {
		'en-us': "A faulty update was added to its programming. Its behavior is noticeably strange, so the experiment may have been a failure."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567226,
				tcgplayer: 241795
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567226,
				tcgplayer: 241795
			}
		},
	],
}

export default card
