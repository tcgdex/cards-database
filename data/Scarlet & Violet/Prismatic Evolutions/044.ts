import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Munkidori",
		fr: "Fortusimia",
		es: "Munkidori",
		pt: "Munkidori",
		it: "Munkidori",
		de: "Benesaru"
	},

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
			pt: "Adrena-cérebro",
			it: "Adrena-Mente",
			de: "Adrena-Hirn"
		},

		effect: {
			en: "Once during your turn, if this Pokémon has any Darkness Energy attached, you may move up to 3 damage counters from 1 of your Pokémon to 1 of your opponent's Pokémon.",
			fr: "Une fois pendant votre tour, si ce Pokémon a au moins une Énergie Darkness attachée, vous pouvez déplacer jusqu'à 3 marqueurs de dégâts de l'un de vos Pokémon vers l'un des Pokémon de votre adversaire.",
			es: "Una vez durante tu turno, si este Pokémon tiene alguna Energía Darkness unida, puedes mover hasta 3 contadores de daño de uno de tus Pokémon a uno de los Pokémon de tu rival.",
			pt: "Uma vez durante o seu turno, se este Pokémon tiver alguma Energia Darkness ligada a ele, você poderá mover até 3 contadores de dano de 1 dos seus Pokémon para 1 dos Pokémon do seu oponente.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon ha delle Energie Darkness assegnate, puoi spostare fino a tre segnalini danno da uno dei tuoi Pokémon a un Pokémon del tuo avversario.",
			de: "Einmal während deines Zuges, wenn an dieses Pokémon mindestens 1 Darkness-Energie angelegt ist, kannst du bis zu 3 Schadensmarken von 1 deiner Pokémon auf 1 Pokémon deines Gegners verschieben."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Mind Bend",
			fr: "Contrôleur d'Esprit",
			es: "Fusión Mental",
			pt: "Dobra Mentes",
			it: "Fusione Mentale",
			de: "Gedankenverbiegung"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "H",
	variants: {
		holo: true,
		normal: false
	}
}

export default card