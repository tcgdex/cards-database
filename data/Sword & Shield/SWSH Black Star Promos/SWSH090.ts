import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Houndoom",
		fr: "Démolosse",
		es: "Houndoom",
		it: "Houndoom",
		pt: "Houndoom",
		de: "Hundemon"
	},

	illustrator: "Uta",
	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		en: "Houndour"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Single Strike Roar",
			es: "Rugido Golpe Brusco",
			it: "Boato Colpo Singolo",
			pt: "Single Strike Roar",
			de: "Fokussierter-Angriff-Brüller"
		},

		effect: {
			en: "Once during your turn, you may search your deck for a Single Strike Energy card and attach it to 1 of your Single Strike Pokémon. Then, shuffle your deck. If you attached Energy to a Pokémon in this way, put 2 damage counters on that Pokémon.",
			es: "Una vez durante tu turno, puedes buscar en tu baraja 1 carta de Energía Golpe Brusco y unirla a 1 de tus Pokémon Golpe Brusco. Después, baraja las cartas de tu baraja. Si has unido Energía a un Pokémon de esta manera, pon 2 contadores de daño en ese Pokémon.",
			it: "Una sola volta durante il tuo turno, puoi cercare nel tuo mazzo una carta Energia Colpo Singolo e assegnarla a uno dei tuoi Pokémon Colpo Singolo. Poi rimischia le carte del tuo mazzo. Se hai assegnato dell’Energia a un Pokémon in questo modo, metti due segnalini danno su quel Pokémon.",
			pt: "Once during your turn, you may search your deck for a Single Strike Energy card and attach it to 1 of your Single Strike Pokémon. Then, shuffle your deck. If you attached Energy to a Pokémon in this way, put 2 damage counters on that Pokémon.",
			de: "Einmal während deines Zuges kannst du dein Deck nach 1 Fokussierter-Angriff-Energiekarte durchsuchen und sie an 1 deiner Fokussierter-Angriff-Pokémon anlegen. Mische anschließend dein Deck. Wenn du auf diese Weise Energie an ein Pokémon angelegt hast, lege 2 Schadensmarken auf jenes Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Darkness Fang",
			fr: "Croc Obscur",
			es: "Colmillo de Oscuridad",
			it: "Oscurizanna",
			pt: "Darkness Fang",
			de: "Fänge der Dunkelheit"
		},

		damage: 50,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,

	description: {
		en: "Identifiable by its eerie howls, people a long time ago thought it was the grim reaper and feared it."
	},

	stage: "Stage1",
	dexId: [229],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card