import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [356],
	set: Set,

	name: {
		en: "Dusclops",
		fr: "Téraclope",
		es: "Dusclops",
		it: "Dusclops",
		pt: "Dusclops",
		de: "Zwirrklop"
	},

	illustrator: "DOM",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Duskull",
		fr: "Skelénox",
		es: "Duskull",
		it: "Duskull",
		pt: "Duskull",
		de: "Zwirrlicht"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Fade to Black",
			fr: "Fondu au Noir",
			es: "Ennegrecer",
			it: "Svanire nel Buio",
			pt: "Breu",
			de: "Schwarz vor Augen"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 30
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
	retreat: 2,
	regulationMark: "F",


	description: {
		en: "Its body is entirely hollow. When it opens its mouth, it sucks everything in as if it were a black hole.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691780,
				tcgplayer: 478180
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691780,
				tcgplayer: 478180
			}
		},
	],
}

export default card
