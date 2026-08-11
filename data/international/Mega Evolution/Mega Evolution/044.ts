import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Eiscue",
		'fr-fr': "Bekaglaçon",
		'de-de': "Kubuin",
		'it-it': "Eiscue",
		'es-es': "Eiscue",
		'pt-br': "Eiscue",
		'es-mx': "Eiscue"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",
	dexId: [875],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Freezing Headbutt",
			'fr-fr': "Coup d'Boule Gelant",
			'de-de': "Frostige Kopfnuss",
			'it-it': "Bottintesta Congelante",
			'es-es': "Cabezazo Paralizante",
			'pt-br': "Cabeçada Congelante",
			'es-mx': "Cabezazo Gélido"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado."
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'de-de': "Tackle",
			'it-it': "Azione",
			'es-es': "Placaje",
			'pt-br': "Investida",
			'es-mx': "Tacleada"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851115,
				tcgplayer: 654383
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851115,
				tcgplayer: 654383
			}
		},
	],
}

export default card
