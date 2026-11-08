import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [855],
	set: Set,

	name: {
		'fr-fr': "Polthégeist",
		'en-us': "Polteageist",
		'es-es': "Polteageist",
		'it-it': "Polteageist",
		'pt-br': "Polteageist",
		'de-de': "Mortipot"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	evolveFrom: {
		'fr-fr': "Théffroi",
		'en-us': "Sinistea",
		'es-es': "Sinistea",
		'it-it': "Sinistea",
		'pt-br': "Sinistea",
		'de-de': "Fatalitee"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'fr-fr': "Collecte d'Antiquités",
			'en-us': "Antique Collecting",
			'es-es': "Coleccionar Antigüedades",
			'it-it': "Raccolta di Anticaglie",
			'pt-br': "Coletar Relíquias",
			'de-de': "Antiquitäten sammeln"
		},

		effect: {
			'fr-fr': "Ajoutez à votre main une combinaison d'un maximum de 2 cartes Objet et Outil Pokémon de votre pile de défausse.",
			'en-us': "Put up to 2 in any combination of Item cards and Pokémon Tool cards from your discard pile into your hand.",
			'es-es': "Pon, en cualquier combinación, hasta 2 cartas de Objeto y de Herramienta Pokémon de tu pila de descartes en tu mano.",
			'it-it': "Prendi fino a due carte Strumento e carte Oggetto Pokémon in qualsiasi combinazione dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
			'pt-br': "Coloque até 2 cartas de Item e cartas de Ferramenta Pokémon da sua pilha de descarte na sua mão em qualquer combinação.",
			'de-de': "Nimm eine beliebige Kombination aus bis zu 2 Itemkarten und Pokémon-Ausrüstungen aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Psychic"],

		name: {
			'fr-fr': "Service du Thé",
			'en-us': "Pour Tea",
			'es-es': "Servir Té",
			'it-it': "Versa il Tè",
			'pt-br': "Servir Chá",
			'de-de': "Tee einschenken"
		},

		effect: {
			'fr-fr': "Placez 5 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
			'en-us': "Put 5 damage counters on your opponent's Active Pokémon.",
			'es-es': "Pon 5 contadores de daño en el Pokémon Activo de tu rival.",
			'it-it': "Metti cinque segnalini danno sul Pokémon attivo del tuo avversario.",
			'pt-br': "Coloque 5 contadores de dano no Pokémon Ativo do seu oponente.",
			'de-de': "Lege 5 Schadensmarken auf das Aktive Pokémon deines Gegners."
		}
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "The tea that composes Polteageist's body has a distinct and enjoyable flavor. Drinking too much, however, can be fatal.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725178,
				tcgplayer: 509931,
				cardtrader: 255783
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725178,
				tcgplayer: 509931,
				cardtrader: 255783
			}
		},
	],

	illustrator: "Megumi Mizutani",

	
}

export default card
