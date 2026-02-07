import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [1015],

	name: {
		en: "Munkidori",
		fr: "Fortusimia",
		es: "Munkidori",
		'es-mx': "Munkidori",
		de: "Benesaru",
		it: "Munkidori",
		pt: "Munkidori"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Adrena-Brain",
			fr: "Adréna-Mental",
			es: "Adrenalina Mental",
			'es-mx': "Adrenalina Mental",
			de: "Adrena-Hirn",
			it: "Adrena-Mente",
			pt: "Adrena-cérebro"
		},

		effect: {
			en: "Once during your turn, if this Pokémon has any {D} Energy attached, you may move up to 3 damage counters from 1 of your Pokémon to 1 of your opponent's Pokémon.",
			fr: "Une fois pendant votre tour, si ce Pokémon a au moins une Énergie {D} attachée, vous pouvez déplacer jusqu'à 3 marqueurs de dégâts de l'un de vos Pokémon vers l'un des Pokémon de votre adversaire.",
			es: "Una vez durante tu turno, si este Pokémon tiene alguna Energía {D} unida, puedes mover hasta 3 contadores de daño de uno de tus Pokémon a uno de los Pokémon de tu rival.",
			'es-mx': "Una vez durante tu turno, si este Pokémon tiene alguna Energía {D} unida, puedes mover hasta 3 contadores de daño de 1 de tus Pokémon a 1 de los Pokémon de tu rival.",
			de: "Einmal während deines Zuges, wenn an dieses Pokémon mindestens 1 {D}-Energie angelegt ist, kannst du bis zu 3 Schadensmarken von 1 deiner Pokémon auf 1 Pokémon deines Gegners verschieben.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon ha delle Energie {D} assegnate, puoi spostare fino a tre segnalini danno da uno dei tuoi Pokémon a un Pokémon del tuo avversario.",
			pt: "Uma vez durante o seu turno, se este Pokémon tiver alguma Energia {D} ligada a ele, você poderá mover até 3 contadores de dano de 1 dos seus Pokémon para 1 dos Pokémon do seu oponente."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Mind Bend",
			fr: "Contrôleur d'Esprit",
			es: "Fusión Mental",
			'es-mx': "Fusión Mental",
			de: "Gedankenverbiegung",
			it: "Fusione Mentale",
			pt: "Dobra Mentes"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso."
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		tcgplayer: 675911,
		cardmarket: 869710
	}
}

export default card