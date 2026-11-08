import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [303],
	set: Set,

	name: {
		'en-us': "Mawile V",
		'fr-fr': "Mysdibule V",
		'es-es': "Mawile V",
		'it-it': "Mawile V",
		'pt-br': "Mawile V",
		'de-de': "Flunkifer V"
	},

	illustrator: "takuyoa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Pouty Slap",
			'fr-fr': "Claque Boudeuse",
			'es-es': "Bofetada Morros",
			'it-it': "Bronciosberla",
			'pt-br': "Tapa Carrancudo",
			'de-de': "Schmollschlag"
		},

		effect: {
			'en-us': "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Jogue 1 moeda. Se sair cara, descarte 1 Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Chomp Down",
			'fr-fr': "Dévoration",
			'es-es': "Dar un Mordisco",
			'it-it': "Serramascella",
			'pt-br': "Abocanhada",
			'de-de': "Zubeißen"
		},

		effect: {
			'en-us': "Discard a random card from your opponent's hand.",
			'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire.",
			'es-es': "Descarta 1 carta aleatoria de la mano de tu rival.",
			'it-it': "Scarta una carta a caso dalla mano del tuo avversario.",
			'pt-br': "Descarte 1 carta aleatória da mão do seu oponente.",
			'de-de': "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682225,
				tcgplayer: 451826
			}
		},
	],
}

export default card
