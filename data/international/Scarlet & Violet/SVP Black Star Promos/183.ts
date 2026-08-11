import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [743],
	set: Set,

	name: {
		'en-us': "Lillie's Ribombee",
		'fr-fr': "Rubombelle de Lilie",
		'de-de': "Lillys Bandelby",
		'es-es': "Ribombee de Lylia",
		'it-it': "Ribombee di Lylia",
		'pt-br': "Ribombee da Lílian"
	},

	illustrator: "tono",
	rarity: "Promo",
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
			'de-de': "Einladendes Zwinkern",
			'es-es': "Guiño Seductor",
			'it-it': "Ammiccare Accattivante",
			'pt-br': "Piscadinha Convidativa"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may have your opponent reveal their hand and you put any number of Basic Pokémon you find there onto their Bench.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez demander à votre adversaire de montrer sa main et vous placez le nombre voulu de Pokémon de base que vous y trouvez sur son Banc.",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du deinen Gegner dazu veranlassen, dir seine Handkarten zu zeigen, und du legst beliebig viele Basis-Pokémon, die du dort findest, auf seine Bank.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes hacer que tu rival enseñe las cartas de su mano, y tú pones cualquier cantidad de Pokémon Básicos que encuentres entre ellas en su Banca.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi far mostrare al tuo avversario le carte che ha in mano e tu metti un numero qualsiasi di Pokémon Base presenti tra esse nella sua panchina.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá fazer com que o seu oponente revele a mão dele e você colocará qualquer número de Pokémon Básicos que encontrar lá no Banco dele."
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Magical Shot",
			'fr-fr': "Coup Magique",
			'de-de': "Magischer Schuss",
			'es-es': "Disparo Mágico",
			'it-it': "Magicolpo",
			'pt-br': "Tiro Mágico"
		},

		damage: 50
	}],

	retreat: 0,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 816616,
				tcgplayer: 623235
			},
		},
		{
			type: "holo",
			stamp: ["set-logo", "staff"],
			thirdParty: {
				cardmarket: 817774,
				tcgplayer: 624472
			},
		}
	],
}

export default card
