import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [23],
	set: Set,

	name: {
		'fr-fr': "Abo",
		'en-us': "Ekans",
		'es-es': "Ekans",
		'it-it': "Ekans",
		'pt-br': "Ekans",
		'de-de': "Rettan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			'fr-fr': "Bombe Acide",
			'en-us': "Acid Spray",
			'es-es': "Bomba Ácida",
			'it-it': "Acidobomba",
			'pt-br': "Spray Ácido",
			'de-de': "Säurespeier"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'en-us': "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "The eggs of bird Pokémon are its favorite food. It swallows eggs whole, so sometimes an egg gets stuck, and Ekans faints.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733618,
				tcgplayer: 515955,
				cardtrader: 261113
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733618,
				tcgplayer: 515955,
				cardtrader: 261113
			}
		},
	],

	illustrator: "Kedamahadaitai Yawarakai",

	
}

export default card
