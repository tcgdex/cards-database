import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [917],
	set: Set,

	name: {
		'en-us': "Tarountula",
		'fr-fr': "Tissenboule",
		'es-es': "Tarountula",
		'it-it': "Tarountula",
		'pt-br': "Tarountula",
		'de-de': "Tarundel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "String Shot",
			'fr-fr': "Sécrétion",
			'es-es': "Disparo Demora",
			'it-it': "Millebave",
			'pt-br': "Estilingada",
			'de-de': "Fadenschuss"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "Pani Kobayashi",

	description: {
		'en-us': "The thread it secretes from its rear is as strong as wire. The secret behind the thread's strength is the topic of ongoing research.",
	},

	thirdParty: {
        cardmarket: 702313,
        tcgplayer: 487854
    }
}

export default card