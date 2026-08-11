import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [1015],
	set: Set,

	name: {
		'en-us': "Munkidori",
		'fr-fr': "Fortusimia",
		'es-es': "Munkidori",
		'it-it': "Munkidori",
		'pt-br': "Munkidori",
		'de-de': "Benesaru"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Adrena-Brain",
			'fr-fr': "Adréna-Mental",
			'es-es': "Adrenalina Mental",
			'it-it': "Adrena-Mente",
			'pt-br': "Adrena-cérebro",
			'de-de': "Adrena-Hirn"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon has any {D} Energy attached, you may move up to 3 damage counters from 1 of your Pokémon to 1 of your opponent's Pokémon.",
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon a au moins une Énergie {D} attachée, vous pouvez déplacer jusqu'à 3 marqueurs de dégâts de l'un de vos Pokémon vers l'un des Pokémon de votre adversaire.",
			'es-es': "Una vez durante tu turno, si este Pokémon tiene alguna Energía {D} unida, puedes mover hasta 3 contadores de daño de uno de tus Pokémon a uno de los Pokémon de tu rival.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon ha delle Energie {D} assegnate, puoi spostare fino a tre segnalini danno da uno dei tuoi Pokémon a un Pokémon del tuo avversario.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon tiver alguma Energia {D} ligada a ele, você poderá mover até 3 contadores de dano de 1 dos seus Pokémon para 1 dos Pokémon do seu oponente.",
			'de-de': "Einmal während deines Zuges, wenn an dieses Pokémon mindestens 1 {D}-Energie angelegt ist, kannst du bis zu 3 Schadensmarken von 1 deiner Pokémon auf 1 Pokémon deines Gegners verschieben."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Mind Bend",
			'fr-fr': "Contrôleur d'Esprit",
			'es-es': "Fusión Mental",
			'it-it': "Fusione Mentale",
			'pt-br': "Dobra Mentes",
			'de-de': "Gedankenverbiegung"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
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


	illustrator: "Teeziro",

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 780967,
				tcgplayer: 560383
			}
		},
	],
}

export default card
