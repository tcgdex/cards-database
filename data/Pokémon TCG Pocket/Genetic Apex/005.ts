import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Caterpie",
		fr: "Chenipan",
		es: "Caterpie",
		it: "Caterpie",
		de: "Raupy",
		'pt-br': "Caterpie",
		ko: "캐터피"
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
			en: "Find a Friend",
			fr: "Trouver un Ami",
			es: "Encontrar un Amigo",
			it: "Trovamico",
			de: "Freunde finden",
			'pt-br': "Encontre um Amigo",
			ko: "친구찾기"
		},

		effect: {
			en: "Put 1 random {G} Pokémon from your deck into your hand.",
			fr: "Ajoutez au hasard un Pokémon {G} de votre deck à votre main.",
			es: "Pon 1 Pokémon {G} aleatorio de tu baraja en tu mano.",
			it: "Prendi un Pokémon {G} a caso dal tuo mazzo e aggiungilo alle carte che hai in mano.",
			de: "Nimm 1 zufälliges {G}-Pokémon aus deinem Deck auf deine Hand.",
			'pt-br': "Coloque 1 Pokémon {G} aleatório do seu baralho na sua mão.",
			ko: "자신의 덱에서 {G}포켓몬을 랜덤으로 1장 패로 가져온다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
		fr: "Pour se protéger, il émet par ses antennes\nune odeur nauséabonde qui fait fuir ses ennemis.",
		es: "Para protegerse, despide un hedor horrible por\nlas antenas con el que repele a sus enemigos.",
		it: "Per proteggersi emette un puzzo terribile dalle\nantenne sul capo, con cui tiene lontani i nemici.",
		de: "Als Schutz vor Feinden sondert es einen übel\nriechenden Gestank mit seinen Antennen ab.",
		'pt-br': "Para se proteger, libera um fedor horrível das\nantenas na cabeça para afastar seus inimigos.",
		ko: "머리의 더듬이로부터\n강렬한 냄새를 내어\n적을 물리치고 몸을 보호한다."
	},

	boosters: ["pikachu"]
}

export default card
