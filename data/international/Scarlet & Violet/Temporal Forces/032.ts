import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [725],
	set: Set,

	name: {
		'en-us': "Litten",
		'fr-fr': "Flamiaou",
		'es-es': "Litten",
		'it-it': "Litten",
		'pt-br': "Litten",
		'de-de': "Flamiau"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Fake Out",
			'fr-fr': "Bluff",
			'es-es': "Sorpresa",
			'it-it': "Bruciapelo",
			'pt-br': "Fingimento",
			'de-de': "Mogelhieb"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "It spends even the smallest amount of downtime grooming its fur with its tongue. Loose fur gathers in its stomach and serves as fuel for fiery moves.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760662,
				tcgplayer: 542776
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760662,
				tcgplayer: 542776
			}
		},
	],

	illustrator: "REND",

}

export default card