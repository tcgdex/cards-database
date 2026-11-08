import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Venomoth",
		'fr-fr': "Aéromite",
		'es-es': "Venomoth",
		'it-it': "Venomoth",
		'de-de': "Omot",
		'pt-br': "Venomoth",
		'ko-kr': "도나리"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",

	dexId: [49],
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Venonat"
	},

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Poison Powder",
			'fr-fr': "Poudre Toxik",
			'es-es': "Polvo Veneno",
			'it-it': "Velenpolvere",
			'de-de': "Giftpuder",
			'pt-br': "Pó Venenoso",
			'ko-kr': "독가루"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
			'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet.",
			
			'ko-kr': "상대의 배틀 포켓몬을 독으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado."
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		'en-us': "The wings are covered with dustlike scales. Every time it flaps its wings, it looses highly toxic dust.",
		'fr-fr': "Ses ailes sont couvertes d'écailles poudreuses.\nÀ chaque battement d'ailes, il laisse tomber\nde la poudre hautement toxique.",
		'es-es': "Tiene las alas cubiertas de escamas.\nCada vez que las bate, esparce un\npolvillo sumamente venenoso.",
		'it-it': "Le ali sono ricoperte di scaglie. Ogni volta che le\nbatte, viene liberata nell'aria una polvere velenosa.",
		'de-de': "Seine Flügel sind mit staubähnlichen Schuppen\nüberzogen. Mit jedem Flügelschlag verstreut es\nhochgiftigen Puder.",
		'pt-br': "As suas asas são cobertas por escamas\nsemelhantes a poeira. Toda vez que bate\nas asas, libera uma poeira altamente tóxica.",
		'ko-kr': "날개에 가루가 묻어 있어\n팔락팔락 날갯짓을 할 때마다\n맹독 가루를 흩뿌린다."
	},

	boosters: ["mewtwo"]
}

export default card
