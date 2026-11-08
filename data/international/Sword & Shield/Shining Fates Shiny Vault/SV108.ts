import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [851],
	set: Set,

	name: {
		'fr-fr': "Scolocendre V",
		'en-us': "Centiskorch V",
		'es-es': "Centiskorch V",
		'it-it': "Centiskorch V",
		'pt-br': "Centiskorch V",
		'de-de': "Infernopod V"
	},

	illustrator: "5ban Graphics",
	rarity: "Shiny rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	attacks: [{
		name: {
			'fr-fr': "Chaleur Irradiante",
			'en-us': "Radiating Heat",
			'es-es': "Calor Radiante",
			'it-it': "Calore Radiante",
			'pt-br': "Calor Radiante",
			'de-de': "Strahlende Hitze"
		},

		effect: {
			'fr-fr': "Vous pouvez défausser une Énergie de ce Pokémon. Dans ce cas, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'en-us': "You may discard an Energy from this Pokémon. If you do, discard an Energy from your opponent's Active Pokémon.",
			'es-es': "Puedes descartar 1 Energía de este Pokémon. Si lo haces, descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Puoi scartare un'Energia da questo Pokémon. Se lo fai, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Você pode descartar 1 Energia deste Pokémon. Se fizer isto, descarte 1 Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Du kannst 1 Energie von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			'fr-fr': "Train Brûlant",
			'en-us': "Burning Train",
			'es-es': "Tren Ardiente",
			'it-it': "Treno Infuocato",
			'pt-br': "Trem Incendiário",
			'de-de': "Brennender Zug"
		},

		damage: 180,
		cost: ["Fire", "Fire", "Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",
	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539928,
				tcgplayer: 232498
			}
		},
	],
}

export default card
