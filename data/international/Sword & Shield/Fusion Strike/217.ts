import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [820],
	set: Set,

	name: {
		'en-us': "Greedent V",
		'fr-fr': "Rongrigou V",
		'es-es': "Greedent V",
		'it-it': "Greedent V",
		'pt-br': "Greedent V",
		'de-de': "Schlaraffel V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "PLANETA Yamashita",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Body Slam",
			'fr-fr': "Plaquage",
			'de-de': "Bodyslam",
			'es-es': "Golpe Cuerpo",
			'pt-br': "Pancada Corporal",
			'it-it': "Corposcontro"
		},

		damage: 40,

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Nom-Nom-Nom Incisors",
			'fr-fr': "Triple Incisive",
			'de-de': "Mjam-Mjam-Mjam-Nager",
			'es-es': "Incisivos Ñam-Ñam-Ñam",
			'pt-br': "Incisivos Nham-nham-nham",
			'it-it': "Incisivi Masticanti"
		},

		damage: 120,

		effect: {
			'en-us': "Draw 3 cards.",
			'fr-fr': "Piochez 3 cartes.",
			'de-de': "Ziehe 3 Karten.",
			'es-es': "Roba 3 cartas.",
			'pt-br': "Compre 3 cartas.",
			'it-it': "Pesca tre carte."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582953,
				tcgplayer: 253316
			}
		},
	],
}

export default card
