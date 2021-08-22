import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Scolipede",
		fr: "Brutapode",
		es: "Scolipede",
		it: "Scolipede",
		pt: "Scolipede",
		de: "Cerapendra"
	},

	illustrator: "Megumi Higuchi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		en: "Whirlipede",
		fr: "Scobolide"
	},

	attacks: [{
		name: {
			en: "Poison Sting",
			fr: "Dard-Venin",
			es: "Picotazo Veneno",
			it: "Velenospina",
			pt: "Ferrão Venenoso",
			de: "Giftstachel"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
		},

		damage: 50,
		cost: ["Darkness"]
	}, {
		name: {
			en: "Venoshock",
			fr: "Choc Venin",
			es: "Carga Tóxica",
			it: "Velenoshock",
			pt: "Venochoque",
			de: "Giftschock"
		},

		effect: {
			en: "If your opponent’s Active Pokémon is Poisoned, this attack does 120 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 120 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 120 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "100+",
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "With quick movements, it chases down its foes, attacking relentlessly with its horns until it prevails."
	}
}

export default card