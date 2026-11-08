import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [618],
	set: Set,

	name: {
		'en-us': "Stunfisk",
		'fr-fr': "Limonde",
		'es-es': "Stunfisk",
		'it-it': "Stunfisk",
		'pt-br': "Stunfisk",
		'de-de': "Flunschlik"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Paralyzing Crackle",
			'fr-fr': "Crépitement Paralysant",
			'es-es': "Chasquido Paralizante",
			'it-it': "Crepitio Paralizzante",
			'pt-br': "Estalo Paralisante",
			'de-de': "Paralysierendes Knistern"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed, and discard an Energy from that Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé, et vous défaussez une Énergie de ce Pokémon-là.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado, y descartas 1 Energía de ese Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato e tu scarti un'Energia da quel Pokémon.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado, e descarte uma Energia daquele Pokémon.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert, und du legst 1 Energie von jenem Pokémon auf seinen Ablagestapel."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794575,
				tcgplayer: 590065
			}
		},
	],

	illustrator: "N-DESIGN Inc.",

}

export default card
