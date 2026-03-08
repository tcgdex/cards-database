import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [828],
	set: Set,

	name: {
		en: "Thievul",
		fr: "Roublenard",
		es: "Thievul",
		it: "Thievul",
		pt: "Thievul",
		de: "Gaunux"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	evolveFrom: {
		en: "Nickit",
		fr: "Goupilou",
		es: "Nickit",
		it: "Nickit",
		pt: "Nickit",
		de: "Kleptifux"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Rob-'n'-Run",
			fr: "Vol à la Volée",
			es: "Robo y Huida",
			it: "Frega e Fuggi",
			de: "Rauben und rennen",
			pt: "Surrupiar e Sumir"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may have your opponent reveal their hand, and then you choose 2 Energy cards you find there and shuffle them into your opponent's deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez demander à votre adversaire de montrer sa main. Choisissez ensuite 2 cartes Énergie que vous y trouvez et mélangez-les avec le deck de votre adversaire.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes hacer que tu rival enseñe las cartas de su mano. Después, elige 2 cartas de Energía que encuentres entre ellas, ponlas en la baraja de tu rival y barájalas todas.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi far mostrare al tuo avversario le carte che ha in mano, poi scegli due carte Energia presenti tra esse e le rimischi nel suo mazzo.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá fazer com que o seu oponente revele a mão dele e, em seguida, você escolhe 2 cartas de Energia que encontrar lá e as embaralha no baralho do seu oponente.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du deinen Gegner dazu veranlassen, dir seine Handkarten zu zeigen. Wähle anschließend 2 Energiekarten, die du dort findest, und mische sie in das Deck deines Gegners."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Claw Slash",
			de: "Klauenschlitzer",
			fr: "Tranch'Griffe",
			es: "Cuchillada Garra",
			it: "Lacerartiglio",
			pt: "Golpe de Garra",
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "SIE NANAHARA",

	thirdParty: {
		cardmarket: 740651
	}
}

export default card
