import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Salazzle ex",
		fr: "Malamandre-ex",
		es: "Salazzle ex",
		'es-mx': "Salazzle ex",
		de: "Amfira-ex",
		it: "Salazzle-ex",
		pt: "Salazzle ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Nasty Plot",
			fr: "Machination",
			es: "Maquinación",
			'es-mx': "Maquinación",
			de: "Ränkeschmied",
			it: "Congiura",
			pt: "Trama Maldosa"
		},

		effect: {
			en: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 2 cartas y ponlas en tu mano. Después, baraja tu mazo.",
			de: "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a due carte e aggiungile a quelle che hai in mano. Poi rimischia il tuo mazzo.",
			pt: "Procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			en: "Dire Nails",
			fr: "Ongles Funestes",
			es: "Uñas Aciagas",
			'es-mx': "Uñas Nocivas",
			de: "Unheilskrallen",
			it: "Unghie Fatali",
			pt: "Unhas Perniciosas"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned and Poisoned. Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé et Empoisonné. Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "El Pokémon Activo de tu rival pasa a estar Envenenado y Quemado. Cambia este Pokémon por uno de tus Pokémon en Banca.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Envenenado y Quemado. Cambia este Pokémon por 1 de tus Pokémon en Banca.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt und vergiftet. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato e avvelenato. Scambia questo Pokémon con uno nella tua panchina.",
			pt: "O Pokémon Ativo do seu oponente agora está Envenenado e Queimado. Troque este Pokémon por 1 dos seus Pokémon no Banco."
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		}
	],

	thirdParty: {
		tcgplayer: 684377,
		cardmarket: 877518
	}
}

export default card
