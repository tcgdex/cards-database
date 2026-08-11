import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [229],
	set: Set,

	name: {
		'en-us': "Houndoom",
		'fr-fr': "Démolosse",
		'es-es': "Houndoom",
		'it-it': "Houndoom",
		'pt-br': "Houndoom",
		'de-de': "Hundemon"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Single Strike Roar",
			'fr-fr': "Rugissement Poing Final",
			'es-es': "Rugido Golpe Brusco",
			'it-it': "Boato Colpo Singolo",
			'pt-br': "Rugido Golpe Decisivo",
			'de-de': "Fokussierter-Angriff-Brüller"
		},

		effect: {
			'en-us': "Once during your turn, you may search your deck for a Single Strike Energy card and attach it to 1 of your Single Strike Pokémon. Then, shuffle your deck. If you attached Energy to a Pokémon in this way, put 2 damage counters on that Pokémon.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Énergie Poing Final, puis l'attacher à l'un de vos Pokémon Poing Final. Mélangez ensuite votre deck. Si vous avez attaché de l'Énergie à un Pokémon de cette façon, placez 2 marqueurs de dégâts sur ce Pokémon-là.",
			'es-es': "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Energía Golpe Brusco y unirla a 1 de tus Pokémon Golpe Brusco. Después, baraja las cartas de tu baraja. Si has unido Energía a un Pokémon de esta manera, pon 2 contadores de daño en ese Pokémon.",
			'it-it': "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Energia Colpo Singolo e assegnarla a uno dei tuoi Pokémon Colpo Singolo. Poi rimischia le carte del tuo mazzo. Se hai assegnato dell'Energia a un Pokémon in questo modo, metti due segnalini danno su quel Pokémon.",
			'pt-br': "Uma vez durante o seu turno, você poderá procurar por 1 carta de Energia Golpe Decisivo no seu baralho e ligá-la a 1 dos seus Pokémon Golpe Decisivo. Em seguida, embaralhe o seu baralho. Se você ligou Energia a um Pokémon desta forma, coloque 2 contadores de dano naquele Pokémon.",
			'de-de': "Einmal während deines Zuges kannst du dein Deck nach 1 Fokussierter-Angriff-Energiekarte durchsuchen und sie an 1 deiner Fokussierter-Angriff-Pokémon anlegen. Mische anschließend dein Deck. Wenn du auf diese Weise Energie an ein Pokémon angelegt hast, lege 2 Schadensmarken auf jenes Pokémon."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Darkness Fang",
			'fr-fr': "Croc Obscur",
			'es-es': "Colmillo de Oscuridad",
			'it-it': "Oscurizanna",
			'pt-br': "Presa Sombria",
			'de-de': "Fänge der Dunkelheit"
		},

		damage: 50,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,


	stage: "Stage1",
	illustrator: "PLANETA Mochizuki",

	description: {
		'en-us': "Identifiable by its eerie howls, people a long time ago thought it was the grim reaper and feared it."
	},

	evolveFrom: {
		'en-us': "Houndour",
		'fr-fr': "Malosse",
		'es-es': "Houndour",
		'it-it': "Houndour",
		'pt-br': "Houndour",
		'de-de': "Hunduster"
	},

	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 546686,
				tcgplayer: 234104
			}
		},
	],
}

export default card
