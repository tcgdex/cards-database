import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Whimsicott",
		'fr-fr': "Farfaduvet",
		'es-es': "Whimsicott",
		'it-it': "Whimsicott",
		'pt-br': "Whimsicott",
		'de-de': "Elfun"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		547,
	],

	hp: 80,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Cottonee",
		'fr-fr': "Doudouvet",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "The Wages of Fluff",
				'fr-fr': "Prix de la Douceur",
				'es-es': "Precio de la Pelusa",
				'it-it': "Prezzo della Morbidezza",
				'pt-br': "Salário da Fofura",
				'de-de': "Wohlwollen"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Knocked Out during your next turn, take 2 more Prize cards.",
				'fr-fr': "Si le Pokémon Défenseur est mis K.O. pendant votre prochain tour, récupérez 2 cartes Récompense supplémentaires.",
				'es-es': "Si el Pokémon Defensor queda Fuera de Combate durante tu próximo turno, coge 2 cartas de Premio más.",
				'it-it': "Se il Pokémon difensore viene messo KO durante il tuo prossimo turno, prendi due carte Premio in più.",
				'pt-br': "Se o Pokémon Defensor for Nocauteado durante a sua próxima vez de jogar, pegue 2 cartas de Prêmio a mais.",
				'de-de': "Wenn das Verteidigende Pokémon während deines nächsten Zuges kampfunfähig wird, nimm 2 Preiskarten mehr."
			},

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Fairy Wind",
				'fr-fr': "Vent Féérique",
				'es-es': "Viento Feérico",
				'it-it': "Vento di Fata",
				'pt-br': "Vento de Fada",
				'de-de': "Feenbrise"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "It rides on the wind and slips into people's homes. After it has turned a room into a cotton-filled mess, it giggles to itself and takes off.",
	},

	thirdParty: {
		cardmarket: 297547,
		tcgplayer: 131005
	}
}

export default card
