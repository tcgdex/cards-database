import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Drapion",
		fr: "Drascore",
		es: "Drapion",
		it: "Drapion",
		pt: "Drapion",
		de: "Piondragi"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		452,
	],

	hp: 110,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Skorupi",
		fr: "Rapion",
		es: "Skorupi",
		it: "Skorupi",
		pt: "Skorupi",
		de: "Pionskora"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Venoshock",
				fr: "Choc Venin",
				es: "Carga Tóxica",
				it: "Velenoshock",
				pt: "Venochoque",
				de: "Giftschock"
			},
			effect: {
				en: "If your opponent's Active Pokémon is Poisoned, this attack does 40 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 40 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 40 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 40 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente estiver Envenenado, esse ataque causará 40 de danos adicionais.",
				de: "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Venomous Fang",
				fr: "Croc-Poison",
				es: "Colmillo Nocivo",
				it: "Dentevelenoso",
				pt: "Dente Venenoso",
				de: "Gifthauer"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 281729,
		tcgplayer: 92242
	}
}

export default card
