import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
		es: "Whimsicott",
		it: "Whimsicott",
		pt: "Whimsicott",
		de: "Elfun"
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
		en: "Cottonee",
		fr: "Doudouvet",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "The Wages of Fluff",
				fr: "Prix de la Douceur",
				es: "Precio de la Pelusa",
				it: "Prezzo della Morbidezza",
				pt: "Salário da Fofura",
				de: "Wohlwollen"
			},
			effect: {
				en: "If the Defending Pokémon is Knocked Out during your next turn, take 2 more Prize cards.",
				fr: "Si le Pokémon Défenseur est mis K.O. pendant votre prochain tour, récupérez 2 cartes Récompense supplémentaires.",
				es: "Si el Pokémon Defensor queda Fuera de Combate durante tu próximo turno, coge 2 cartas de Premio más.",
				it: "Se il Pokémon difensore viene messo KO durante il tuo prossimo turno, prendi due carte Premio in più.",
				pt: "Se o Pokémon Defensor for Nocauteado durante a sua próxima vez de jogar, pegue 2 cartas de Prêmio a mais.",
				de: "Wenn das Verteidigende Pokémon während deines nächsten Zuges kampfunfähig wird, nimm 2 Preiskarten mehr."
			},

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Fairy Wind",
				fr: "Vent Féérique",
				es: "Viento Feérico",
				it: "Vento di Fata",
				pt: "Vento de Fada",
				de: "Feenbrise"
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

	thirdParty: {
		cardmarket: 297547
	}
}

export default card
