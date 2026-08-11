import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [518],
	set: Set,

	name: {
		'en-us': "Musharna",
		'fr-fr': "Mushana",
		'de-de': "Somnivora",
		'it-it': "Musharna",
		'pt-br': "Musharna",
		'es-es': "Musharna",
		'es-mx': "Musharna"
	},

	illustrator: "Eri Kamei",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Munna",
		'fr-fr': "Munna",
		'de-de': "Somniam",
		'it-it': "Munna",
		'pt-br': "Munna",
		'es-es': "Munna",
		'es-mx': "Munna"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Dream Calling",
			'fr-fr': "Appel du Rêve",
			'de-de': "Traumruf",
			'it-it': "Richiamo Onirico",
			'pt-br': "Chamado Onírico",
			'es-es': "Llamada Onírica",
			'es-mx': "Llamado Onírico"
		},

		effect: {
			'en-us': "You may search your deck for any number of Fennel cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Vous pouvez chercher dans votre deck le nombre voulu de cartes Oryse, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck.",
			'de-de': "Du kannst dein Deck nach beliebig vielen Vivian-Karten durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck.",
			'it-it': "Puoi cercare nel tuo mazzo un numero qualsiasi di carte Zania, mostrarle e aggiungerle alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Você pode procurar por qualquer número de cartas Fennel no seu baralho, revelá-las e colocá-las na sua mão. Em seguida, embaralhe o seu baralho.",
			'es-es': "Puedes buscar en tu baraja cualquier cantidad de cartas de Oryza, enseñarlas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Puedes buscar en tu mazo cualquier cantidad de cartas de Fennel, mostrarlas y ponerlas en tu mano. Después, baraja las cartas de tu mazo."
		}
	}, {
		cost: ["Psychic"],

		name: {
			'en-us': "Sleep Pulse",
			'fr-fr': "Pouls Dodo",
			'de-de': "Schlafimpuls",
			'it-it': "Sonnopulsar",
			'pt-br': "Pulso Sonolento",
			'es-es': "Pulso Soñoliento",
			'es-mx': "Pulso Somnífero"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Dormido."
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835980,
				tcgplayer: 642488
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835980,
				tcgplayer: 642488
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836344,
				tcgplayer: 642732
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836345,
				tcgplayer: 642659
			}
		}
	]
}

export default card
