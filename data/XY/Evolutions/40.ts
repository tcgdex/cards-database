import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Électrode",
		es: "Electrode",
		it: "Electrode",
		pt: "Electrode",
		de: "Lektrobal"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		101,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
		es: "Voltorb",
		it: "Voltorb",
		pt: "Voltorb",
		de: "Voltobal"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Buzzap Thunder",
				fr: "Tonnerre Buzzap",
				es: "Trueno Matazumbido",
				it: "Tuonoscarica",
				pt: "Zumbido de Trovão",
				de: "Zischender Donner"
			},
			effect: {
				en: "Once during your turn (before your attack), you may Knock Out this Pokémon and attach it to one of your Lightning Pokémon as a Special Energy card. This card provides 2 Lightning Energy only while this card is attached to a Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez mettre K.O. ce Pokémon et l'attacher à l'un de vos Pokémon Lightning en tant que carte Énergie spéciale. Cette carte ne fournit 2 Énergies Lightning que pendant qu'elle est attachée à un Pokémon.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes dejar Fuera de Combate a este Pokémon y unirlo a 1 de tus Pokémon Lightning como carta de Energía Especial. Esta carta proporciona 2 Energías Lightning solo mientras esta carta esté unida a un Pokémon.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi mettere KO questo Pokémon e assegnarlo a uno dei tuoi Pokémon Lightning come una carta Energia speciale. Questa carta fornisce due Energie Lightning solo quando è assegnata a un Pokémon.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você pode Nocautear este Pokémon e o ligar a um dos seus Pokémon Lightning como um card de Energia Especial. Este card fornece 2 Energias Lightning somente quando está ligado a um Pokémon.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dieses Pokémon kampfunfähig machen und an 1 deiner Lightning-Pokémon als 1 Spezial-Energiekarte anlegen. Diese Karte liefert nur dann 2 Lightning-Energien, wenn sie an ein Pokémon angelegt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],

			name: {
				en: "Head Bolt",
				fr: "Éclair Frontal",
				es: "Rayo de Cabeza",
				it: "Zuccalampo",
				pt: "Cabeçada de Raio",
				de: "Kopf-Blitz"
			},

			damage: 70
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 293396,
		tcgplayer: 124053
	}
}

export default card
