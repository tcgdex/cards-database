import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Munkidori",
		'fr-fr': "Fortusimia",
		'es-es': "Munkidori",
		'es-mx': "Munkidori",
		'de-de': "Benesaru",
		'it-it': "Munkidori",
		'pt-br': "Munkidori"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1015],
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Adrena-Brain",
			'fr-fr': "Adréna-Mental",
			'es-es': "Adrenalina Mental",
			'es-mx': "Adrenalina Mental",
			'de-de': "Adrena-Hirn",
			'it-it': "Adrena-Mente",
			'pt-br': "Adrena-cérebro"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon has any {D} Energy attached, you may move up to 3 damage counters from 1 of your Pokémon to 1 of your opponent's Pokémon.",
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon a au moins une Énergie {D} attachée, vous pouvez déplacer jusqu'à 3 marqueurs de dégâts de l'un de vos Pokémon vers l'un des Pokémon de votre adversaire.",
			'es-es': "Una vez durante tu turno, si este Pokémon tiene alguna Energía {D} unida, puedes mover hasta 3 contadores de daño de uno de tus Pokémon a uno de los Pokémon de tu rival.",
			'es-mx': "Una vez durante tu turno, si este Pokémon tiene alguna Energía {D} unida, puedes mover hasta 3 contadores de daño de 1 de tus Pokémon a 1 de los Pokémon de tu rival.",
			'de-de': "Einmal während deines Zuges, wenn an dieses Pokémon mindestens 1 {D}-Energie angelegt ist, kannst du bis zu 3 Schadensmarken von 1 deiner Pokémon auf 1 Pokémon deines Gegners verschieben.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon ha delle Energie {D} assegnate, puoi spostare fino a tre segnalini danno da uno dei tuoi Pokémon a un Pokémon del tuo avversario.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon tiver alguma Energia {D} ligada a ele, você poderá mover até 3 contadores de dano de 1 dos seus Pokémon para 1 dos Pokémon do seu oponente."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Mind Bend",
			'fr-fr': "Contrôleur d'Esprit",
			'es-es': "Fusión Mental",
			'es-mx': "Fusión Mental",
			'de-de': "Gedankenverbiegung",
			'it-it': "Fusione Mentale",
			'pt-br': "Dobra Mentes"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso."
		},

		damage: 60
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
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "Munkidori keeps itself somewhere safe while it toys with its foes, using psychokinesis to induce intense dizziness.",
	},

	variants: [
	{
		type: "holo",
		thirdParty: {
			cardmarket: 869710,
			tcgplayer: 675911
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: 870294,
			tcgplayer: 676931
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870293,
			tcgplayer: 677071
		}
	},
],
}

export default card
