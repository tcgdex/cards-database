import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [854],
	set: Set,

	name: {
		'fr-fr': "Théffroi",
		'en-us': "Sinistea",
		'es-es': "Sinistea",
		'it-it': "Sinistea",
		'pt-br': "Sinistea",
		'de-de': "Fatalitee"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'fr-fr': "Thé Froid",
			'en-us': "Cold Tea",
			'es-es': "Té Frío",
			'it-it': "Tè Freddo",
			'pt-br': "Chá Frio",
			'de-de': "Kalter Tee"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "The soul of someone who died alone possessed some leftover tea. This Pokémon appears in hotels and houses.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725177,
				tcgplayer: 509930,
				cardtrader: 255782
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725177,
				tcgplayer: 509930,
				cardtrader: 255782
			}
		},
	],

	illustrator: "Yuka Morii",

	
}

export default card
