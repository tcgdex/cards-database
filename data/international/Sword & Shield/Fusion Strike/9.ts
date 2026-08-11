import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [540],
	set: Set,

	name: {
		'en-us': "Sewaddle",
		'fr-fr': "Larveyette",
		'es-es': "Sewaddle",
		'it-it': "Sewaddle",
		'pt-br': "Sewaddle",
		'de-de': "Strawickl"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Akira Komayama",

	description: {
		'en-us': "Since this Pokémon makes its own clothes out of leaves, it is a popular mascot for fashion designers."
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Grass Munch",
			'fr-fr': "Plantivore",
			'de-de': "Grasmampfer",
			'es-es': "Mascaplantas",
			'pt-br': "Papa-grama",
			'it-it': "Sgranocchiaerba"
		},

		damage: 10,

		effect: {
			'en-us': "Discard a {G} Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez une Énergie {G} du Pokémon Actif de votre adversaire.",
			'de-de': "Lege 1 {G}-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'es-es': "Descarta 1 Energía {G} del Pokémon Activo de tu rival.",
			'pt-br': "Descarte 1 Energia {G} do Pokémon Ativo do seu oponente.",
			'it-it': "Scarta un'Energia {G} dal Pokémon attivo del tuo avversario."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582037,
				tcgplayer: 253079
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582037,
				tcgplayer: 253079
			}
		},
	],
}

export default card
