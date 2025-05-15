import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Frosmoth",
		fr: "Beldeneige",
		es: "Frosmoth",
		it: "Frosmoth",
		de: "Mottineva",
		'pt-br': "Frosmoth",
		ko: "모스노우"
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Snom"
	},


	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Powder Snow",
			fr: "Poudreuse",
			es: "Nieve Polvo",
			it: "Polneve",
			de: "Pulverschnee",
			'pt-br': "Neve em Pó",
			ko: "눈싸라기"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt schläft.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Asleep.",
			ko: "상대의 배틀 포켓몬을 잠듦으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido."
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "Frosmoth senses air currents with its antennae. It sends its scales drifting on frigid air, making them fall like snow.",
		fr: "Ce Pokémon perçoit les courants d'air grâce\nà ses antennes. Il lance ses écailles dans l'air\nglacé, et elles tombent comme de la neige.",
		es: "Puede percibir con sus antenas las corrientes\natmosféricas. Impregna sus escamas de frío\ny las hace caer como si fuera nieve.",
		it: "Percepisce le correnti d'aria grazie alle\nantenne. Impregna di aria gelida le sue\nscaglie per farle poi cadere a mo' di nevicata.",
		de: "Mit seinen Fühlern kann es Veränderungen in der\nAtmosphäre wahrnehmen. Seinen mit Kälte\nversetzten Flügelstaub lässt es wie Schnee rieseln.",
		'pt-br': "Frosmoth sente as correntes de ar com suas\nantenas. Arremessa suas escamas no ar gélido,\nfazendo com que caiam como neve.",
		ko: "더듬이로 대기의 흐름을 감지한다.\n날개 가루에 냉기를 섞어서\n눈처럼 내리게 한다."
	}
}

export default card
