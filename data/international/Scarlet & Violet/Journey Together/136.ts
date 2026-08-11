import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [832],
	set: Set,

	name: {
		'en-us': "Hop's Dubwool",
		'fr-fr': "Moumouflon de Nabil",
		'es-es': "Dubwool de Paul",
		'de-de': "Hops Zwollock",
		'it-it': "Dubwool di Hop",
		'pt-br': "Dubwool do Lupo",
		'es-mx': "Dubwool de Paul"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Hop's Wooloo",
		'fr-fr': "Moumouton de Nabil",
		'es-es': "Wooloo de Paul",
		'de-de': "Hops Wolly",
		'it-it': "Wooloo di Hop",
		'pt-br': "Wooloo do Lupo",
		'es-mx': "Wooloo de Paul"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Defiant Horn",
			'fr-fr': "Corne Provocatrice",
			'es-es': "Cuerno Desafiante",
			'de-de': "Herausforderndes Horn",
			'it-it': "Corno Spavaldo",
			'pt-br': "Chifre Desafiador",
			'es-mx': "Cuerno Desafiante"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez envoyer sur le Poste Actif l'un des Pokémon de Banc de votre adversaire.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes cambiar 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 Pokémon von der Bank deines Gegners in die Aktive Position einwechseln.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi sostituire uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá mandar 1 dos Pokémon no Banco do seu oponente para o Campo Ativo.",
			'es-mx': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes cambiar 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'de-de': "Kopfnuss",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada",
			'es-mx': "Golpe Cabeza"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",
	illustrator: "Ryota Murayama",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817288,
				tcgplayer: 623563
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817288,
				tcgplayer: 623563
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 817771,
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 819347,
			}
		},
	],
}

export default card
