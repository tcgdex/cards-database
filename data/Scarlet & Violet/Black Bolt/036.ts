import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [518],
	set: Set,

	name: {
		en: "Musharna",
		fr: "Mushana",
		de: "Somnivora",
		it: "Musharna",
		pt: "Musharna",
		es: "Musharna",
		'es-mx': "Musharna"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	evolveFrom: {
		en: "Munna",
		fr: "Munna",
		de: "Somniam",
		it: "Munna",
		pt: "Munna",
		es: "Munna",
		'es-mx': "Munna"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Dream Calling",
			fr: "Appel du Rêve",
			de: "Traumruf",
			it: "Richiamo Onirico",
			pt: "Chamado Onírico",
			es: "Llamada Onírica",
			'es-mx': "Llamado Onírico"
		},

		effect: {
			en: "You may search your deck for any number of Fennel cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Vous pouvez chercher dans votre deck le nombre voulu de cartes Oryse, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck.",
			de: "Du kannst dein Deck nach beliebig vielen Vivian-Karten durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck.",
			it: "Puoi cercare nel tuo mazzo un numero qualsiasi di carte Zania, mostrarle e aggiungerle alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Você pode procurar por qualquer número de cartas Fennel no seu baralho, revelá-las e colocá-las na sua mão. Em seguida, embaralhe o seu baralho.",
			es: "Puedes buscar en tu baraja cualquier cantidad de cartas de Oryza, enseñarlas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Puedes buscar en tu mazo cualquier cantidad de cartas de Fennel, mostrarlas y ponerlas en tu mano. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Psychic"],

		name: {
			en: "Sleep Pulse",
			fr: "Pouls Dodo",
			de: "Schlafimpuls",
			it: "Sonnopulsar",
			pt: "Pulso Sonolento",
			es: "Pulso Soñoliento",
			'es-mx': "Pulso Somnífero"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Dormido."
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835980
	}
}

export default card