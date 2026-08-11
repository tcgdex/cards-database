import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [581],
	set: Set,

	name: {
		'en-us': "Swanna",
		'fr-fr': "Lakmécygne",
		'es-es': "Swanna",
		'it-it': "Swanna",
		'pt-br': "Swanna",
		'de-de': "Swaroness"
	},

	illustrator: "Sekio",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Ducklett",
		'fr-fr': "Couaneton",
		'es-es': "Ducklett",
		'it-it': "Ducklett",
		'pt-br': "Ducklett",
		'de-de': "Piccolente"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Water Pulse",
			'fr-fr': "Vibraqua",
			'es-es': "Hidropulso",
			'it-it': "Idropulsar",
			'pt-br': "Pulso d'Água",
			'de-de': "Aquawelle"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 20
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Air Slash",
			'fr-fr': "Lame d'Air",
			'es-es': "Tajo Aéreo",
			'it-it': "Eterelama",
			'pt-br': "Golpe de Ar",
			'de-de': "Luftschnitt"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte 1 Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674057,
				tcgplayer: 283921
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674057,
				tcgplayer: 283921
			}
		},
	],
}

export default card
