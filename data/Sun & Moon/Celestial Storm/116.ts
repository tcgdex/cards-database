import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Whismur",
		fr: "Chuchmur",
		es: "Whismur",
		it: "Whismur",
		pt: "Whismur",
		de: "Flurmel"
	},
	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		293,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bawl",
				fr: "Sanglots",
				es: "Chillido",
				it: "Strillo",
				pt: "Chororô",
				de: "Flennen"
			},
			effect: {
				en: "You can use this attack only if you go second, and only on your first turn. Your opponent can’t play any Trainer cards from their hand during their next turn.",
				fr: "Vous ne pouvez utiliser cette attaque que si vous jouez en second et uniquement pendant votre premier tour. Votre adversaire ne peut pas jouer de carte Dresseur de sa main pendant son prochain tour.",
				es: "Puedes usar este ataque solo si sales segundo, y solo en tu primer turno. Tu rival no puede jugar ninguna carta de Entrenador de su mano durante su próximo turno.",
				it: "Puoi usare questo attacco solo se inizi per secondo e solo durante il tuo primo turno. Il tuo avversario non può giocare le carte Allenatore che ha in mano durante il suo prossimo turno.",
				pt: "Você só pode usar este ataque se for o segundo a jogar e somente na sua primeira vez de jogar. Seu oponente não poderá jogar nenhuma carta de Treinador da própria mão durante a próxima vez dele(a) jogar.",
				de: "Du kannst diese Attacke nur einsetzen, wenn du als Zweiter am Zug bist, und nur während deines ersten Zuges. Dein Gegner kann während seines nächsten Zuges keine Trainerkarten aus seiner Hand spielen."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pound",
				fr: "Écras’Face",
				es: "Destructor",
				it: "Botta",
				pt: "Pancada",
				de: "Pfund"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
