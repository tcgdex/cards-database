import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Rockruff",
		fr: "Rocabot",
		es: "Rockruff",
		it: "Rockruff",
		de: "Wuffels",
		'pt-br': "Rockruff",
		ko: "암멍이"
	},

	illustrator: "mele",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "This Pokémon is very friendly when it's young. Its disposition becomes vicious once it matures, but it never forgets the kindness of its master.",
		fr: "Ce Pokémon est très amical lorsqu'il est jeune.\nIl devient plus féroce avec le temps, mais\nsa loyauté envers son Dresseur reste infaillible.",
		es: "Cuando es pequeño es muy cariñoso. A medida\nque crece se vuelve más agresivo, pero la lealtad\nhacia su Entrenador perdura para siempre.",
		it: "I cuccioli di Rockruff si affezionano subito. Crescendo diventano più\nferoci, ma provano per sempre gratitudine verso chi li ha allenati.",
		de: "Wuffels ist sehr zutraulich, solange es jung ist.\nMit dem Alter wird es zunehmend wilder, doch es\nbleibt seinem Trainer auf ewig verbunden.",
		'pt-br': "Este Pokémon é amigável quando jovem. Adquire um\ntemperamento cruel ao crescer, mas nunca se esquece\nda bondade de seu mestre.",
		ko: "어렸을 때는 매우 잘 따른다.\n자라면서 성질이 사나워지지만\n주인에게 입은 은혜는 잊지 않는다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Signs of Evolution",
			fr: "Signes d'Évolution",
			es: "Indicios de Evolución",
			it: "Evolvisegni",
			de: "Spuren der Evolution",
			'pt-br': "Sinais de Evolução",
			ko: "진화의징조"
		},

		cost: ["Fighting"],

		effect: {
			en: "Put a random card that evolves from Rockruff from your deck into your hand.",
			fr: "Ajoutez au hasard une carte Évolution de Rocabot de votre deck à votre main.",
			es: "Pon 1 carta aleatoria que evolucione de Rockruff de tu baraja en tu mano.",
			it: "Prendi una carta a caso dal tuo mazzo che si evolve da Rockruff e aggiungila alle carte che hai in mano.",
			de: "Nimm 1 zufällige Karte, die sich aus Wuffels entwickelt, aus deinem Deck auf deine Hand.",
			
			ko: "「암멍이」에서 진화하는 카드를 자신의 덱에서 랜덤으로 1장 패로 가져온다.",
			'pt-br': "Coloque 1 carta aleatória que evolua de Rockruff do seu baralho na sua mão."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo"]
}

export default card