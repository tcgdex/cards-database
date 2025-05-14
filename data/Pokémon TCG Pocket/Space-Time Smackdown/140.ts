import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Purugly",
		fr: "Chaffreux",
		es: "Purugly",
		it: "Purugly",
		de: "Shnurgarst",
		'pt-br': "Purugly",
		ko: "몬냥이"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	evolveFrom: {
		en: "Glameow"
	},

	description: {
		en: "It would claim another Pokémon's nest as its own if it finds a nest sufficiently comfortable.",
		fr: "Il n'hésitera pas à voler le nid d'autres Pokémon\net à s'y installer si celui-ci est confortable.",
		es: "Si se siente a gusto, no tiene ningún reparo en\napropiarse de las moradas de otros Pokémon.",
		it: "Si introduce sfacciatamente nelle tane degli\naltri Pokémon rivendicandole poi come proprie.",
		de: "Behagt ihm die Behausung eines anderen Pokémon,\nbleibt Shnurgarst einfach da und nistet sich dort ein.",
		'pt-br': "Se encontra um ninho de outro Pokémon que acha\nconfortável o bastante, toma-o para si.",
		ko: "다른 포켓몬의 거처라 할지라도\n편안하면 눌러앉아\n자신의 거처로 삼아버린다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Interrupt",
			fr: "Interruption",
			es: "Interrupción",
			it: "Interruzione",
			de: "Stören",
			'pt-br': "Interrupção",
			ko: "방해하기"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Your opponent reveals their hand. Choose a card you find there and shuffle it into your opponent's deck.",
			fr: "Votre adversaire dévoile sa main. Choisissez une carte que vous y trouvez et mélangez-la avec le deck de votre adversaire.",
			es: "Tu rival enseña las cartas de su mano. Elige 1 carta que encuentres entre ellas, ponla en su baraja y barájalas todas.",
			it: "Il tuo avversario mostra le carte che ha in mano. Scegline una e rimischiala nel suo mazzo.",
			de: "Dein Gegner zeigt dir seine Handkarten. Wähle 1 Karte, die du dort findest, und mische sie in das Deck deines Gegners.",
			'pt-br': "Seu oponente revela a mão dele. Escolha 1 carta que encontrar lá e embaralhe-a no baralho do seu oponente.",
			ko: "상대의 패의 앞면을 모두 보고 그 중에서 카드를 1장 선택해서 덱으로 되돌린다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card
