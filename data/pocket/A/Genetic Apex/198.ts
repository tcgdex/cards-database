import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Farfetch'd",
		'fr-fr': "Canarticho",
		'es-es': "Farfetch'd",
		'it-it': "Farfetch'd",
		'de-de': "Porenta",
		'pt-br': "Farfetch'd",
		'ko-kr': "파오리"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",

	dexId: [83],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Leek Slap",
			'fr-fr': "Coup d'Oignon",
			'es-es': "Bofetada de Puerro",
			'it-it': "Porrosberla",
			'de-de': "Lauchschlag",
			'pt-br': "Golpe Alho Poró",
			'ko-kr': "파로 때리기"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "The stalk this Pokémon carries in its wings serves as a sword to cut down opponents. In a dire situation, the stalk can also serve as food.",
		'fr-fr': "Il tranche ses adversaires avec sa tige, qu'il manie comme\nune épée. Quand la situation l'exige, il s'en nourrit.",
		'es-es': "Blande el puerro que sujeta con un ala como si\nse tratase de una espada para rebanar a su rival.\nEn caso de necesidad, se lo come para nutrirse.",
		'it-it': "Colpisce gli avversari con un gambo, che\nbrandisce con l'ala come se fosse una spada.\nIn caso di necessità, può anche mangiarselo.",
		'de-de': "Unter seinem Flügel trägt es eine Lauchstange,\ndie es wie ein Schwert gegen Feinde einsetzt und\nwelche ihm im Bedarfsfall auch als Nahrung dient.",
		'pt-br': "O caule que este Pokémon carrega em suas asas\nserve como uma espada para cortar seus oponentes.\nEm situações difíceis, ele também pode servir como alimento.",
		'ko-kr': "날개로 쥐고 있는 파 줄기를\n칼처럼 휘둘러 상대를 베어버린다.\n몹시 허기질 때는 먹기도 한다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
