import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Lillie's Ribombee",
		fr: "Rubombelle de Lilie",
		de: "Lillys Bandelby",
		es: "Ribombee de Lylia",
		it: "Ribombee di Lylia",
		pt: "Ribombee da Lílian"
	},

	illustrator: "tono",
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Inviting Wink",
			fr: "Clin d'Œil Accueillant",
			de: "Einladendes Zwinkern",
			es: "Guiño Seductor",
			it: "Ammiccare Accattivante",
			pt: "Piscadinha Convidativa"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may have your opponent reveal their hand and you put any number of Basic Pokémon you find there onto their Bench.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez demander à votre adversaire de montrer sa main et vous placez le nombre voulu de Pokémon de base que vous y trouvez sur son Banc.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du deinen Gegner dazu veranlassen, dir seine Handkarten zu zeigen, und du legst beliebig viele Basis-Pokémon, die du dort findest, auf seine Bank.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes hacer que tu rival enseñe las cartas de su mano, y tú pones cualquier cantidad de Pokémon Básicos que encuentres entre ellas en su Banca.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi far mostrare al tuo avversario le carte che ha in mano e tu metti un numero qualsiasi di Pokémon Base presenti tra esse nella sua panchina.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá fazer com que o seu oponente revele a mão dele e você colocará qualquer número de Pokémon Básicos que encontrar lá no Banco dele."
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
			de: "Magischer Schuss",
			es: "Disparo Mágico",
			it: "Magicolpo",
			pt: "Tiro Mágico"
		},

		damage: 50
	}],

	retreat: 0,
	regulationMark: "I"
}

export default card