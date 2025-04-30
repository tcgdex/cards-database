import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Hop's Dubwool",
		fr: "Moumouflon de Nabil",
		es: "Dubwool de Paul",
		de: "Hops Zwollock",
		it: "Dubwool di Hop",
		pt: "Dubwool do Lupo",
		'es-mx': "Dubwool de Paul"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Defiant Horn",
			fr: "Corne Provocatrice",
			es: "Cuerno Desafiante",
			de: "Herausforderndes Horn",
			it: "Corno Spavaldo",
			pt: "Chifre Desafiador",
			'es-mx': "Cuerno Desafiante"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez envoyer sur le Poste Actif l'un des Pokémon de Banc de votre adversaire.",
			es: "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes cambiar 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
			de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du 1 Pokémon von der Bank deines Gegners in die Aktive Position einwechseln.",
			it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi sostituire uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
			pt: "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá mandar 1 dos Pokémon no Banco do seu oponente para o Campo Ativo.",
			'es-mx': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes cambiar 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			de: "Kopfnuss",
			it: "Bottintesta",
			pt: "Cabeçada",
			'es-mx': "Golpe Cabeza"
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": true,
		"wPromo": false,
		}
}

export default card
