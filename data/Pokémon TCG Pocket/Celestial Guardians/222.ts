import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Gengar",
		fr: "Ectoplasma",
		es: "Gengar",
		it: "Gengar",
		de: "Gengar",
		'pt-br': "Gengar",
		ko: "팬텀"
	},

	illustrator: "kurumitsu",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		en: "Haunter"
	},

	description: {
		en: "To steal the life of its target, it slips into the prey's shadow and silently waits for an opportunity.",
		fr: "Il se cache dans l'ombre de sa victime et attend\npatiemment le bon moment pour lui voler sa vie.",
		es: "Para quitarle la vida a su presa, se desliza en su\nsombra y espera su oportunidad en silencio.",
		it: "Per sottrarre energia alla vittima si\nnasconde nella sua ombra e attende\nin silenzio il momento opportuno.",
		de: "Um Beute zu erlegen, versteckt es sich\nin deren Schatten und wartet still auf\neine günstige Gelegenheit.",
		'pt-br': "Este Pokémon aguarda pela oportunidade\nperfeita para se esconder na sombra de sua\npresa e roubar a vida dela.",
		ko: "생명을 빼앗기로 정한 먹잇감의\n그림자에 숨어들어\n꼼짝하지 않고 기회를 노린다."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Bother",
			fr: "Supplice",
			es: "Chinchar",
			it: "Tormento",
			de: "Tortur",
			'pt-br': "Azucrinar",
			ko: "괴롭히기"
		},

		damage: 50,
		cost: ["Psychic"],

		effect: {
			en: "Your opponent can't use any Supporter cards from their hand during their next turn.",
			fr: "Votre adversaire ne peut pas jouer de carte Supporter de sa main lors son prochain tour.",
			es: "Tu rival no puede jugar ninguna carta de Partidario de su mano durante su próximo turno.",
			it: "Il tuo avversario non può giocare le carte Aiuto che ha in mano durante il suo prossimo turno.",
			de: "Dein Gegner kann während seines nächsten Zuges keine Unterstützerkarten aus seiner Hand spielen.",
			'pt-br': "Seu oponente não poderá usar nenhuma carta de Apoiador durante o próximo turno dele.",
			ko: "상대의 다음 차례에 상대는 패에서 서포트를 꺼내서 사용할 수 없다."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card