import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [167],
	set: Set,

	name: {
		'en-us': "Spinarak",
		'fr-fr': "Mimigal",
		'es-es': "Spinarak",
		'it-it': "Spinarak",
		'pt-br': "Spinarak",
		'de-de': "Webarak"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Poison Sting",
			'fr-fr': "Dard-Venin",
			'es-es': "Picotazo Veneno",
			'it-it': "Velenospina",
			'pt-br': "Ferrão Venenoso",
			'de-de': "Giftstachel"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene avvelenato.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Envenenado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt vergiftet."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Although the poison from its fangs isn't that strong, it's potent enough to weaken prey that gets caught in its web.",
	},



	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665655,
				tcgplayer: 276944
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665655,
				tcgplayer: 276944
			}
		},
		{
			type: 'reverse',
			subtype: 'peelable-ditto',
			thirdParty: {
				tcgplayer: 277793
			}
		},
	],
}

export default card
