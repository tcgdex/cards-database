import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Caterpie",
		'fr-fr': "Chenipan",
		'es-es': "Caterpie",
		'it-it': "Caterpie",
		'de-de': "Raupy",
		'pt-br': "Caterpie",
		'ko-kr': "캐터피"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",

	dexId: [10],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Find a Friend",
			'fr-fr': "Trouver un Ami",
			'es-es': "Encontrar un Amigo",
			'it-it': "Trovamico",
			'de-de': "Freunde finden",
			'pt-br': "Encontre um Amigo",
			'ko-kr': "친구찾기"
		},

		effect: {
			'en-us': "Put 1 random {G} Pokémon from your deck into your hand.",
			'fr-fr': "Ajoutez au hasard un Pokémon {G} de votre deck à votre main.",
			'es-es': "Pon 1 Pokémon {G} aleatorio de tu baraja en tu mano.",
			'it-it': "Prendi un Pokémon {G} a caso dal tuo mazzo e aggiungilo alle carte che hai in mano.",
			'de-de': "Nimm 1 zufälliges {G}-Pokémon aus deinem Deck auf deine Hand.",
			'pt-br': "Coloque 1 Pokémon {G} aleatório do seu baralho na sua mão.",
			'ko-kr': "자신의 덱에서 {G}포켓몬을 랜덤으로 1장 패로 가져온다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
		'fr-fr': "Pour se protéger, il émet par ses antennes\nune odeur nauséabonde qui fait fuir ses ennemis.",
		'es-es': "Para protegerse, despide un hedor horrible por\nlas antenas con el que repele a sus enemigos.",
		'it-it': "Per proteggersi emette un puzzo terribile dalle\nantenne sul capo, con cui tiene lontani i nemici.",
		'de-de': "Als Schutz vor Feinden sondert es einen übel\nriechenden Gestank mit seinen Antennen ab.",
		'pt-br': "Para se proteger, libera um fedor horrível das\nantenas na cabeça para afastar seus inimigos.",
		'ko-kr': "머리의 더듬이로부터\n강렬한 냄새를 내어\n적을 물리치고 몸을 보호한다."
	},

	boosters: ["pikachu"]
}

export default card
