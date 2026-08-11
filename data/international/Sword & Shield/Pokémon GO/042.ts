import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [20],
	set: Set,

	name: {
		'en-us': "Alolan Raticate",
		'fr-fr': "Rattatac d'Alola",
		'es-es': "Raticate de Alola",
		'it-it': "Raticate di Alola",
		'pt-br': "Raticate de Alola",
		'de-de': "Alola-Rattikarl"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Alolan Rattata",
		'fr-fr': "Rattata d'Alola",
		'es-es': "Rattata de Alola",
		'it-it': "Rattata di Alola",
		'pt-br': "Rattata de Alola",
		'de-de': "Alola-Rattfratz"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Chase Up",
			'fr-fr': "Relancer",
			'es-es': "Perseguir",
			'it-it': "Rincorrere",
			'pt-br': "Perseguir",
			'de-de': "Dampf machen"
		},

		effect: {
			'en-us': "Search your deck for a card and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por 1 carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Super Fang",
			'fr-fr': "Croc Fatal",
			'es-es': "Superdiente",
			'it-it': "Superzanna",
			'pt-br': "Superpresa",
			'de-de': "Superzahn"
		},

		effect: {
			'en-us': "Put damage counters on your opponent's Active Pokémon until its remaining HP is 10.",
			'fr-fr': "Placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu'à ce qu'il ne lui reste que 10 PV.",
			'es-es': "Pon contadores de daño en el Pokémon Activo de tu rival hasta que le queden 10 PS.",
			'it-it': "Metti dei segnalini danno sul Pokémon attivo del tuo avversario finché i suoi PS rimanenti diventano 10.",
			'pt-br': "Coloque contadores de dano no Pokémon Ativo do seu oponente até o PS restante dele ser 10.",
			'de-de': "Lege so lange Schadensmarken auf das Aktive Pokémon deines Gegners, bis seine verbleibenden KP gleich 10 sind."
		}
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "It commands a nest of Rattata. Different nests don't get along, whipping up severe fights over feeding grounds.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665672,
				tcgplayer: 277003
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665672,
				tcgplayer: 277003
			}
		},
	],
}

export default card
