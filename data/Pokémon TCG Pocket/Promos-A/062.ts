import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Farfetch'd",
		fr: "Canarticho",
		es: "Farfetch'd",
		it: "Farfetch'd",
		de: "Porenta",
		'pt-br': "Farfetch'd",
		ko: "파오리"
	},

	illustrator: "Eri Yamaki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "The stalk this Pokémon carries in its wings serves as a sword to cut down opponents. In a dire situation, the stalk can also serve as food.",
		fr: "Il tranche ses adversaires avec sa tige, qu'il manie comme\nune épée. Quand la situation l'exige, il s'en nourrit.",
		es: "Blande el puerro que sujeta con un ala como si\nse tratase de una espada para rebanar a su rival.\nEn caso de necesidad, se lo come para nutrirse.",
		it: "Colpisce gli avversari con un gambo, che\nbrandisce con l'ala come se fosse una spada.\nIn caso di necessità, può anche mangiarselo.",
		de: "Unter seinem Flügel trägt es eine Lauchstange,\ndie es wie ein Schwert gegen Feinde einsetzt und\nwelche ihm im Bedarfsfall auch als Nahrung dient.",
		'pt-br': "O caule que este Pokémon carrega em suas asas\nserve como uma espada para cortar seus oponentes.\nEm situações difíceis, ele também pode servir como alimento.",
		ko: "날개로 쥐고 있는 파 줄기를\n칼처럼 휘둘러 상대를 베어버린다.\n몹시 허기질 때는 먹기도 한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Leek Slap",
			fr: "Coup d'Oignon",
			es: "Bofetada de Puerro",
			it: "Porrosberla",
			de: "Lauchschlag",
			'pt-br': "Golpe Alho Poró",
			ko: "파로 때리기"
		},

		damage: 40,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["vol7"]
}

export default card