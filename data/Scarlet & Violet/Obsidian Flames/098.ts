import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [855],
	set: Set,

	name: {
		fr: "Polthégeist",
		en: "Polteageist",
		es: "Polteageist",
		it: "Polteageist",
		pt: "Polteageist",
		de: "Mortipot"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	evolveFrom: {
		fr: "Théffroi",
		en: "Sinistea",
		es: "Sinistea",
		it: "Sinistea",
		pt: "Sinistea",
		de: "Fatalitee"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			fr: "Collecte d'Antiquités",
			en: "Antique Collecting",
			es: "Coleccionar Antigüedades",
			it: "Raccolta di Anticaglie",
			pt: "Coletar Relíquias",
			de: "Antiquitäten sammeln"
		},

		effect: {
			fr: "Ajoutez à votre main une combinaison d'un maximum de 2 cartes Objet et Outil Pokémon de votre pile de défausse.",
			en: "Put up to 2 in any combination of Item cards and Pokémon Tool cards from your discard pile into your hand.",
			es: "Pon, en cualquier combinación, hasta 2 cartas de Objeto y de Herramienta Pokémon de tu pila de descartes en tu mano.",
			it: "Prendi fino a due carte Strumento e carte Oggetto Pokémon in qualsiasi combinazione dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
			pt: "Coloque até 2 cartas de Item e cartas de Ferramenta Pokémon da sua pilha de descarte na sua mão em qualquer combinação.",
			de: "Nimm eine beliebige Kombination aus bis zu 2 Itemkarten und Pokémon-Ausrüstungen aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Psychic"],

		name: {
			fr: "Service du Thé",
			en: "Pour Tea",
			es: "Servir Té",
			it: "Versa il Tè",
			pt: "Servir Chá",
			de: "Tee einschenken"
		},

		effect: {
			fr: "Placez 5 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
			en: "Put 5 damage counters on your opponent's Active Pokémon.",
			es: "Pon 5 contadores de daño en el Pokémon Activo de tu rival.",
			it: "Metti cinque segnalini danno sul Pokémon attivo del tuo avversario.",
			pt: "Coloque 5 contadores de dano no Pokémon Ativo do seu oponente.",
			de: "Lege 5 Schadensmarken auf das Aktive Pokémon deines Gegners."
		}
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Megumi Mizutani",

	thirdParty: {
		cardmarket: 725178
	}
}

export default card