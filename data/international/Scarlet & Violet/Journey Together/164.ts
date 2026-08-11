import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [743],
	set: Set,

	name: {
		'en-us': "Lillie's Ribombee",
		'fr-fr': "Rubombelle de Lilie",
		'es-es': "Ribombee de Lylia",
		'de-de': "Lillys Bandelby",
		'it-it': "Ribombee di Lylia",
		'pt-br': "Ribombee da Lílian",
		'es-mx': "Ribombee de Lillie"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Lillie's Cutiefly",
		'fr-fr': "Bombydou de Lilie",
		'es-es': "Cutiefly de Lylia",
		'de-de': "Lillys Wommel",
		'it-it': "Cutiefly di Lylia",
		'pt-br': "Cutiefly da Lílian",
		'es-mx': "Cutiefly de Lillie"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Inviting Wink",
			'fr-fr': "Clin d'Œil Accueillant",
			'es-es': "Guiño Seductor",
			'de-de': "Einladendes Zwinkern",
			'it-it': "Ammiccare Accattivante",
			'pt-br': "Piscadinha Convidativa",
			'es-mx': "Guiño Encantador"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may have your opponent reveal their hand and you put any number of Basic Pokémon you find there onto their Bench.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez demander à votre adversaire de montrer sa main et vous placez le nombre voulu de Pokémon de base que vous y trouvez sur son Banc.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes hacer que tu rival enseñe las cartas de su mano, y tú pones cualquier cantidad de Pokémon Básicos que encuentres entre ellas en su Banca.",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du deinen Gegner dazu veranlassen, dir seine Handkarten zu zeigen, und du legst beliebig viele Basis-Pokémon, die du dort findest, auf seine Bank.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi far mostrare al tuo avversario le carte che ha in mano e tu metti un numero qualsiasi di Pokémon Base presenti tra esse nella sua panchina.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá fazer com que o seu oponente revele a mão dele e você colocará qualquer número de Pokémon Básicos que encontrar lá no Banco dele.",
			'es-mx': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes hacer que tu rival muestre las cartas de su mano, y tú pones cualquier cantidad de Pokémon Básicos que encuentres entre ellas en su Banca."
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Magical Shot",
			'fr-fr': "Coup Magique",
			'es-es': "Disparo Mágico",
			'de-de': "Magischer Schuss",
			'it-it': "Magicolpo",
			'pt-br': "Tiro Mágico",
			'es-mx': "Disparo Mágico"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "I",
	illustrator: "saino misaki",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817316,
				tcgplayer: 623591
			}
		},
	],
}

export default card
