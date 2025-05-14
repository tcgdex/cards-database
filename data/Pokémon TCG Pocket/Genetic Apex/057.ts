import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Psyduck",
		fr: "Psykokwak",
		es: "Psyduck",
		it: "Psyduck",
		de: "Enton",
		'pt-br': "Psyduck",
		ko: "고라파덕"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Headache",
			fr: "Migraine",
			es: "Dolor de Cabeza",
			it: "Emicrania",
			de: "Kopfweh",
			'pt-br': "Dor de Cabeça",
			ko: "두통"
		},

		effect: {
			en: "Your opponent can't use any Supporter cards from their hand during their next turn.",
			fr: "Votre adversaire ne peut pas jouer de carte Supporter de sa main lors son prochain tour.",
			es: "Tu rival no puede jugar ninguna carta de Partidario de su mano durante su próximo turno.",
			it: "Il tuo avversario non può giocare le carte Aiuto che ha in mano durante il suo prossimo turno.",
			de: "Dein Gegner kann während seines nächsten Zuges keine Unterstützerkarten aus seiner Hand spielen.",
			'pt-br': "Seu oponente não poderá usar nenhuma carta de Apoiador durante o próximo turno dele.",
			ko: "상대의 다음 차례에 상대는 패에서 서포트를 꺼내서 사용할 수 없다."
		},

		damage: "10"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It is constantly wracked by a headache. When the headache turns intense, it begins using mysterious powers.",
		fr: "Ce Pokémon a tout le temps la migraine.\nQuand la douleur devient trop intense,\nil se met à utiliser des pouvoirs mystérieux.",
		es: "Padece continuamente dolores de\ncabeza. Cuando son muy fuertes,\nempieza a usar misteriosos poderes.",
		it: "È costantemente tormentato dal mal di testa.\nQuando il dolore si fa particolarmente\nintenso, inizia a usare strani poteri.",
		de: "Es wird permanent von Kopfschmerzen\ngeplagt. Wird der Schmerz stärker,\nsetzt es geheimnisvolle Kräfte ein.",
		'pt-br': "Sofre constantemente de dor de cabeça.\nQuando ela se intensifica, este Pokémon\ncomeça a usar poderes misteriosos.",
		ko: "항상 두통에 시달리고 있다.\n이 두통이 심해지면\n이상한 힘을 쓰기 시작한다."
	}
}

export default card
