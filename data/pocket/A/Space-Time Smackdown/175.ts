import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Garchomp",
		'fr-fr': "Carchacrok",
		'es-es': "Garchomp",
		'it-it': "Garchomp",
		'de-de': "Knakrack",
		'pt-br': "Garchomp",
		'ko-kr': "한카리아스"
	},

	illustrator: "MINAMINAMI Take",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [445],
	hp: 140,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Gabite"
	},

	description: {
		'en-us': "It is said that when one runs at high speed, its wings create blades of wind that can fell nearby trees.",
		'fr-fr': "Lorsqu'il est lancé à pleine vitesse, ses ailes créent des lames\nde vent capables de trancher les arbres autour de lui.",
		'es-es': "Se dice que, cuando va a velocidad máxima, sus alas\ncrean cuchillas de viento que talan cualquier árbol.",
		'it-it': "Si dice che, quando va a tutta\nvelocità, le sue ali creino lame d'aria\nin grado di abbattere gli alberi vicini.",
		'de-de': "Stürmt es schnell vorwärts, erzeugen seine Flügel Klingen\naus Wind, die in der Nähe stehende Bäume fällen.",
		'pt-br': "Diz-se que, quando um corre em alta velocidade,\nsuas asas criam lâminas de vento que podem derrubar\nas árvores próximas.",
		'ko-kr': "고속으로 달려나가면\n날개가 공기의 칼날을 만들어 내고\n이로 인해 주변의 나무는 절단된다."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Reckless Shearing",
			'fr-fr': "Taillade Sauvage",
			'es-es': "Descarte Feroz",
			'it-it': "Falciata Selvaggia",
			'de-de': "Rücksichtsloses Scheren",
			'pt-br': "Corte Impulsivo",
			'ko-kr': "거칠게 깎기"
		},

		effect: {
			'en-us': "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw a card.",
			'fr-fr': "Vous devez défausser une carte de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher une carte.",
			'es-es': "Debes descartar 1 carta de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes robar 1 carta.",
			'it-it': "Devi scartare una carta che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi pescare una carta.",
			'de-de': "Du musst 1 Karte von deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 1 Karte ziehen.",
			
			'ko-kr': "자신의 차례에 자신의 패를 1장 트래쉬한다면 1번 사용할 수 있다. 자신의 덱을 1장 뽑는다.",
			'pt-br': "Você deve descartar 1 carta da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá comprar 1 carta."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Dragon Claw",
			'fr-fr': "Draco-Griffe",
			'es-es': "Garra Dragón",
			'it-it': "Dragartigli",
			'de-de': "Drachenklaue",
			'pt-br': "Garra de Dragão",
			'ko-kr': "드래곤클로"
		},

		damage: 100,
		cost: ["Water", "Fighting"]
	}],

	retreat: 1,
	boosters: ["palkia"]
}

export default card
